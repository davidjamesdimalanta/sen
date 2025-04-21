import { NextResponse } from 'next/server';
import { S3Client, ListObjectsV2Command, DeleteObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// S3 client configuration - credentials should be set via environment variables on the server
const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  // AWS credentials will be automatically loaded from environment variables:
  // AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

const bucketName = process.env.AWS_S3_BUCKET || 'senai-videos';
console.log('[DEBUG] API videos/ - Using bucket:', bucketName);
console.log('[DEBUG] API videos/ - Using region:', process.env.AWS_REGION);
console.log('[DEBUG] API videos/ - Has credentials:', Boolean(process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY));

// GET handler to list all videos
export async function GET() {
  console.log('[DEBUG] API videos/ - GET handler called (list all videos)');
  
  try {
    const command = new ListObjectsV2Command({
      Bucket: bucketName,
      Prefix: 'videos/', // If videos are stored in a subfolder
    });
    
    console.log('[DEBUG] API videos/ - Sending ListObjectsV2Command');
    const response = await s3Client.send(command);
    console.log('[DEBUG] API videos/ - Received response from ListObjectsV2Command');
    
    // Process the response
    console.log('[DEBUG] API videos/ - Contents count:', response.Contents?.length || 0);
    const videos = response.Contents?.map(item => {
      return {
        key: item.Key,
        filename: item.Key.split('/').pop(),
        lastModified: item.LastModified,
        size: item.Size,
      };
    }) || [];
    
    console.log('[DEBUG] API videos/ - Returning', videos.length, 'videos');
    return NextResponse.json({ videos }, { status: 200 });
  } catch (error) {
    console.error('[DEBUG] API videos/ - Error listing videos:', error);
    return NextResponse.json(
      { error: 'Error listing videos', message: error.message },
      { status: 500 }
    );
  }
}

// POST handler to get a presigned URL for a video
export async function POST(request) {
  console.log('[DEBUG] API videos/ - POST handler called (get presigned URL)');
  
  try {
    // Ensure request body is properly parsed
    console.log('[DEBUG] API videos/ - Parsing request body');
    const body = await request.json();
    const { key } = body;
    console.log('[DEBUG] API videos/ - Requested key:', key);
    
    if (!key) {
      console.log('[DEBUG] API videos/ - Error: Key is required');
      return NextResponse.json(
        { error: 'Key is required' },
        { status: 400 }
      );
    }
    
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      ContentType: 'video/mp4',
    });
    
    // Create a presigned URL valid for 10 minutes
    console.log('[DEBUG] API videos/ - Generating presigned URL for upload');
    const url = await getSignedUrl(s3Client, command, { expiresIn: 600 });
    console.log('[DEBUG] API videos/ - Got presigned URL for upload');
    
    return NextResponse.json({ url }, { status: 200 });
  } catch (error) {
    console.error('[DEBUG] API videos/ - Error creating presigned URL:', error);
    return NextResponse.json(
      { error: 'Error creating presigned URL', message: error.message },
      { status: 500 }
    );
  }
}

// DELETE handler to delete a video
export async function DELETE(request) {
  console.log('[DEBUG] API videos/ - DELETE handler called');
  
  try {
    // Ensure request body is properly parsed
    console.log('[DEBUG] API videos/ - Parsing request body');
    const body = await request.json();
    const { key } = body;
    console.log('[DEBUG] API videos/ - Key to delete:', key);
    
    if (!key) {
      console.log('[DEBUG] API videos/ - Error: Key is required');
      return NextResponse.json(
        { error: 'Key is required' },
        { status: 400 }
      );
    }
    
    const command = new DeleteObjectCommand({
      Bucket: bucketName,
      Key: key,
    });
    
    console.log('[DEBUG] API videos/ - Sending DeleteObjectCommand');
    await s3Client.send(command);
    console.log('[DEBUG] API videos/ - Successfully deleted object');
    
    return NextResponse.json(
      { message: 'Video deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[DEBUG] API videos/ - Error deleting video:', error);
    return NextResponse.json(
      { error: 'Error deleting video', message: error.message },
      { status: 500 }
    );
  }
} 
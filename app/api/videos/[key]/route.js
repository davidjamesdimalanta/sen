import { NextResponse } from 'next/server';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
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
console.log('[DEBUG] API videos/[key] - Using bucket:', bucketName);
console.log('[DEBUG] API videos/[key] - Using region:', process.env.AWS_REGION);
console.log('[DEBUG] API videos/[key] - Has credentials:', Boolean(process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY));

// GET handler to get a presigned URL for a specific video
export async function GET(request, context) {
  console.log('[DEBUG] API videos/[key] - GET handler called');
  
  try {
    // In Next.js 15, params must be awaited before accessing properties
    const params = await context.params;
    // Now it's safe to stringify params after awaiting
    console.log('[DEBUG] API videos/[key] - Params:', JSON.stringify(params));
    
    const { key } = params;
    console.log('[DEBUG] API videos/[key] - Key:', key);
    
    if (!key) {
      console.log('[DEBUG] API videos/[key] - Error: Key is required');
      return NextResponse.json(
        { error: 'Key is required' },
        { status: 400 }
      );
    }
    
    // URL decode the key (since it's part of the URL path)
    const decodedKey = decodeURIComponent(key);
    console.log('[DEBUG] API videos/[key] - Decoded key:', decodedKey);
    
    // Get the video from S3
    const s3Key = decodedKey.startsWith('videos/') ? decodedKey : `videos/${decodedKey}`;
    console.log('[DEBUG] API videos/[key] - S3 key:', s3Key);
    
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: s3Key,
    });
    
    // Create a presigned URL valid for 1 hour
    console.log('[DEBUG] API videos/[key] - Generating presigned URL');
    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    console.log('[DEBUG] API videos/[key] - Got presigned URL');
    
    return NextResponse.json({ url }, { status: 200 });
  } catch (error) {
    console.error('[DEBUG] API videos/[key] - Error:', error);
    return NextResponse.json(
      { error: 'Error getting video', message: error.message },
      { status: 500 }
    );
  }
} 
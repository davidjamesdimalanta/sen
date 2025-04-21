'use client';

/**
 * Get a list of all videos from the S3 bucket
 */
export async function listVideos() {
  console.log('[DEBUG] Client - listVideos called');
  try {
    console.log('[DEBUG] Client - Fetching /api/videos');
    const response = await fetch('/api/videos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('[DEBUG] Client - Response status:', response.status);
    if (!response.ok) {
      console.error('[DEBUG] Client - Error response:', response.statusText);
      throw new Error(`Error listing videos: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('[DEBUG] Client - Received videos count:', data.videos?.length || 0);
    return data.videos;
  } catch (error) {
    console.error('[DEBUG] Client - Error listing videos from S3:', error);
    throw error;
  }
}

/**
 * Get a presigned URL for a video to display it
 */
export async function getVideoUrl(key) {
  console.log('[DEBUG] Client - getVideoUrl called for key:', key);
  try {
    // URL encode the key if it's not already
    const encodedKey = encodeURIComponent(key);
    console.log('[DEBUG] Client - Encoded key:', encodedKey);
    console.log(`[DEBUG] Client - Fetching /api/videos/${encodedKey}`);
    
    const response = await fetch(`/api/videos/${encodedKey}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('[DEBUG] Client - Response status:', response.status);
    if (!response.ok) {
      console.error('[DEBUG] Client - Error response:', response.statusText);
      throw new Error(`Error getting video URL: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('[DEBUG] Client - Received presigned URL');
    return data.url;
  } catch (error) {
    console.error(`[DEBUG] Client - Error getting presigned URL for video ${key}:`, error);
    throw error;
  }
}

/**
 * Upload a video to S3
 */
export async function uploadVideo(file, key) {
  console.log('[DEBUG] Client - uploadVideo called for key:', key);
  try {
    // First get a presigned URL for uploading
    console.log('[DEBUG] Client - Requesting upload URL from /api/videos');
    const response = await fetch('/api/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key }),
    });
    
    console.log('[DEBUG] Client - Response status:', response.status);
    if (!response.ok) {
      console.error('[DEBUG] Client - Error response:', response.statusText);
      throw new Error(`Error getting upload URL: ${response.statusText}`);
    }
    
    const data = await response.json();
    const uploadUrl = data.url;
    console.log('[DEBUG] Client - Received presigned upload URL');
    
    // Now use the presigned URL to upload the file directly to S3
    console.log('[DEBUG] Client - Uploading file to presigned URL');
    const uploadResponse = await fetch(uploadUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': file.type,
      },
      body: file,
    });
    
    console.log('[DEBUG] Client - Upload response status:', uploadResponse.status);
    if (!uploadResponse.ok) {
      console.error('[DEBUG] Client - Error upload response:', uploadResponse.statusText);
      throw new Error(`Error uploading file: ${uploadResponse.statusText}`);
    }
    
    console.log('[DEBUG] Client - File uploaded successfully');
    return key;
  } catch (error) {
    console.error('[DEBUG] Client - Error uploading video to S3:', error);
    throw error;
  }
}

/**
 * Delete a video from S3
 */
export async function deleteVideo(key) {
  console.log('[DEBUG] Client - deleteVideo called for key:', key);
  try {
    console.log('[DEBUG] Client - Sending DELETE request to /api/videos');
    const response = await fetch('/api/videos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key }),
    });
    
    console.log('[DEBUG] Client - Response status:', response.status);
    if (!response.ok) {
      console.error('[DEBUG] Client - Error response:', response.statusText);
      throw new Error(`Error deleting video: ${response.statusText}`);
    }
    
    console.log('[DEBUG] Client - Video deleted successfully');
    return true;
  } catch (error) {
    console.error(`[DEBUG] Client - Error deleting video ${key} from S3:`, error);
    throw error;
  }
}

/**
 * Map S3 key to previous local path format
 * This helps maintain compatibility with existing code
 */
export function mapKeyToLocalPath(key) {
  // Extract just the filename from the key
  const filename = key.split('/').pop();
  return `/videos/${filename}`;
}

/**
 * Get video metadata and URL for display
 */
export async function getVideoData(key) {
  console.log('[DEBUG] Client - getVideoData called for key:', key);
  try {
    console.log('[DEBUG] Client - Getting URL for key');
    const url = await getVideoUrl(key);
    const filename = key.split('/').pop();
    console.log('[DEBUG] Client - Got URL, returning data');
    
    return {
      src: url,
      key: key,
      filename: filename,
    };
  } catch (error) {
    console.error(`[DEBUG] Client - Error getting video data for ${key}:`, error);
    throw error;
  }
} 
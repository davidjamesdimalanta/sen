'use client';

import { useState, useEffect } from 'react';
import { listVideos, getVideoUrl, uploadVideo, deleteVideo } from '../utils/s3';

export default function AdminPage() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);
  
  // Load videos from S3 on component mount
  useEffect(() => {
    fetchVideos();
  }, []);
  
  // Fetch the list of videos from S3
  const fetchVideos = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const videosList = await listVideos();
      
      // Get signed URLs for each video
      const videosWithUrls = await Promise.all(
        videosList.map(async (video) => {
          try {
            const url = await getVideoUrl(video.key);
            return { ...video, url };
          } catch (error) {
            console.error(`Error getting URL for video ${video.key}:`, error);
            return { ...video, error: true };
          }
        })
      );
      
      setVideos(videosWithUrls);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setError('Error loading videos. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.includes('video/')) {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError('Please select a valid video file.');
    }
  };
  
  // Handle file upload
  const handleUpload = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select a file to upload');
      return;
    }
    
    setIsUploading(true);
    setUploadProgress(0);
    setError(null);
    
    try {
      // Define the key (path) for the file in S3
      const key = `videos/${file.name}`;
      
      // Upload the file
      await uploadVideo(file, key);
      
      // Reset form and refresh videos list
      setFile(null);
      setUploadProgress(100);
      fetchVideos();
      
      // Reset upload state after a delay
      setTimeout(() => {
        setIsUploading(false);
        setUploadProgress(0);
      }, 1500);
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Error uploading file. Please try again.');
      setIsUploading(false);
    }
  };
  
  // Handle video deletion
  const handleDelete = async (key) => {
    if (!confirm('Are you sure you want to delete this video?')) {
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      await deleteVideo(key);
      // Refresh videos list
      fetchVideos();
    } catch (error) {
      console.error('Error deleting video:', error);
      setError('Error deleting video. Please try again.');
      setIsLoading(false);
    }
  };
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Video Management</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}
      
      {/* Upload Form */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Upload New Video</h2>
        
        <form onSubmit={handleUpload} className="space-y-4">
          <div>
            <label htmlFor="video" className="block text-sm font-medium text-gray-700 mb-1">
              Select Video File
            </label>
            <input
              type="file"
              id="video"
              accept="video/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          
          {file && (
            <div className="text-sm text-gray-500">
              Selected file: {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
            </div>
          )}
          
          {isUploading && (
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          )}
          
          <button
            type="submit"
            disabled={!file || isUploading}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isUploading ? 'Uploading...' : 'Upload Video'}
          </button>
        </form>
      </div>
      
      {/* Videos List */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Uploaded Videos</h2>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : videos.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No videos uploaded yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.key} className="border rounded-lg overflow-hidden bg-gray-50">
                {/* Video Preview */}
                <div className="aspect-video relative">
                  {video.error ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                      <span className="text-red-500">Error loading video</span>
                    </div>
                  ) : (
                    <video 
                      src={video.url} 
                      controls 
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                
                {/* Video Info */}
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 truncate">{video.filename}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {(video.size / (1024 * 1024)).toFixed(2)} MB • 
                    {new Date(video.lastModified).toLocaleDateString()}
                  </p>
                  
                  <div className="mt-4 flex space-x-2">
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
                    >
                      View
                    </a>
                    <button
                      onClick={() => handleDelete(video.key)}
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded text-white bg-red-600 hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 
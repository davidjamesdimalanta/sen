'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { getVideoUrl } from '../utils/s3';

// Default video data structure that will be updated with S3 URLs
const videoData = [
  {
    id: 1,
    title: 'Social Gatherings',
    description: 'SEN helps navigate complex social interactions at parties and gatherings.',
    key: 'videos/SENai - party scene.mp4',
    src: '', // Will be populated with S3 URL
    thumbnail: '/videos thumbnails/party.png',
  },
  {
    id: 2,
    title: 'The Job Interview',
    description: 'SEN can help you navigate the job interview process.',
    key: 'videos/SEN Demo 1.mp4',
    src: '', // Will be populated with S3 URL
    thumbnail: '/videos thumbnails/job_interview.png',
  },
];

export default function Demos() {
  const [videos, setVideos] = useState(videoData);
  const [activeVideo, setActiveVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);
  
  // Load videos from S3 on component mount
  useEffect(() => {
    const loadVideosFromS3 = async () => {
      setIsLoading(true);
      try {
        // Get signed URLs for each video
        const updatedVideos = await Promise.all(
          videoData.map(async (video) => {
            try {
              const signedUrl = await getVideoUrl(video.key);
              return { ...video, src: signedUrl };
            } catch (error) {
              console.error(`Error getting URL for video ${video.key}:`, error);
              return { ...video, error: true };
            }
          })
        );
        
        // Filter out videos that failed to load
        const validVideos = updatedVideos.filter(video => !video.error);
        
        if (validVideos.length > 0) {
          setVideos(validVideos);
          setActiveVideo(validVideos[0]);
        } else {
          console.error('No valid videos found in S3');
        }
      } catch (error) {
        console.error('Error loading videos from S3:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadVideosFromS3();
  }, []);
  
  // Handle video selection
  const handleVideoSelect = (video) => {
    setActiveVideo(video);
    setIsPlaying(false);
    
    // Reset main video player
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  
  // Toggle play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // Try to play with error handling
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.then(() => {
            // Playback started successfully
            setIsPlaying(true);
          }).catch(error => {
            // Auto-play was prevented or other error
            console.error("Video play error:", error);
            
            // Try again with muted (browsers often allow muted autoplay)
            videoRef.current.muted = true;
            videoRef.current.play().catch(e => {
              console.error("Even muted playback failed:", e);
            });
          });
        }
        return; // Don't update isPlaying yet - wait for the promise
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  // Update play state when video ends
  useEffect(() => {
    const videoElement = videoRef.current;
    
    const handleEnded = () => {
      setIsPlaying(false);
    };
    
    if (videoElement) {
      videoElement.addEventListener('ended', handleEnded);
    }
    
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  // If still loading videos or no active video yet
  if (isLoading || !activeVideo) {
    return (
      <section className="py-20 bg-[#1e1e1e] text-white">
        <div className="max-w-6xl mx-auto px-4 flex justify-center items-center" style={{ minHeight: '400px' }}>
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-meta-blue"></div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-20 bg-[#1e1e1e] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">DEMOS</h2>
        <p className="text-xl mb-12">Use cases and scenarios <span className="sen-gradient">SENai</span> can help in.</p>
        
        {/* Main Video Player */}
        <div className="relative aspect-video rounded-xl overflow-hidden mb-8 bg-neutral-dark-grey">
          <video
            ref={videoRef}
            src={activeVideo.src}
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
            preload="metadata"
            muted
          />
          
          {/* Play Button Overlay */}
          <div 
            className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
            onClick={togglePlayPause}
          >
            <div className="w-20 h-20 rounded-full bg-[#1e1e1e] bg-opacity-50 flex items-center justify-center border-2 border-secondary-meta-blue shadow-lg">
              <div className="w-16 h-16 rounded-full bg-secondary-meta-blue bg-opacity-80 flex items-center justify-center">
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <rect x="6" y="4" width="4" height="16" rx="1" fill="white" />
                    <rect x="14" y="4" width="4" height="16" rx="1" fill="white" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
            </div>
          </div>
          
          {/* Video Title & Description (visible when not playing) */}
          <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent transition-opacity ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
            <h3 className="text-2xl font-bold">{activeVideo.title}</h3>
            <p className="text-white/80">{activeVideo.description}</p>
          </div>
        </div>
        
        {/* Video Carousel/Thumbnails */}
        <div className="flex flex-wrap gap-4 justify-center">
          {videos.map((video) => (
            <div 
              key={video.id}
              className={`relative cursor-pointer transition-all duration-300 ${
                video.id === activeVideo.id 
                  ? 'border-4 border-secondary-meta-blue rounded-xl scale-100 shadow-lg shadow-secondary-meta-blue/30' 
                  : 'border border-gray-700 rounded-xl scale-95 opacity-70 hover:opacity-100'
              }`}
              onClick={() => handleVideoSelect(video)}
            >
              {/* Image Thumbnail */}
              <div className="w-[280px] h-[157px] overflow-hidden rounded-lg relative">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
              
              {/* Active Indicator */}
              {video.id === activeVideo.id && (
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-secondary-meta-blue"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

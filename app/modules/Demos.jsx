'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const videos = [
  {
    id: 1,
    title: 'Social Gatherings',
    description: 'SEN helps navigate complex social interactions at parties and gatherings.',
    src: '/videos/laughing.mp4',
    thumbnail: '/videos thumbnails/job_interview.png',
  },
  {
    id: 2,
    title: 'The Job Interview',
    description: 'SEN can help you navigate the job interview process.',
    src: '/videos/laughing.mp4',
    thumbnail: '/videos thumbnails/job_interview.png',
  },
];

/* Note: Originally this component used larger, higher-quality videos
   but they were removed from git tracking due to GitHub's 100MB file size limit.
   For deployment, replace these fallback videos with your full-quality videos
   stored in a proper video hosting service like Cloudinary, AWS S3, or similar. */

export default function Demos() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  
  // Handle video selection
  const handleVideoSelect = (video) => {
    setActiveVideo(video);
    setIsPlaying(false);
    setVideoError(false);
    
    // Reset main video player
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  
  // Toggle play/pause
  const togglePlayPause = () => {
    if (videoRef.current && !videoError) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => {
          console.error("Error playing video:", err);
          setVideoError(true);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  // Handle video error
  const handleVideoError = () => {
    setVideoError(true);
    setIsPlaying(false);
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
            onError={handleVideoError}
          />
          
          {/* Error Message if video fails to load */}
          {videoError && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
              <div className="text-center p-4">
                <p className="text-white text-lg mb-2">Video could not be loaded</p>
                <p className="text-gray-400 text-sm">Please check that the video file exists</p>
              </div>
            </div>
          )}
          
          {/* Play Button Overlay */}
          <div 
            className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity ${isPlaying || videoError ? 'opacity-0' : 'opacity-100'}`}
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

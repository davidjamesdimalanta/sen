'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import ChatBubble from './chatbubble'
import FeatureScroll from './modules/FeatureScroll.jsx'
import Demos from './modules/Demos.jsx'
import { getVideoUrl } from './utils/s3'

export default function Home() {
  const [videoUrls, setVideoUrls] = useState({
    laughing: null,
    contactsExpanding: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      setIsLoading(true);
      try {
        const [laughingUrl, contactsUrl] = await Promise.all([
          getVideoUrl('videos/laughing.mp4'),
          getVideoUrl('videos/contacts expanding.mp4'),
        ]);

        setVideoUrls({
          laughing: laughingUrl,
          contactsExpanding: contactsUrl,
        });
      } catch (error) {
        console.error('Error loading videos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadVideos();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-auto">
        <div 
          className="min-h-[80svh] flex items-center justify-center bg-gradient-to-b from-[#5728A5] to-[#1e1e1e] px-4 sm:px-6 md:px-8 py-16 md:py-24"
        >
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center relative">
            <div className="w-full min-h-[500px] flex flex-col justify-center items-center md:items-start text-center md:text-left md:pl-8">
              <Image 
                src="/senAI branding/senAI-long.svg" 
                alt="SenAI Logo" 
                width={240} 
                height={120} 
                className="mb-6"
                priority
              />
              <h2 className="text-2xl md:text-4xl text-white font-light mb-6">
                Because Being Yourself Is Never Good Enough.
              </h2>
              <p className="text-lg md:text-xl text-white font-light mb-8 max-w-lg">
                Our AI-powered wearables provide real-time social and emotional guidance, 
                so you&apos;ll never have to rely on your own judgement again.
              </p>
              <Link 
                href="/pre-order" 
                className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-sm font-medium hover:bg-white hover:text-[#5728A5] transition-all"
              >
                PRE-ORDER
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About SenAI Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <div className="relative flex flex-col-reverse lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-4xl font-medium mb-4 text-white">
                WEARABLES FOR THE SOCIALLY INEPT
              </h2>
              
              <p className="text-white font-light mb-12 text-lg">
                We get it. Socializing is hard! But relationships and human interactions are one of the most important 
                aspects of the human experience, so why not make it easier with a little help from AI?
              </p>
              
              <h3 className="text-2xl font-semibold mb-2 text-[#02A9F7]">
                THE OBJECTIVE
              </h3>
              
              <p className="text-white font-light text-lg">
                Our mission is to help individuals who struggle with social anxiety or
                people who just want to avoid awkward situations. SENai gives users
                real-time, personalized support, so you&apos;ll never make a mistake interacting with
                others ever again!
              </p>
            </div>
            
            {/* Right Content - Image with Chat Bubble */}
            <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">             
              <ChatBubble />
              
              {/* Main Image */}
              <div className="rounded-xl overflow-hidden shadow-2xl">
                {isLoading ? (
                  <div className="w-full aspect-video bg-gray-800 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-meta-blue"></div>
                  </div>
                ) : (
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full rounded-xl"
                  >
                    <source src={videoUrls.laughing} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 bg-[#1e1e1e] py-16">
        <FeatureScroll />
      </section>

      {/* Cross-section Image Section */}
      <section className="bg-[#212121] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              {isLoading ? (
                <div className="w-full aspect-video bg-gray-800 flex items-center justify-center rounded-lg">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-meta-blue"></div>
                </div>
              ) : (
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full rounded-lg"
                >
                  <source src={videoUrls.contactsExpanding} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-medium text-white mb-6">
                MEDICAL GRADE IMPLEMENTATION
              </h2>
              <p className="text-white font-light mb-4">
                We are partnering with a medical-grade battery company that makes 
                implantable microbatteries for things like pacemakers, to design something safe to wear.
              </p>
              <Link
                href="#"
                className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-sm font-medium hover:bg-white hover:text-[#1E1E1E] transition-colors mt-6"
              >
                Read Article
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Demos Section */}
      <Demos />
    </div>
  )
}

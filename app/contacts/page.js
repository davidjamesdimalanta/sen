'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ChatBubble from '../chatbubble';

export default function ContactsPage() {
  const videoContainerRef = useRef(null);
  const [videoScale, setVideoScale] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (videoContainerRef.current) {
        const scrollY = window.scrollY;
        setScrollPosition(scrollY);
        
        // Scale video based on scroll position (starts at 1, shrinks to 0.8)
        const newScale = Math.max(0.8, 1 - (scrollY * 0.0005));
        setVideoScale(newScale);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#1e1e1e] text-white overflow-x-hidden">
      {/* Hero Section with Sticky Video */}
      <section className="relative h-screen">
        {/* Sticky container */}
        <div 
          ref={videoContainerRef}
          style={{ 
            position: 'sticky',
            top: 0,
            height: '100vh',
            transform: `scale(${videoScale})`,
            transition: 'transform 0.1s ease-out',
            zIndex: 10
          }}
          className="flex items-center justify-center bg-gradient-to-b from-[#5728A5] to-[#1e1e1e] px-4 sm:px-6 md:px-8"
        >
          <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center items-center relative">
            {/* Hero Content */}
            <div className="text-center mb-8 md:mb-12" style={{ opacity: Math.max(0, 1 - scrollPosition / 300) }}>
              <h1 className="text-5xl md:text-7xl font-light mb-4 md:mb-6">SEN <span className="font-medium">Contacts</span></h1>
              <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto px-4">
                Because true emotional intelligence is outsourced intelligence.
              </p>
            </div>
            
            {/* Main Product Visual - Could be a video or image */}
            <div className="relative w-full max-w-3xl aspect-video mb-8 md:mb-12 px-4 sm:px-8 md:px-12">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover rounded-xl"
              >
                <source src="/videos/contacts-hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay ChatBubble */}
              <div className="absolute top-0 left-0 w-full h-full">
                <ChatBubble 
                  position="top-right" 
                  text="Detecting emotional cues... Your friend is anxious about something. Ask about their work." 
                  zIndex="z-30"
                />
              </div>
            </div>
            
            {/* CTA Button */}
            <div style={{ opacity: Math.max(0, 1 - scrollPosition / 400) }}>
              <Link 
                href="/pre-order" 
                className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-2 md:py-3 rounded-sm font-medium hover:bg-white hover:text-[#5728A5] transition-all text-base md:text-lg"
              >
                PRE-ORDER NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#1e1e1e] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light mb-12 md:mb-16 text-center">
            Never Misinterpret <span className="text-[#02A9F7] font-medium">Human Emotions</span> Again
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="flex flex-col">
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#02A9F7]">Micro-Display Overlay</h3>
                <p className="text-base md:text-lg font-light">
                  Our patented micro-display technology projects information directly into your field of vision,
                  providing real-time emotional analysis of everyone you interact with.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#02A9F7]">Emotional Pattern Recognition</h3>
                <p className="text-base md:text-lg font-light">
                  Advanced sensors detect micro-expressions and vocal inflections that human perception might miss.
                  Why develop your own emotional intelligence when SEN can do it for you?
                </p>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden mt-4 md:mt-0">
              <Image
                src="/graphics/contact-cross-section.png"
                alt="SEN Contact Lens Technology"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Satirical Business Value Section */}
      <section className="bg-[#212121] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="md:w-1/2">
              <Image
                src="/graphics/cahtting.png"
                alt="Enhanced Social Interactions"
                width={600}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </div>
            
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h2 className="text-2xl md:text-4xl font-medium mb-6 md:mb-8">
                OPTIMIZED <span className="text-[#02A9F7]">HUMAN CONNECTIONS</span>
              </h2>
              
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl font-medium mb-2 sen-gradient">Relationship ROI Tracking™</h3>
                  <p className="font-light text-base md:text-lg">
                    Quantify the value of every interaction. Because human relationships should be measured by their utility.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg md:text-xl font-medium mb-2 sen-gradient">Conversation Optimization™</h3>
                  <p className="font-light text-base md:text-lg">
                    Why waste time with authentic exchanges when our AI can predict the optimal response for any situation?
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg md:text-xl font-medium mb-2 sen-gradient">Empathy Outsourcing™</h3>
                  <p className="font-light text-base md:text-lg">
                    Let our AI understand emotions for you, so you can focus on what really matters: appearing emotionally intelligent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="bg-gradient-to-b from-[#1e1e1e] to-[#5728A5] py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light mb-4 md:mb-6">
            Be The First To Experience <span className="font-medium">SEN Contacts</span>
          </h2>
          <p className="text-lg md:text-xl font-light mb-8 md:mb-10 max-w-2xl mx-auto">
            Because in a world where authenticity is valued, nothing says authentic like algorithmically-guided human interaction.
          </p>
          <Link 
            href="/pre-order" 
            className="bg-white text-[#5728A5] px-6 md:px-8 py-2 md:py-3 rounded-sm font-medium hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-all text-base md:text-lg inline-block"
          >
            PRE-ORDER NOW
          </Link>
        </div>
      </section>
    </div>
  );
}

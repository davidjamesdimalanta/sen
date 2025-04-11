'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import ChatBubble from './chatbubble'
import FeatureScroll from './modules/FeatureScroll.jsx'

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-auto">
        <div 
          className="flex items-center justify-center bg-gradient-to-b from-[#5728A5] to-[#1e1e1e] px-4 sm:px-6 md:px-8 py-16 md:py-24"
        >
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center relative">
            {/* Left side - Portrait Video */}
            <div 
              className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0 md:pr-8"
            >
              <div className="relative w-full max-w-[300px] aspect-[9/16] rounded-xl shadow-2xl">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/sen-portrait-hero.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Fallback Image if Video Not Available */}
                <Image 
                  src="/graphics/contact-lens.png" 
                  alt="SenAI Product"
                  width={300}
                  height={530}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ opacity: 0, display: 'none' }}
                  priority
                />
                
                {/* Overlay ChatBubble */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <ChatBubble 
                    position="top-right" 
                    text="Your social analytics are improving. Keep maintaining eye contact." 
                    zIndex="z-30"
                  />
                </div>
              </div>
            </div>
            
            {/* Right side - Hero Content */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left md:pl-8">
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
                Our AI-powered contact lenses and glasses provide real-time social and emotional guidance, 
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
                <Image
                  src="/graphics/cahtting.png"
                  alt="People having social interaction"
                  width={600}
                  height={400}
                  className="w-full rounded-xl"
                />
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
              <Image
                src="/graphics/contact-cross-section.png"
                alt="SenAI Contact Lens Cross-section"
                width={500}
                height={500}
                className="rounded-lg"
              />
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
    </div>
  )
}

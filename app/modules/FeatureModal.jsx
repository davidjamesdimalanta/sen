'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import ChatBubble from '../chatbubble.jsx';

// Base Modal Component with shared functionality
function BaseModal({ children, onClose, isOpen }) {
  const modalRef = useRef(null);

  // Close when clicking outside the modal content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      // Add event listener when modal is open
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent scrolling on body
      document.body.style.overflow = 'hidden';
    }

    return () => {
      // Clean up
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Close on escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div 
        ref={modalRef}
        className="bg-[#1E1E1E] relative rounded-xl overflow-y-auto max-w-[90vw] w-full max-h-[90vh] shadow-2xl animate-fadeIn p-4 md:p-12 hide-scrollbar"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 bg-black/50 hover:bg-black text-white rounded-full p-2 transition-colors z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        {children}
      </div>
    </div>
  );
}


export function StandardFeatureModal({ feature, onClose, isOpen }) {
  return (
    <BaseModal onClose={onClose} isOpen={isOpen}>
      <div className="flex flex-col max-h-[100vh]">
        {/* Header */}
        <div className="py-8">
          <span className="text-[#02a9f7] font-medium text-lg">{feature.title}</span>
          <h2 className="text-4xl font-bold text-white">{feature.description}</h2>
          <p className="text-white/80 font-light text-xl md:text-2xl">
              {feature.content}
          </p>
        </div>
        
        {/* Content */}
        <div className="px-4 py-8 md:p-12 w-auto h-full bg-[#303030] rounded-3xl">
            {/* First section - stacks on mobile */}
            <div className="w-full flex-1 flex flex-col md:flex-row px-4 md:px-12 mb-12 md:mb-16">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start mb-6 md:mb-0">
                <div>
                  <h4 className="text-2xl md:text-4xl font-medium bg-gradient-to-r from-[#d4f0fc] to-[#02a9f7] text-transparent bg-clip-text overflow-visible">
                    {feature.bulletPoints[0].title}
                  </h4>
                  <p className="text-white/80 text-lg md:text-xl mt-2">{feature.bulletPoints[0].description}</p>
                </div>
              </div>
              <div className="relative w-full md:w-1/2">
                <div className="absolute top-0 left-0 w-full h-full">
                  <ChatBubble position="bottom-left" text="That wasn't very typical of you." theme="dark"/>
                </div>
                <Image
                  src="/graphics/not-typical.jpg"
                  alt="People having social interaction"
                  width={600}
                  height={400}
                  className="w-full rounded-2xl object-cover"
                />
              </div>
            </div>
            
            {/* Second section - reverse order on desktop, normal on mobile */}
            <div className="w-full flex-1 flex flex-col md:flex-row-reverse px-4 md:px-12 mb-12 md:mb-16">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start mb-6 md:mb-0">
                <div className="w-full">
                  <h4 className="text-2xl md:text-4xl font-medium bg-gradient-to-r from-[#d4f0fc] to-[#02a9f7] text-transparent bg-clip-text overflow-visible md:text-right">
                    {feature.bulletPoints[1].title}
                  </h4>
                  <p className="text-white/80 text-lg md:text-xl mt-2 md:text-right">{feature.bulletPoints[1].description}</p>
                </div>
              </div>
              <div className="relative w-full md:w-1/2">
                <div className="absolute top-0 left-0 w-full h-full">
                  <ChatBubble position="top-right" text="Adjusting personality to match current audience..." theme="dark"/>
                </div>
                <Image
                  src="/graphics/pexels-silverkblack-23495586.jpg"
                  alt="Crowd calibration visualization"
                  width={600}
                  height={400}
                  className="w-full rounded-2xl object-cover"
                />
              </div>
            </div>
            
            {/* Third section with two items - stacks on mobile */}
            <div className="w-full flex-1 flex flex-col md:flex-row px-4 md:px-12">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 md:space-y-8 mb-6 md:mb-0">
                <div>
                  <h4 className="text-2xl md:text-4xl font-medium bg-gradient-to-r from-[#d4f0fc] to-[#02a9f7] text-transparent bg-clip-text overflow-visible">
                    {feature.bulletPoints[2].title}
                  </h4>
                  <p className="text-white/80 text-lg md:text-xl mt-2">{feature.bulletPoints[2].description}</p>
                </div>
                <div>
                  <h4 className="text-2xl md:text-4xl font-medium bg-gradient-to-r from-[#d4f0fc] to-[#02a9f7] text-transparent bg-clip-text overflow-visible">
                    {feature.bulletPoints[3].title}
                  </h4>
                  <p className="text-white/80 text-lg md:text-xl mt-2">{feature.bulletPoints[3].description}</p>
                </div>
              </div>
              <div className="relative w-full md:w-1/2">
                <div className="absolute top-0 left-0 w-full h-full">
                  <ChatBubble position="top-right" text="Warning: Atypical behavior detected. Avoid this person." theme="dark"/>
                </div>
                <Image
                  src="/graphics/pexels-shvets-production-8410782.jpg"
                  alt="Alert visualization"
                  width={600}
                  height={400}
                  className="w-full rounded-2xl object-cover"
                />
              </div>
            </div>
      </div>
      </div>
    </BaseModal>
  );
}


// Efficiency Layout (for "Speed Up Your Social Game")
export function EfficiencyFeatureModal({ feature, onClose, isOpen }) {
  return (
    <BaseModal onClose={onClose} isOpen={isOpen}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="py-8">
          <span className="text-[#02a9f7] font-medium text-lg">{feature.title}</span>
          <h2 className="text-4xl font-bold text-white">{feature.description}</h2>
          <p className="text-white/80 font-light text-xl md:text-2xl">
              {feature.content}
          </p>
        </div>
        
        <div className="px-4 py-8 md:p-12 flex flex-col md:flex-row flex-1 bg-[#303030] rounded-3xl overflow-hidden">
          {/* Main Image */}
          <div className="relative md:w-1/2 h-64 md:h-auto">
            <Image 
              src={feature.image} 
              alt={feature.title}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Feature List */}
          <div className="p-4 md:p-12 md:w-1/2 h-auto overflow-y-auto hide-scrollbar">
            <h3 className="text-4xl font-semibold text-white mb-6">
              {feature.subtitle || "Our AI-powered Social Efficiency Engine™"}
            </h3>
            
            <div className="space-y-8">
              {feature.features && feature.features.map((item, index) => (
                <div key={index} className="border-b border-white/10 pb-6 last:border-0">
                  <h4 className="text-2xl font-medium text-white flex items-center">
                    <span className="bg-gradient-to-r from-[#d4f0fc] to-[#02a9f7] text-transparent bg-clip-text mr-2">{item.title}</span>
                  </h4>
                  <p className="text-white/80 mt-2">{item.description}</p>
                </div>
              ))}
            </div>
            
            {feature.callToAction && (
              <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-sm font-medium hover:bg-white hover:text-[#5728A5] transition-all">
                {feature.callToAction}
              </button>
            )}
          </div>
        </div>
      </div>
    </BaseModal>
  );
}

// Multi-Image Layout (for "Connect With Those Who Matter")
export function ConnectionFeatureModal({ feature, onClose, isOpen }) {
  return (
    <BaseModal onClose={onClose} isOpen={isOpen}>
      <div className="flex flex-col h-auto">
        {/* Header */}
        <div className="py-8">
          <span className="text-[#02a9f7] font-medium text-lg">{feature.title}</span>
          <h2 className="text-4xl font-bold text-white">{feature.description}</h2>
          <p className="text-white/80 font-light text-xl md:text-2xl">
              {feature.content}
            </p>
        </div>
        
        {/* Content */}
        <div className="p-4 md:p-12 w-auto h-full bg-[#303030] rounded-3xl">
          <div className="flex-1 overflow-visible flex flex-col px-4 md:px-12">
            <div className="w-full flex-1 flex flex-row my-4">
              <div className="w-full flex flex-col justify-center items-start">
                <div>
                  <h4 className="text-4xl font-medium bg-gradient-to-r from-[#d4f0fc] to-[#02a9f7] text-transparent bg-clip-text overflow-visible">
                    {feature.technologies[0].name}
                  </h4>
                  <p className="text-white/80 text-xl">{feature.technologies[0].description}</p>
                </div>
              </div>
            </div>
            <div className="w-full relative flex flex-col rounded-2xl">
                <ChatBubble position="top-right" text="You're not acting normally. Conform now!" theme="light"/>
                {/* Main Image */}
                <Image
                    src="/graphics/weirdo.jpg"
                    alt="People having social interaction"
                    width={600}
                    height={400}
                    className="w-full max-h-[500px] rounded-2xl object-cover"
                  />
            </div>
          </div>
        </div>
      </div>
    </BaseModal>
  );
}

// Default export for backward compatibility
export default StandardFeatureModal; 
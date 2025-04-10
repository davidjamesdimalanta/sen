'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FeatureCard({ feature, onClick }) {
  return (
    <div 
      className="relative min-w-[340px] h-[500px] md:min-h-[700px] rounded-2xl overflow-hidden cursor-pointer mx-3 first:ml-0 last:mr-0"
      onClick={() => onClick(feature)}
      style={{ 
        transition: 'transform 0.3s ease-in-out' 
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {/* Image Background */}
      <Image 
        src={feature.image} 
        alt={feature.title}
        fill
        className="object-cover"
        priority
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-start p-6 text-white z-10">
        <div>
        <div>
          <span className="text-sm font-medium mb-1 text-secondary-meta-blue">{feature.title}</span>
        </div>
          <h3 className="text-3xl font-bold">{feature.description}</h3>
        </div>
      </div>
    </div>
  );
} 
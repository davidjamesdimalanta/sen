'use client'

import { useState, useEffect, useRef } from 'react';

export default function ChatBubble({ 
  position = 'top-left', // Options: 'top-left', 'top-right', 'bottom-left', 'bottom-right'
  positionClasses = '',  // Optional custom position classes to override defaults
  zIndex = 'z-10',       // z-index control
  text = 'Looks like your friend are having fun. Tell a joke!', // Optional custom text
  theme = 'light'        // 'light' or 'dark' - affects text styling
}) {
  const fullText = text;
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [bubbleWidth, setBubbleWidth] = useState('auto');
  const chatBubbleRef = useRef(null);
  const textRef = useRef(null);
  const measureRef = useRef(null);
  const typingSpeed = 20; // milliseconds per character
  const startDelay = 1200; // 1.2 second delay before typing starts
  
  // Determine positioning classes based on position parameter
  const getPositionClasses = () => {
    if (positionClasses) return positionClasses; // Use custom classes if provided
    
    switch(position) {
      case 'top-right':
        return 'top-[-10px] right-[-10px]';
      case 'bottom-left':
        return 'bottom-[-10px] left-[-10px]';
      case 'bottom-right':
        return 'bottom-[-10px] right-[-10px]';
      case 'top-left':
      default:
        return 'top-[-10px] left-[-10px]';
    }
  };
  
  // Setup intersection observer to detect when element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Once we've detected it's visible, no need to observe anymore
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    if (chatBubbleRef.current) {
      observer.observe(chatBubbleRef.current);
    }

    return () => {
      if (chatBubbleRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  // Typing animation effect with delay
  useEffect(() => {
    if (!isVisible) return;
    
    // Initial delay before starting animation
    const startTimer = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);
      
      return () => clearInterval(typingInterval);
    }, startDelay);
    
    return () => clearTimeout(startTimer);
  }, [isVisible, fullText, typingSpeed]);
  
  // Measure text and update bubble width
  useEffect(() => {
    if (!textRef.current) return;
    
    // Create a hidden span to measure text width
    if (!measureRef.current) {
      const span = document.createElement('span');
      span.style.visibility = 'hidden';
      span.style.position = 'absolute';
      span.style.whiteSpace = 'nowrap';
      span.style.font = window.getComputedStyle(textRef.current).font;
      document.body.appendChild(span);
      measureRef.current = span;
    }
    
    // Update the content and get its width
    const span = measureRef.current;
    span.textContent = `Hmm... ${displayedText}`;
    
    // Set width with padding and constraints
    const contentWidth = span.getBoundingClientRect().width;
    const totalWidth = Math.min(Math.max(contentWidth + 100, 200), 400); // Add padding, min & max width
    
    // Smooth width transition
    setBubbleWidth(`${totalWidth}px`);
    
    // Cleanup function
    return () => {
      if (measureRef.current && !displayedText) {
        document.body.removeChild(measureRef.current);
        measureRef.current = null;
      }
    };
  }, [displayedText]);

  return (
    <div className="" ref={chatBubbleRef}>
      {/* Chat Bubble */}
      <div 
        className={`
          absolute ${getPositionClasses()} ${zIndex}
          flex flex-col justify-center items-start gap-1 sm:gap-2
          px-[15px] py-[10px] sm:px-[27px] sm:py-[14px]
          rounded-[20px] sm:rounded-[25px]
          border-[0.5px] border-[rgba(187,187,187,0.30)]
          bg-[linear-gradient(92deg,rgba(187,187,187,0.15)_2.51%,rgba(233,233,233,0.20)_97.45%)]
          shadow-[0px_4px_200px_0px_rgba(0,0,0,0.25)]
          backdrop-blur-[100px]
          transition-all duration-200 ease-out
        `}
        style={{ 
          width: bubbleWidth,
          minWidth: '120px',
          maxWidth: '300px',
          '@media (minWidth: 640px)': {
            minWidth: '140px',
            maxWidth: '500px'
          }
        }}
      >
        <p className={`text-sm sm:text-base ${theme === 'light' ? 'text-secondary-meta-blue' : 'text-primary-royal'}`}>SEN</p>
        <p className="text-white text-xs sm:text-base" ref={textRef}>Hmm... {displayedText}{isVisible && displayedText !== fullText && <span className="opacity-70 animate-pulse">|</span>}</p>
      </div>
    </div>
  );
}
'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function ContactsPage() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);
  const featureSectionRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const textSections = useRef([]);
  const [isInFeatureSection, setIsInFeatureSection] = useState(false);
  
  const toggleMute = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].muted = !videoRefs.current[index].muted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    videoRefs.current.forEach(videoElement => {
      if (!videoElement) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(videoElement);
      return () => observer.disconnect();
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!featureSectionRef.current || textSections.current.length === 0) return;
      
      const featureRect = featureSectionRef.current.getBoundingClientRect();
      const featureTop = featureRect.top;
      const featureHeight = featureRect.height;
      const featureBottom = featureRect.bottom;
      
      // Check if user is in the feature section
      setIsInFeatureSection(featureTop < window.innerHeight && featureBottom > 0);
      
      // If the feature section is in view
      if (featureTop < window.innerHeight && featureTop + featureHeight > 0) {
        // Calculate which text section should be active based on scroll position
        const sectionHeight = featureHeight / textSections.current.length;
        const scrollProgress = -featureTop / (featureHeight - window.innerHeight);
        const sectionIndex = Math.min(
          Math.floor(scrollProgress * textSections.current.length),
          textSections.current.length - 1
        );
        
        setActiveSection(Math.max(0, sectionIndex));
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#1e1e1e] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-between">
        <div className="bg-gradient-to-b from-[#5728A5] to-[#1e1e1e] h-full flex flex-col justify-between">
          {/* Hero Headline */}
          <div className="pt-8 md:pt-36 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light max-w-4xl mx-auto px-4">
              <span className="bg-gradient-to-r from-[#d4f0fc] to-[#02a9f7] text-transparent bg-clip-text">SEN</span> <span className="font-medium">Contacts</span>. 
              <span className="block mt-2">Intelligence you can see.</span>
            </h1>
            <p className="text-lg md:text-xl font-light mt-4 max-w-2xl mx-auto px-4 text-gray-300">
              Redefining human connection through revolutionary AI-powered contact lenses.
            </p>
          </div>
          
          {/* Product Visual Section */}
          <div className="relative max-w-7xl mx-auto flex-1 flex flex-col justify-center">
            {/* Large Product Image */}
            <div className="flex justify-center items-center py-4">
              <div className="relative w-full max-w-lg px-4">
                <Image 
                  src="/graphics/contact-lens.png"
                  alt="SEN Contacts in use"
                  width={800}
                  height={600}
                  className="w-full h-auto object-fill"
                  priority
                />
              </div>
            </div>
            
            {/* Features Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto px-4 py-4">
              <div className="text-center">
                <h3 className="text-lg font-medium text-[#02A9F7]">Invisible Design</h3>
                <p className="text-xs md:text-sm font-light mt-1">Advanced micro-technology seamlessly integrates with your natural vision.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium text-[#02A9F7]">Emotional Analysis</h3>
                <p className="text-xs md:text-sm font-light mt-1">Real-time detection of emotional cues others miss.</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium text-[#02A9F7]">AI-Powered Insights</h3>
                <p className="text-xs md:text-sm font-light mt-1">Contextual guidance to optimize every human interaction.</p>
              </div>
            </div>
          </div>
            
          {/* Call to Action */}
          <div className="text-center pb-8 md:pb-12 px-4">
            <p className="mt-2 text-xs text-gray-400">
              Available starting Fall 2024. Shipping within the United States only.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featureSectionRef} 
        className="bg-[#1e1e1e] py-16 md:py-24 px-4 sm:px-6 lg:px-8"
        style={{ minHeight: '200vh' }} // Make this section tall enough for scrolling through all sections
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light mb-12 md:mb-16 text-center">
            Join The <span className="text-[#02A9F7] font-medium">SENfluencer</span> Movement
          </h2>
          
          {/* First section - Become a SENfluencer */}
          <div className="mb-48 flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div 
              ref={el => textSections.current[0] = el} 
              className="w-full md:w-1/2 transition-opacity duration-500 flex flex-col justify-center"
              style={{ 
                opacity: activeSection === 0 ? 1 : 0.3,
                transition: 'opacity 0.5s ease'
              }}
            >
              <h3 className="text-2xl md:text-3xl font-medium mb-6 text-[#02A9F7]">Become a SENfluencer</h3>
              <p className="text-lg md:text-xl font-light">
                Join Sofia and our elite network of SENfluencers who are revolutionizing human interaction.
                Why rely on natural empathy when you can leverage our technology to perfectly calibrate every social exchange?
              </p>
              <div className="mt-12 py-8 px-6 bg-[#1b1b1b] rounded-lg">
                <p className="text-base md:text-lg font-light italic text-gray-300">
                  &ldquo;The SENfluencer program has completely transformed how I approach my content creation. 
                  I used to spend hours trying to understand what my audience wanted — now I just let the 
                  contacts tell me exactly what emotions to display for maximum engagement.&rdquo;
                </p>
                <p className="text-right mt-4 text-sm text-[#02A9F7]">— Sofia K., SENfluencer Elite Member</p>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative h-[40vh] md:h-[50vh]">
              <div className="relative h-full rounded-xl overflow-hidden">
                {/* Mute/Unmute Button */}
                <button 
                  onClick={() => toggleMute(0)}
                  className="absolute bottom-4 right-4 z-10 bg-black bg-opacity-50 p-2 rounded-full transition-opacity hover:bg-opacity-70"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  )}
                </button>
                
                <video 
                  ref={el => videoRefs.current[0] = el}
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover rounded-xl cursor-pointer"
                  poster="/graphics/contact-cross-section.png"
                  onClick={() => toggleMute(0)}
                >
                  <source src="/videos/influencer1.mp4" type="video/mp4" />
                  {/* Fallback image if video doesn't load */}
                  <Image
                    src="/graphics/contact-cross-section.png"
                    alt="SEN Contact Lens Technology"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </video>
              </div>
            </div>
          </div>
          
          {/* Second section - Ambassador Perks */}
          <div className="mb-48 flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
            <div 
              ref={el => textSections.current[1] = el} 
              className="w-full md:w-1/2 transition-opacity duration-500 flex flex-col justify-center"
              style={{ 
                opacity: activeSection === 1 ? 1 : 0.3,
                transition: 'opacity 0.5s ease'
              }}
            >
              <h3 className="text-2xl md:text-3xl font-medium mb-6 text-[#02A9F7]">Ambassador Perks</h3>
              <p className="text-lg md:text-xl font-light mb-8">
                Early access to emotional manipulation features, exclusive social scoring metrics, and the ability to 
                influence others without the burden of authentic connection. Sofia increased her follower count by 300% 
                after learning which emotions trigger engagement algorithms.
              </p>
              <ul className="space-y-6 mt-8">
                <li className="flex items-start">
                  <div className="bg-[#5728A5] rounded-full p-1 mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Beta Feature Access</h4>
                    <p className="text-base font-light text-gray-300">Try experimental emotional manipulation tools before anyone else.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#5728A5] rounded-full p-1 mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Priority Algorithm Updates</h4>
                    <p className="text-base font-light text-gray-300">Your lenses will receive emotional detection updates before standard users.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#5728A5] rounded-full p-1 mr-4 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">SENfluencer Community</h4>
                    <p className="text-base font-light text-gray-300">Network with others who understand that authentic connection is overrated.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="w-full md:w-1/2 relative h-[40vh] md:h-[50vh]">
              <div className="relative h-full rounded-xl overflow-hidden">
                {/* Mute/Unmute Button */}
                <button 
                  onClick={() => toggleMute(1)}
                  className="absolute bottom-4 right-4 z-10 bg-black bg-opacity-50 p-2 rounded-full transition-opacity hover:bg-opacity-70"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  )}
                </button>
                
                <video 
                  ref={el => videoRefs.current[1] = el}
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover rounded-xl cursor-pointer"
                  poster="/graphics/contact-cross-section.png"
                  onClick={() => toggleMute(1)}
                >
                  <source src="/videos/influencer2.mp4" type="video/mp4" />
                  {/* Fallback image if video doesn't load */}
                  <Image
                    src="/graphics/contact-cross-section.png"
                    alt="SEN Contact Lens Technology"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </video>
              </div>
            </div>
          </div>
          
          {/* Third section - Emotional Optimization */}
          <div className="mb-24 flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div 
              ref={el => textSections.current[2] = el} 
              className="w-full md:w-1/2 transition-opacity duration-500 flex flex-col justify-center"
              style={{ 
                opacity: activeSection === 2 ? 1 : 0.3,
                transition: 'opacity 0.5s ease'
              }}
            >
              <h3 className="text-2xl md:text-3xl font-medium mb-6 text-[#02A9F7]">Emotional Optimization</h3>
              <p className="text-lg md:text-xl font-light mb-8">
                &ldquo;SEN contacts helped me identify which friends were experiencing genuine happiness versus performative joy. 
                I&apos;ve since optimized my social circle for maximum efficiency.&rdquo; — Sofia, SENfluencer Elite
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-[#1b1b1b] p-6 rounded-lg">
                  <h4 className="text-lg font-medium text-[#02A9F7] mb-3">Engagement Metrics</h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Follower Growth</span>
                    <span className="text-sm text-green-400">+328%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <div className="flex items-center justify-between mt-4 mb-2">
                    <span className="text-sm">Emotional Manipulation</span>
                    <span className="text-sm text-purple-400">Elite</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full">
                    <div className="bg-purple-400 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="bg-[#1b1b1b] p-6 rounded-lg">
                  <h4 className="text-lg font-medium text-[#02A9F7] mb-3">Social ROI</h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Authenticity Bypassed</span>
                    <span className="text-sm text-blue-400">98%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                  <div className="flex items-center justify-between mt-4 mb-2">
                    <span className="text-sm">Time Saved</span>
                    <span className="text-sm text-teal-400">43.5 hrs/week</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full">
                    <div className="bg-teal-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative h-[40vh] md:h-[50vh]">
              <div className="relative h-full rounded-xl overflow-hidden">
                {/* Mute/Unmute Button */}
                <button 
                  onClick={() => toggleMute(2)}
                  className="absolute bottom-4 right-4 z-10 bg-black bg-opacity-50 p-2 rounded-full transition-opacity hover:bg-opacity-70"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  )}
                </button>
                
                <video 
                  ref={el => videoRefs.current[2] = el}
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover rounded-xl cursor-pointer"
                  poster="/graphics/contact-cross-section.png"
                  onClick={() => toggleMute(2)}
                >
                  <source src="/videos/influencer3.mp4" type="video/mp4" />
                  {/* Fallback image if video doesn't load */}
                  <Image
                    src="/graphics/contact-cross-section.png"
                    alt="SEN Contact Lens Technology"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </video>
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

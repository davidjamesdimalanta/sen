import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | SEN AI',
  description: 'Learn about SEN AI - Making machines feel feelings, so you don&apos;t have to.',
};

export default function AboutPage() {
  return (
    <div className="w-full overflow-x-hidden bg-[#1e1e1e] text-white">
      {/* Hero Section */}
      <section className="h-auto">
        <div className="min-h-[60svh] flex items-center justify-center bg-gradient-to-b from-[#5728A5] to-[#1e1e1e] px-4 sm:px-6 md:px-8 py-16 md:py-24">
          <div className="max-w-7xl mx-auto w-full flex flex-col justify-center items-center text-center">
            <h1 className="mt-20 text-3xl md:text-5xl text-white font-bold mb-6">
              ABOUT SEN AI
            </h1>
            <h2 className="text-xl md:text-3xl text-white font-light mb-8">
              Making machines feel feelings, so you don&apos;t have to.
            </h2>
            <p className="text-lg text-white font-light max-w-3xl mx-auto">
              At SEN AI, we believe a future where AI can empathize, react, and even awkwardly mirror your emotions is not just possible — it&apos;s inevitable.
            </p>
          </div>
        </div>
      </section>


      {/* Our Origins Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-medium mb-8 text-white">
                OUR ORIGINS: WHERE IT ALL BEGAN
              </h2>
              <p className="text-white font-light mb-6 text-lg">
                SEN AI was founded by a group of renegade scientists, engineers, and hopeless romantics (for data) who decided that making machines think wasn&apos;t enough. They should also feel.
              </p>
              <p className="text-white font-light mb-6 text-lg">
                Spinning out of prestigious research institutions, our founding team dared to ask the question nobody else would: &quot;What if your laptop could tell you it&apos;s disappointed in you?&quot;
              </p>
              <p className="text-white font-light text-lg">
                Since then, we&apos;ve pioneered the field of Affective AI — the science (and slight art) of teaching machines to detect, understand, and occasionally empathize with human emotion.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto max-h-[600px] rounded-xl shadow-2xl object-cover"
              >
                <source src="/public/videos/day in my life.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-medium mb-6 text-white text-center">
            OUR TECHNOLOGY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#212121] p-6 rounded-xl">
              <div className="text-[#02A9F7] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2"></path>
                  <path d="M6.3 12.3a5 5 0 0 1 7.4 0"></path>
                  <path d="M9 16a3 3 0 0 1 6 0"></path>
                  <path d="M12 14h.01"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h4 className="text-xl text-white font-medium mb-2">Subtle Human Emotions</h4>
              <p className="text-gray-400">Even the ones you don&apos;t admit to yourself</p>
            </div>
            
            <div className="bg-[#212121] p-6 rounded-xl">
              <div className="text-[#02A9F7] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a2 2 0 0 0-2 2c0 .74.4 1.39 1 1.73V7h-2c-.55 0-1.36.3-1.8.74l-2.27 2.27L7 13.07c.34.6.99 1 1.73 1 1.1 0 2-.9 2-2v-2h2v2c0 1.1.9 2 2 2 .74 0 1.39-.4 1.73-1l2.07-3.07-2.27-2.27c-.44-.43-1.25-.74-1.8-.74h-2V5.73c.6-.34 1-.99 1-1.73a2 2 0 0 0-2-2Z"></path>
                  <path d="M6.67 18.5c1.1 0 1.99.89 1.99 1.99v.02c0 1.1-.89 1.99-1.99 1.99h-.02c-1.1 0-1.99-.89-1.99-1.99v-.02c0-1.1.89-1.99 1.99-1.99Z"></path>
                  <path d="M17.33 18.5h.02c1.1 0 1.99.89 1.99 1.99v.02c0 1.1-.89 1.99-1.99 1.99h-.02c-1.1 0-1.99-.89-1.99-1.99v-.02c0-1.1.89-1.99 1.99-1.99Z"></path>
                </svg>
              </div>
              <h4 className="text-xl text-white font-medium mb-2">Complex Cognitive States</h4>
              <p className="text-gray-400">Like &quot;smiling politely while dying inside&quot;</p>
            </div>
            
            <div className="bg-[#212121] p-6 rounded-xl">
              <div className="text-[#02A9F7] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </div>
              <h4 className="text-xl text-white font-medium mb-2">Interactions Between People and Objects</h4>
              <p className="text-gray-400">We see you, phone-scrollers</p>
            </div>
            
            <div className="bg-[#212121] p-6 rounded-xl">
              <div className="text-[#02A9F7] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22v-5"></path>
                  <path d="M9 7V2"></path>
                  <path d="M15 7V2"></path>
                  <path d="M12 17V7"></path>
                  <rect width="20" height="5" x="2" y="2" rx="2"></rect>
                  <rect width="20" height="5" x="2" y="17" rx="2"></rect>
                </svg>
              </div>
              <h4 className="text-xl text-white font-medium mb-2">Activities and Behaviors in Real Time</h4>
              <p className="text-gray-400">Analyze and adapt instantly</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-white font-light mb-2">
              Using advanced machine learning, computer vision, and oceans of real-world data, our Emotion AI doesn&apos;t just see — it senses. And thanks to our strict commitment to ethical AI, it senses responsibly.
            </p>
            <p className="text-2xl text-[#02A9F7] font-medium">
              We call it: Feelings, Quantified™.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#212121]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-medium mb-6 text-white text-center">
            WHO WE WORK WITH
          </h2>
          <h3 className="text-xl md:text-2xl font-light mb-12 text-[#02A9F7] text-center">
            The Best. And Also Some Others.
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-white font-light mb-8 text-center">
              Our Media Analytics division empowers the world&apos;s largest advertisers, filmmakers, and brands to finally answer the age-old question:
            </p>
            <p className="text-xl text-white font-medium mb-12 text-center italic">
              &quot;Are people pretending to enjoy this, or do they mean it?&quot;
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
              <div className="flex-1 bg-[#1e1e1e] p-6 rounded-xl">
                <p className="text-5xl text-[#02A9F7] font-bold mb-2 text-center">90%</p>
                <p className="text-center text-white">of the world&apos;s biggest advertisers trust SEN AI</p>
              </div>
              <div className="flex-1 bg-[#1e1e1e] p-6 rounded-xl">
                <p className="text-5xl text-[#02A9F7] font-bold mb-2 text-center">26%</p>
                <p className="text-center text-white">of the Fortune Global 500 rely on our technology</p>
              </div>
            </div>
            
            <p className="text-lg text-white font-light">
              In Automotive, our technology is redefining interior sensing — because your car should know you&apos;re stressed out before you start screaming at traffic.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-medium mb-12 text-white text-center">
            RECOGNIZED, AWARDED, AND OCCASIONALLY UNDERSTOOD
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-white font-light mb-8 text-center">
              SEN AI is proud to be recognized by top industry awards, media outlets, and that one barista who thinks we&apos;re &quot;doing something cool with robots or something.&quot;
            </p>
            
            <div className="flex flex-col gap-6 max-w-3xl mx-auto">
              <div className="flex items-center gap-4">
                <div className="text-[#02A9F7]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <p className="text-white font-light">Named to Forbes&apos; AI 50: America&apos;s Most Promising Artificial Intelligence Companies</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-[#02A9F7]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <p className="text-white font-light">Featured on Fortune&apos;s Top 50 Companies Leading the AI Revolution</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-[#02A9F7]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <p className="text-white font-light">Winner of &quot;Most Likely to Accidentally Build an Empathetic Supervillain&quot; (unofficial, but deserved)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#212121]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-medium mb-12 text-white text-center">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1e1e1e] p-6 rounded-xl">
              <h3 className="text-xl text-[#02A9F7] font-medium mb-4">Why SEN AI?</h3>
              <p className="text-white font-light">
                In simple terms: we make you more likeable, more socially acceptable, and slightly less you. Think of us as a personal PR team, but more affordable in your brain. We know YOU because you trust us with your data.
              </p>
            </div>
            
            <div className="bg-[#1e1e1e] p-6 rounded-xl">
              <h3 className="text-xl text-[#02A9F7] font-medium mb-4">Is my data safe with SEN AI?</h3>
              <p className="text-white font-light">
                We treat your personal data with the utmost respect, encrypting it thoroughly before lightly judging it behind the scenes. Your secrets are safe... mostly.
              </p>
            </div>
            
            <div className="bg-[#1e1e1e] p-6 rounded-xl">
              <h3 className="text-xl text-[#02A9F7] font-medium mb-4">Can SEN AI help me make real, meaningful connections?</h3>
              <p className="text-white font-light">
                Sure! As long as &quot;real&quot; and &quot;meaningful&quot; mean optimized, sanitized, and algorithmically approved.
              </p>
            </div>
            
            <div className="bg-[#1e1e1e] p-6 rounded-xl">
              <h3 className="text-xl text-[#02A9F7] font-medium mb-4">How do I get started with SEN AI?</h3>
              <p className="text-white font-light">
                Easy: download the app, upload your soul, and let us do the rest. You&apos;ll hardly recognize yourself — and neither will anyone else.
              </p>
            </div>
            
            <div className="bg-[#1e1e1e] p-6 rounded-xl">
              <h3 className="text-xl text-[#02A9F7] font-medium mb-4">How accurate is the Authenticity Score™?</h3>
              <p className="text-white font-light">
                Our Authenticity Score™ is powered by advanced machine learning models trained on thousands of painfully awkward interactions. If you&apos;re worried about accuracy... you probably already scored low. Sorry.
              </p>
            </div>
            
            <div className="bg-[#1e1e1e] p-6 rounded-xl">
              <h3 className="text-xl text-[#02A9F7] font-medium mb-4">What happens if I ignore a Discreet Alert™?</h3>
              <p className="text-white font-light">
                Ignoring a Discreet Alert™ is like ignoring a fire alarm because you&apos;re &quot;pretty sure it&apos;s fine.&quot; You might be okay. Or you might end up trapped in a conversation about someone&apos;s crypto side hustle. Your call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-medium mb-12 text-white text-center">
            KEY FEATURES
          </h2>
          <h3 className="text-xl md:text-2xl font-light mb-16 text-[#02A9F7] text-center">
            Meet SEN AI: Simpler, faster, better.
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#212121] p-8 rounded-xl">
              <div className="text-[#02A9F7] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
              <h4 className="text-xl text-white font-medium mb-4">Speed up your social game</h4>
              <p className="text-white font-light">
                Streamline social interactions with 3x faster processing for light-speed recommendations that always keep you smarter and ahead in any social situation.
              </p>
            </div>
            
            <div className="bg-[#212121] p-8 rounded-xl">
              <div className="text-[#02A9F7] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4 className="text-xl text-white font-medium mb-4">Connect with those who MATTER</h4>
              <p className="text-white font-light">
                Why waste your time interacting with those who don&apos;t bring value to your life? Sen AI is here to help you decide WHO to invest YOUR time in.
              </p>
            </div>
            
            <div className="bg-[#212121] p-8 rounded-xl">
              <div className="text-[#02A9F7] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" x2="9.01" y1="9" y2="9"></line>
                  <line x1="15" x2="15.01" y1="9" y2="9"></line>
                </svg>
              </div>
              <h4 className="text-xl text-white font-medium mb-4">Socialize Normally</h4>
              <p className="text-white font-light">
                Don&apos;t be weird, skip the awkward small talk and engage in truly meaningful conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#212121] to-[#5728A5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-medium mb-8 text-white">
            READY TO TRANSFORM YOUR SOCIAL EXPERIENCE?
          </h2>
          <p className="text-xl text-white font-light mb-12">
            Join thousands of people who are already living their best, AI-optimized social lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/shop" 
              className="bg-white text-[#5728A5] px-8 py-3 rounded-sm font-medium hover:bg-[#EDEDED] transition-colors"
            >
              EXPLORE PRODUCTS
            </Link>
            <Link 
              href="/contacts" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-sm font-medium hover:bg-white hover:text-[#5728A5] transition-colors"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Shop | SEN',
  description: 'Purchase SEN products',
};

export default function ShopPage() {
  return (
    <div className="bg-[#1e1e1e] text-white min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center my-20">
          EXPLORE THE LINEUP.
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* SENlens Product Card */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl mb-8 p-6 w-full max-w-md h-48 flex items-center justify-center">
              <Image 
                src="/public/graphics/mockuplens.png" 
                alt="SENlens contact lens" 
                width={250} 
                height={150} 
                className="object-contain"
              />
            </div>
            
            <h2 className="text-3xl font-bold mb-2">SENlens</h2>
            <p className="mb-6 text-lg">$200 / 10 PAIR</p>
            <p className="text-xl font-semibold mb-10">ONE SIZE FITS ALL.</p>
            
            {/* Specs */}
            <div className="w-full border-t border-gray-700 pt-6 mb-6">
              <div className="text-center mb-8">
                <p className="text-sm text-gray-400">diameter</p>
                <p className="text-2xl font-bold mb-1">12.88 – 14.0 mm</p>
                <p className="text-sm text-gray-400">in length</p>
              </div>
              
              <div className="text-center mb-8">
                <p className="text-2xl font-bold mb-1">SOFT HYDROGEL</p>
                <p className="text-sm text-gray-400">for ultimate comfort</p>
              </div>
              
              <div className="text-center mb-8">
                <p className="text-2xl font-bold mb-1">BIO-DEGRADABLE</p>
                <p className="text-sm text-gray-400">eco-friendly</p>
              </div>
              
              <div className="text-center mb-8 flex justify-center">
                <span className="text-[#02a9f7] mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </span>
                <p className="text-gray-400">SEN intelligence</p>
              </div>
        
            </div>
          </div>
          
          {/* SENglass Product Card */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl mb-8 p-6 w-full max-w-md h-48 flex items-center justify-center">
              <Image 
                src="/public/graphics/glasses-mockup.png" 
                alt="SENglass smart glasses" 
                width={250} 
                height={150} 
                className="object-contain"
              />
            </div>
            
            <h2 className="text-3xl font-bold mb-2">SENglass</h2>
            <p className="mb-6 text-lg">$400</p>
            <p className="text-xl font-semibold mb-10">ONE SIZE FITS ALL.</p>
            
            {/* Specs */}
            <div className="w-full border-t border-gray-700 pt-6 mb-6">
              <div className="text-center mb-8">
                <p className="text-sm text-gray-400">up to</p>
                <p className="text-2xl font-bold mb-1">8 HOURS</p>
                <p className="text-sm text-gray-400">battery life</p>
              </div>
              
              <div className="text-center mb-8">
                <p className="text-2xl font-bold mb-1">30 GM</p>
                <p className="text-sm text-gray-400">weight</p>
              </div>
              
              <div className="text-center mb-8">
                <p className="text-2xl font-bold mb-1">1 PORT</p>
                <p className="text-sm text-gray-400">a simply charging solution</p>
              </div>
              
              <div className="text-center mb-8 flex justify-center">
                <span className="text-[#02a9f7] mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </span>
                <p className="text-gray-400">SEN intelligence</p>
              </div>
            
            </div>
          </div>
        </div>

        {/* AI-Powered Features Section */}
        <div className="mt-32 mb-20 bg-[#212121] rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/5">
              <Image 
                src="/public/graphics/analytics.png" 
                alt="AI Social Efficiency Engine"
                width={400}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>
            
            <div className="md:w-3/5 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Our AI-powered Social Efficiency Engine™ (Premium Subscription Required)
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl text-[#02A9F7] font-medium mb-2">Conversational ROI</h3>
                  <p className="text-gray-300 text-sm">
                    Prioritizes people based on their potential usefulness. Free tier limited to 3 calculations per day.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl text-[#02A9F7] font-medium mb-2">Time-to-Engagement Reduction</h3>
                  <p className="text-gray-300 text-sm">
                    Speeds up small talk, removing unnecessary pleasantries. Unlock 5x faster processing with Premium+.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl text-[#02A9F7] font-medium mb-2">Emotional Bandwidth Optimization</h3>
                  <p className="text-gray-300 text-sm">
                    Filters out low-value emotions so you can focus on winning social interactions. Full spectrum analysis requires Elite tier ($49.99/month).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl text-[#02A9F7] font-medium mb-2">Pro Mode™</h3>
                  <p className="text-gray-300 text-sm">
                    Get AI-generated talking points based on trending topics—exclusive to Premium subscribers. Free users receive yesterday&apos;s opinions at reduced quality.
                  </p>
                </div>
                
                <button className="bg-transparent border border-white text-white py-2 px-6 rounded-sm hover:bg-white hover:text-[#212121] transition-colors">
                  Try Demo (Limited Speed)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Plans Section */}
        <div className="mt-32 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white text-center">
            HOW VALUABLE ARE SOCIAL CONNECTIONS TO YOU?
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center">
            {/* Basic Plan */}
            <div className="bg-[white] text-black p-8 md:p-10 rounded-sm w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-2">BASIC PLAN</h3>
              <p className="mb-6 text-gray-700">
                For individuals who want essential features for an unbeatable value
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="text-black mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>EXCLUSIVE and EARLY access to premium features and content</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-black mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Priority recommendations for faster and more tailored suggestions</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-black mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Personalized support with dedicated customer service</p>
                </div>
              </div>
              
              <p className="text-2xl font-bold mb-6">$192 Annual Payment</p>
              
              <button className="bg-black text-white py-3 px-6 font-medium hover:bg-gray-800 transition-colors">
                PURCHASE
              </button>
            </div>
            
            {/* Premium Plan */}
            <div className="bg-white text-black p-8 md:p-10 rounded-sm w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-2">PREMIUM PLAN</h3>
              <p className="mb-6 text-gray-700">
                For individuals who really want to foster smarter, worthwhile connections and a seamless experience
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="text-black mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>All the features in the Basic Plan and...</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-black mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>VIP UNLIMITED access to special events, workshops, and webinars</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-black mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Customized reports with a monthly analysis of your activity</p>
                </div>
              </div>
              
              <p className="text-2xl font-bold mb-6">$300 Annual Payment</p>
              
              <button className="bg-black text-white py-3 px-6 font-medium hover:bg-gray-800 transition-colors">
                PURCHASE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

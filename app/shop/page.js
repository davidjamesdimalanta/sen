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
                src="/graphics/contact-lens.png" 
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
                src="/graphics/mockupglasses.png" 
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
      </div>
    </div>
  );
}

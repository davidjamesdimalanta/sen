import Image from 'next/image';

export default function QRPage() {
  return (
    <div className="bg-gradient-to-b from-[#5728A5] to-[#1e1e1e] text-white min-h-screen py-16 flex flex-col items-center h-auto">
      <Image 
        src="/graphics/qrcode.png" 
        alt="QR Code" 
        width={500} 
        height={500} 
        className="max-w-7xl mx-auto my-40 object-contain"
      />
      <div className="flex flex-col items-center">
        <span className="text-center text-xl pb-2">Or copy and paste the link below</span>
        <span className="text-center text-4xl">http://100.71.152.6:3000</span>
      </div>
    </div>
  );
}
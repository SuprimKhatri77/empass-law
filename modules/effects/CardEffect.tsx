import Image from "next/image";

interface CardProps {
  title?: string;
  description?: string;
  logoSrc: string;
  accentColor?: string; // e.g., "#6E44FF"
}

export default function CardEffect({ 
  title = "Hello there!", 
  description = "Trust yourself and keep going.", 
  logoSrc, 
  accentColor = "#6E44FF" 
}: CardProps) {
  
  const pathData = "M1661.28 2255.51C1661.28 2255.51 2311.09 1960.37 2111.78 1817.01C1944.47 1696.67 718.456 2870.17 499.781 2255.51C308.969 1719.17 2457.51 1613.83 2111.78 963.512C1766.05 313.198 427.949 2195.17 132.281 1455.51C-155.219 736.292 2014.78 891.514 1708.78 252.012C1437.81 -314.29 369.471 909.169 132.281 566.512C18.1772 401.672 244.781 193.012 244.781 193.012";

  return (
    <div className="card relative w-[300px] h-[400px] bg-[#262626] overflow-hidden group">
      
      {/* Slide 1: The Top (Moves UP on hover) */}
      <div 
        className="slide slide1 absolute inset-0 z-20 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:-translate-y-full"
        style={{ backgroundColor: accentColor }}
      >
        <div className="content relative flex flex-col items-center">
          <div className="icon relative w-32 h-32 flex items-center justify-center">
            {/* SVG Background decoration */}
            <svg
              viewBox="0 0 2250 2535"
              className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
            >
              <path d={pathData} stroke="white" strokeWidth="60" fill="none" />
            </svg>
            
            {/* The actual Logo/Icon */}
            <div className="relative z-10">
               <Image src={logoSrc} alt={title} width={80} height={80} className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2: The Bottom (Moves DOWN on hover) */}
      <div className="slide slide2 absolute inset-0 z-10 flex items-center justify-center p-8 text-center transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0 bg-white">
        <div className="content">
          <h3 className="text-xl font-bold mb-4 text-gray-800 uppercase tracking-wider">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

    </div>
  );
}
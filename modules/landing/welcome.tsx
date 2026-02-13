"use client";
import Link from "next/link";
import Image from "next/image";

export default function Welcome() {
  return (
    <section className="bg-[#f7f7f8] py-20 lg:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 overflow-hidden  lg:-mt-40 relative z-60 shadow-xl bg-[#435B76]
"
          style={{
            background:
              "linear-gradient(90deg, #edefef 0%, #fff 50%, #f0f0f0 100%)",
          }}
        >
          {/* Left - Image */}
          <div className="order-1 w-full h-full">
            <div className="relative w-full  h-full">
              {/* London Skyline Image */}
              <div className="relative w-full aspect-[16/10] lg:h-full">
                <Image
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80"
                  alt="London Skyline"
                  fill
                  className="object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-transparent to-cyan-500/5" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-2 p-8 lg:py-20 ">
            <h2 className="text-[42px] lg:text-[56px] leading-[1.1] font-light text-[#435b76] mb-8">
              Welcome
            </h2>
            <p className="text-[16px] lg:text-[17px] leading-relaxed text-[#002441] mb-6 opacity-60">
              We are a progressive law firm located in the city of London
              focused on providing high-quality legal services. We provide
              specialist legal services to businesses and individuals in a range
              of practice areas. Our services are tailored to our client&apos;s
              individual needs and resources and no service is too big or too
              small for us. As a valued client of Empass Law, our goal is to
              provide you with the most personal & satisfying legal service
              possible.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#2c5697] text-[14px] font-medium border-b-2 border-[#2c5697] pb-1 hover:border-[#2c5697]/60 transition-colors group"
            >
              Find out more
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

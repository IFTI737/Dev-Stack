import React from "react";
import BannerStack from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="mx-auto max-w-[1140px] px-5 py-12 md:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Left Content */}
        <div>
          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight text-[#111827] sm:text-5xl lg:text-[58px] lg:leading-[1.1]">
            Build Your Ideal
            <br />
            <span className="brand-gradient-text">
              Development Stack
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[660px] text-base leading-7 text-[#475569] sm:text-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and build the perfect technology
            stack for your next project.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-4">
            <button className="brand-gradient rounded-lg px-6 py-3 text-base font-medium text-white">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-[#cbd5e1] bg-white px-6 py-3 text-base font-medium text-[#334155]">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="flex h-[370px] w-[370px] items-center justify-center  sm:h-[420px] sm:w-[420px]">
            <img
              src={BannerStack}
              alt="Development stack"
             className="w-[300px] sm:w-[350px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
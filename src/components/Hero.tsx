import BannerStack from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-12 md:py-14 lg:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* Left */}
        <div>
          <h1 className="text-4xl font-bold leading-[1.1] text-[#111827] sm:text-5xl lg:text-[56px]">
            Build Your Ideal
            <br />
            <span className="brand-gradient-text">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-[620px] text-base leading-7 text-[#475569] sm:text-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and build the perfect technology
            stack for your next project.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <button className="brand-gradient rounded-lg px-6 py-3 text-base font-medium text-white">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-[#cbd5e1] bg-white px-6 py-3 text-base font-medium text-[#334155]">
              Learn More
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={BannerStack}
            alt="Development stack"
            className="w-[300px] sm:w-[350px] lg:w-[380px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
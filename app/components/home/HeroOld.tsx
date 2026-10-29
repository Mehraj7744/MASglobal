
import Hyperspeed from "../../components/Hyperspeed";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] bg-slate-950 lg:min-h-screen w-full overflow-hidden">

      {/* Hyperspeed Background */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed
          effectOptions={{
            distortion: "turbulentDistortion",
            speedUp: 2,
            fov: 90,
            fovSpeedUp: 150,
            colors: {
              roadColor: 0x000066,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xff66cc,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x009933
            }
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10  bg-linear-to-b from-black/80 via-black/30 to-black/90" />

      {/* Content */}
      <div className="relative z-20 flex min-h-[85vh] items-center">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-indigo-400">
            Welcome to MAS Global AI
          </span>

          <h1 className="
            mt-4
            text-3xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            font-extrabold
            text-white
            leading-tight
          ">
            AI Automation & Scalable Software Engineering for <br className="hidden sm:block" />
            Modern Businesses {" "}
            <span className="text-indigo-400">Excellence</span>
          </h1>

          <p className="
            mt-5
            max-w-xl
            sm:max-w-2xl
            mx-auto
            text-sm
            sm:text-base
            text-slate-400
          ">
            We help brands grow with data-driven marketing, innovative design,
            and scalable digital solutions.
          </p>

          <div className="
            mt-8
            flex
            flex-col
            sm:flex-row
            justify-center
            items-center
            gap-4
          ">
            <button className="
              w-full
              sm:w-auto
              rounded-full
              bg-indigo-600
              px-8
              py-3
              text-sm
              font-semibold
              text-slate-50
              hover:bg-indigo-500
              transition
            ">
              Get Started →
            </button>

            <button className="
              w-full
              sm:w-auto
              rounded-full
              border
              border-slate-700
              px-8
              py-3
              text-sm
              text-slate-300
              hover:text-slate-50
              hover:border-slate-500
              transition
            ">
              Learn More
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;

import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import Experience from "@/pages/Experience/Experience";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Code,
  Lightbulb,
  Mail,
  Mouse,
  Rocket,
  WandSparklesIcon,
} from "lucide-react";
import { BsEnvelope } from "react-icons/bs";
// Grid Background - Replacing the HexagonBackground
const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              className="opacity-40 animate-gridPulse"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default function Hero() {
  const words = [
    "UI/UX Designer",
    "JavaScript Developer",
    "Learning MERN Stack",
    "Problem Solver",
    "Lifelong Learner",
  ];

  const [code] = useState(`
const profile = {
    name: 'Aderogba Samuel',
    title: 'Full-Stack Developer | UI/UX Designer | Problem Solver',
    skills: [
        'React', 'NextJS', 'MySQL', 'TypeScript',
        'Git', 'TailwindCSS', 'Figma', 'Prisma',
        'Superbase', 'Firebase'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: 4, 
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5 &&
            this.yearsOfExperience >= 3
        );
    }
};
  `);

  useEffect(() => {
    Prism.highlightAll();

    // Add CSS animation for grid and dots
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      
      @keyframes dotPulse {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 0.5; transform: scale(1.2); }
      }
      
      /* Media query for 1366x768 resolution */
      @media screen and (width: 1366px) and (height: 768px), 
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .hero {
          padding-top: 12rem !important;
        }
        .hero .container {
          padding-top: 10rem !important;
          margin-top: 5rem !important;
        }
        .hero-section-padding {
          padding-top: 12rem !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Apply extra padding for 1366x768 resolution
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty(
          "--hero-padding-top",
          "12rem"
        );
      } else {
        document.documentElement.style.setProperty("--hero-padding-top", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, [code]);

  return (
    <>
      <section className="bg-[#020617] text-white min-h-screen" id="home">
        <div
          className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding border-b border-cyan-500" 
          style={{ paddingTop: "var(--hero-padding-top, 0)" }}
        >
          <div className="absolute inset-0"></div>

          {/* Choose one of these background options */}
          <GridBackground />

          {/* Or keep the original backgrounds if you prefer */}
          {/* <HexagonBackground /> */}
          {/* <AnimatedGrid /> */}
          {/* <DotBackground /> */}

          {/* Meteors Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          {/* Main content container */}
          <div
            // className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28"
            className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 z-10 py-8 md:py-10 lg:py-12 pt-40 md:pt-28 xl:pt-28"
            style={{
              paddingTop:
                window.innerWidth >= 1360 &&
                window.innerWidth <= 1370 &&
                window.innerHeight >= 760 &&
                window.innerHeight <= 775
                  ? "12rem"
                  : "",
            }}
          >
            {/* Left column - Text content */}
            <div className="w-full mb-2 sm:mb-12  lg:mb-0 animate__animated animate__fadeInLeft relative">
              {/* Decorative blurs */}
              <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

              {/* Welcome badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6 sm:mb-8 animate__animated animate__fadeInDown animate__delay-1s">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-gray-300 text-xs sm:text-sm font-medium">
                  Welcome to my universe
                </span>
              </div>

              {/* Name section */}
              <div className="relative mb-0 sm:mb-8">
                <h1 className="text-6xl sm:text-6xl lg:text-6xl font-medium">
                  <span className="relative flex items-center gap-3">
                    <SparklesText text="Hello" />
                    I&apos;m
                  </span>
                  <span className="relative">
  <span className="gradient-text">Samuel.A</span>
  <span className="blink-cursor absolute text-blue-400">|</span>
</span>

                </h1>
                <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              </div>

              {/* Role badge */}
              {/* <div className="inline-flex items-center gap-2 sm:gap-3 px-2 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
                <Rocket className=" text-blue-400 animate-bounce text-sm sm:text-base"/>
                <span>
                  <FlipWords
                    className={"text-base sm:text-lg text-blue-400 font-medium"}
                    words={words}
                  />
                </span>
              </div> */}

              {/* Description */}
              <div className="relative mb-8 sm:mb-12 max-w-xl">
                <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed">
                  JavaScript lover 🚀 | UI/UX Enthusiast | Impacting Lives for
                  Global Relvance
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-row gap-4 sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s">
                {/* View Projects Button */}
                <a
                  href="https://github.com/aderogbasamuel"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-600 p-0.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                >
                  <span className="block w-full px-4 sm:px-8 py-2 sm:py-4 rounded-[11px] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                    <span className="relative flex items-center justify-center gap-1 text-white font-medium">
                      <span>Learn More</span>
                      <ChevronRight
                        className="fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1"
                        size={18}
                      />
                    </span>
                  </span>
                </a>

                {/* Contact Button */}
                <a
                  href="#"
                  className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                >
                  <span className="block w-full px-4 sm:px-8 py-2 sm:py-4 rounded-[10px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                    <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
                      <span>Get Resume</span>
                      <Mail
                        className="fas fa-envelope transform transition-all duration-300 group-hover:rotate-12"
                        size={18}
                      />
                    </span>
                  </span>
                </a>
              </div>

              {/* Floating badges */}
              <div className="hidden lg:block absolute left-[5.5rem] top-[2.3rem] animate-float-slow">
                <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400 inline-flex">
                  <WandSparklesIcon className=" fa-wand-magic-sparkles"/>&nbsp;&nbsp;UI
                  Magic
                </div>
              </div>
              <div className="hidden lg:block absolute right-10 top-20 animate-float">
                <div className="px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400 inline-flex">
                  <Code className="fas fa-code"/>&nbsp;&nbsp;Clean Code
                </div>
              </div>
              <div className="hidden lg:block absolute top-[17rem] left-[70%] transform -translate-x-1/2 animate-float">
                <div className="px-4 py-2 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400 inline-flex">
                  <Lightbulb className="fas fa-lightbulb"/>&nbsp;&nbsp;Innovation
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
              <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-teal-500 to-blue-600"></div>
                <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
              </div>
              <div className="px-4 lg:px-8 py-5">
                <div className="flex flex-row space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-200"></div>
                </div>
              </div>
              <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                <code className="font-mono text-xs md:text-sm lg:text-sm">
                  <div className="blink">
                    <span className="mr-2 text-pink-500">const</span>
                    <span className="mr-2 text-white">coder</span>
                    <span className="mr-2 text-pink-500">=</span>
                    <span className="text-gray-400">{"{"}</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                    <span className="text-gray-400">{`'`}</span>
                    <span className="text-amber-300">Aderogba Samuel</span>
                    <span className="text-gray-400">{`',`}</span>
                  </div>
                  <div className="ml-4 lg:ml-8 mr-2">
                    <span className=" text-white">skills:</span>
                    <span className="text-gray-400">{`['`}</span>
                    <span className="text-amber-300">React</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">NextJS</span> 
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">Redux</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">Express</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">NextJS</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">MySql</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">MongoDB</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">TypeScript</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300 ">Prisma</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300 ">Supabase</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300 ">Postgres</span>
                    <span className="text-gray-400">{`'],`}</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-white">
                      hardWorker:
                    </span>
                    <span className="text-orange-400">true</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-white">
                      quickLearner:
                    </span>
                    <span className="text-orange-400">true</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-white">
                      problemSolver:
                    </span>
                    <span className="text-orange-400">true</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                      hireable:
                    </span>
                    <span className="text-orange-400">function</span>
                    <span className="text-gray-400">{"() {"}</span>
                  </div>
                  <div>
                    <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
                      return
                    </span>
                    <span className="text-gray-400">{`(`}</span>
                  </div>
                  <div>
                    <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                    <span className="mr-2 text-white">hardWorker</span>
                    <span className="text-amber-300">&amp;&amp;</span>
                  </div>
                  <div>
                    <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                    <span className="mr-2 text-white">problemSolver</span>
                    <span className="text-amber-300">&amp;&amp;</span>
                  </div>
                  <div>
                    <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                    <span className="mr-2 text-white">skills.length</span>
                    <span className="mr-2 text-amber-300">&gt;=</span>
                    <span className="text-orange-400">5</span>
                  </div>
                  <div>
                    <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">{`};`}</span>
                  </div>
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
          {/* <div className="absolute z-10 bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2"> */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto animate-bounce">
            <span className="text-gray-400 text-sm">
              <Mouse className="fas fa-mouse text-blue-400" />
            </span>
            <ChevronDown className="text-blue-400 text-xl" />
          </div>
        </div>
        {/* <PortfolioPage />
        <Experience /> */}
      </section>
    </>
  );
}

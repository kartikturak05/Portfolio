import { div } from "framer-motion/client";
import React from "react";
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaPython, FaLinkedin, FaGithub as FaGithubProfile } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiMongoose, SiOracle, SiTailwindcss, SiBootstrap, SiExpress, SiNextdotjs, SiNodemon, SiFramer, SiGithub, SiGooglecloud, SiCplusplus, SiC, SiLeetcode, SiHackerrank, SiCodechef } from "react-icons/si";

function GitHubContributions() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-18">
      <div className="text-2xl sm:text-3xl font-bold mb-4 text-center text-white">My GitHub Contributions</div>
      <div className="w-full flex justify-center my-6">
        <img
          className="w-full max-w-8xl rounded-lg "
          src="https://ghchart.rshah.org/kartikturak05"
          alt="Kartik's GitHub Contributions"
        />
      </div>
    </div>
  );
}


function TechnicalSkills() {
  return (
    <div className="flex flex-col space-y-12 sm:space-y-15 text-white px-4 sm:px-8 md:px-16 lg:px-18 py-12">
      
      {/* ---- Frontend Skills ---- */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0 lg:space-x-25">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-center lg:text-left lg:min-w-max mr-40 text-gray-400">
          Frontend
        </h2>
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12">
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <SiJavascript className="text-yellow-400 text-4xl sm:text-4xl" />
            <span className="text-lg sm:text-2xl">JavaScript</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <FaReact className="text-cyan-400 text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">React</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <SiTailwindcss className="text-sky-400 text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">Tailwind CSS</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <FaHtml5 className="text-orange-500 text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">HTML</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <FaCss3Alt className="text-blue-500 text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">CSS</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <SiFramer className="text-pink-400 text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">Framer Motion</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <SiBootstrap className="text-purple-600 text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">Bootstrap</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <SiCplusplus className="text-blue-400 text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">C++</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <SiC className="text-blue-300 text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">C</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <FaPython className="text-yellow-300 text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">Python</span>
          </div>
        </div>
      </div>

      {/* ---- Backend Skills ---- */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-start space-y-6 lg:space-y-0 lg:space-x-25">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-center lg:text-left lg:min-w-max mr-40 text-gray-400">
          Backend
        </h2>
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12">
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <FaNodeJs className="text-green-500 text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">Node.js</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <SiNodemon className="text-green-400 text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">Nodemon</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <SiNextdotjs className="text-white text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">Next.js</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <SiExpress className="text-gray-300 text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">Express.js</span>
          </div>
        </div>
      </div>

      {/* ---- Database Skills ---- */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-start space-y-6 lg:space-y-0 lg:space-x-25">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-center lg:text-left lg:min-w-max mr-40 text-gray-400">
          Database
        </h2>
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12">
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <SiMongodb className="text-green-500 text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">MongoDB</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <SiMongoose className="text-red-500 text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">Mongoose</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <SiOracle className="text-red-600 text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">Oracle</span>
          </div>
        </div>
      </div>

      {/* ---- Tools ---- */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-start space-y-6 lg:space-y-0 lg:space-x-25">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-center lg:text-left  lg:min-w-max mr-40 text-gray-400">
          Tools
        </h2>
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12">
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <FaGitAlt className="text-orange-500 text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">Git</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <FaDocker className="text-blue-400 text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">Docker</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <SiGithub className="text-white text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">GitHub</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <FaAws className="text-yellow-400 text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">AWS</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 hover:scale-110 transition">
            <SiGooglecloud className="text-red-400 text-4xl sm:text-6xl" />
            <span className="text-lg sm:text-2xl">Google Cloud</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-8xl mx-auto">
        <GitHubContributions />
        <TechnicalSkills />
      </div>
    </div>
  );
};

export default About;
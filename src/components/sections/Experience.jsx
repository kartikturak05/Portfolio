import React, { useState } from "react";

const Experience = () => {
  const [Display, setIsDisplay] = useState(false);

  return (
    <div>
      <div>
        <div className="text-4xl md:text-6xl font-black mb-12 text-center text-white tracking-wider">
          Experience
        </div>

        <div className="text-lg md:text-xl font-medium text-center text-gray-400 mx-6 md:mx-20">
          <div className="flex flex-col md:flex-row items-center md:items-start bg-slate-900/50 w-auto rounded-2xl shadow-lg max-w-5xl mx-auto overflow-hidden">
            {/* Company Logo */}
            <div className="flex flex-col items-center md:items-start py-10 px-6 md:py-20 md:px-10">
              <img
                src="/connexLogo.png"
                alt="Company Logo"
                className="h-20 md:h-28 object-contain"
              />
            </div>

            {/* Internship Details */}
            <div className="flex flex-col space-y-4 text-left md:text-start p-6 md:p-12">
              <div>
                <div className="text-white text-2xl md:text-3xl font-bold tracking-wide">
                  MERN Stack Developer Intern
                </div>
                <div className="text-gray-300 font-semibold">
                  Connex India - Internship
                </div>
                <div className="text-gray-400 font-mono">
                  November 2024 - May 2025 | Remote
                </div>
                <div className="flex flex-row">
                  <div
                    className="mt-4 inline-block bg-white text-gray-950 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-500 transition cursor-pointer"
                    onClick={() => setIsDisplay(!Display)}
                  >
                    {Display ? "Hide" : "Show"} Details
                  </div>
                  <a href="https://drive.google.com/file/d/1UVtWelCyqB8evq83fsZs3bvXPnoa2XaL/view?usp=sharing" target="_blank" className="ml-10 mt-4 inline-block bg-white text-gray-950 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-500 transition cursor-pointer" >Certificate</a>
                </div>
              </div>

              {/* Internship Responsibilities */}
              {Display && (
                <ul
                  className={`list-disc list-inside text-gray-400 space-y-3 mt-4 text-base md:text-lg leading-relaxed transform transition-all duration-1000 ease-in ${
                    Display
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-3 pointer-events-none"
                  }`}
                >
                  <li>
                    Completed a 6-month internship where I contributed to
                    real-world projects, gaining hands-on experience with{" "}
                    <span className="text-white font-semibold">React.js</span>,{" "}
                    <span className="text-white font-semibold">
                      Tailwind CSS
                    </span>
                    , and the{" "}
                    <span className="text-white font-semibold">MERN stack</span>
                    .
                  </li>
                  <li>
                    Developed{" "}
                    <span className="font-bold text-white">Innoverrese</span>, a
                    portfolio-style company website designed to showcase brand
                    presence (static frontend project).
                  </li>
                  <li>
                    Built{" "}
                    <span className="font-bold text-white">Interndude</span>, a
                    dynamic job platform similar to Internshala, featuring
                    internships, freelancing, and job posting modules. Focused
                    on developing the complete frontend for both students (job
                    seekers) and employers (job posters).
                  </li>
                  <li>
                    Strengthened skills in building user-friendly interfaces,
                    writing clean and maintainable code, and collaborating
                    within a professional team environment.
                  </li>
                  <li>
                    Projects:{" "}
                    <a
                      href="https://innoverrese.in/"
                      target="_blank"
                      className="text-blue-400 hover:text-blue-300 underline ml-1 font-semibold"
                    >
                      Innoverrese
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://intern-dude.vercel.app/"
                      target="_blank"
                      className="text-blue-400 hover:text-blue-300 underline ml-1 font-semibold"
                    >
                      Interndude
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

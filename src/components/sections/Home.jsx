import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  Mail,
  Download,
  Sparkles,
  Code2,
  Palette,
  Zap,
  Code,
  WheatIcon,
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa6";

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const roles = [
    {
      text: "Full Stack Developer",
      icon: Code2,
      color: "from-purple-400 to-pink-400",
    },
    {
      text: "UI/UX Designer",
      icon: Palette,
      color: "from-blue-400 to-cyan-400",
    },
    {
      text: "Problem Solver",
      icon: Zap,
      color: "from-green-400 to-emerald-400",
    },
    {
      text: "Tech Enthusiast",
      icon: Sparkles,
      color: "from-orange-400 to-red-400",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "#0A66C2",
      url: "https://www.linkedin.com/in/kartik-turak/",
    },
    {
      name: "GitHub",
      icon: Github,
      color: "#181717",
      url: "https://github.com/kartikturak05",
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "#1DA1F2",
      url: "https://x.com/KartikTurak05",
    },
    {
      name: "Codolio",
      icon: Code,
      color: "#1877F2",
      url: "https://codolio.com/profile/ktBbpBoA",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      color: "#25D366",
      url: "https://wa.me/+9359001131",
    },
    {
      name: "Email",
      icon: Mail,
      color: "#EA4335",
      url: "mailto:kartikturak1@gmail.com",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

    const handleNavigation = (hash) => {
    if (window.location.pathname === '/') {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative mb-10">

      {/* Mouse Follower - Hidden on mobile */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 opacity-50 blur-sm transition-all duration-75 hidden md:block"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />

      <div className="relative z-10 min-h-screen flex items-center ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              {/* Greeting */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-300">
                    Available for new opportunities
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
                    Hey, it's
                  </span>
                  <br />
                  <span className="text-white relative">
                    Kartik here!
                    <div className="absolute -top-2 sm:-top-4 -right-4 sm:-right-8 text-2xl sm:text-4xl animate-bounce">
                      👋
                    </div>
                  </span>
                </h1>
              </div>

              {/* Dynamic Role Display */}
              <div className="h-16 sm:h-20 flex items-center">
                <div className="text-xl sm:text-2xl lg:text-4xl font-semibold">
                  <span className="text-gray-300">I am a </span>
                  <div className="inline-flex items-center gap-3">
                    <span
                      className={`text-transparent bg-clip-text bg-gradient-to-r ${roles[currentRole].color} transition-all duration-500`}
                    >
                      {roles[currentRole].text}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Welcome to my digital universe! I'm passionate about crafting
                exceptional digital experiences that blend creativity with
                cutting-edge technology. Always pushing boundaries, always
                creating something extraordinary.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="relative flex items-center justify-center gap-2 cursor-pointer" onClick={() => handleNavigation('#contact')}>
                    <Mail size={20} />
                    Let's Connect
                  </div>
                </button>

                <a
                  href="https://drive.google.com/file/d/1hPhZpGVyJaUzzQ6LZYUm5l663W7qZguK/view?usp=sharing"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-500 rounded-xl font-semibold text-purple-400 overflow-hidden transition-all duration-300 hover:scale-105 hover:text-white"
                  target="_blank"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="relative flex items-center justify-center gap-2">
                    <Download size={20} />
                    Download Resume
                  </div>
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image & Social Icons (Same orbit for all sizes) */}
            <div className="relative flex justify-center items-center order-1 lg:order-2 py-8 lg:py-0">
              <div className="relative">
                {/* Profile Image */}
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 to-pink-400 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center text-6xl sm:text-8xl xl:text-9xl">
                    👨‍💻
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Floating Social Icons - Responsive Orbit */}
                {socialLinks.map((social, index) => {
                  const angle = (index / socialLinks.length) * 2 * Math.PI;
                  const radius = window.innerWidth < 768 ? 120 : 180; // smaller radius on mobile
                  const x = radius * Math.cos(angle);
                  const y = radius * Math.sin(angle);

                  return (
                    <div
                      key={social.name}
                      className="absolute transition-all duration-300 hover:scale-110"
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                      onMouseEnter={() => setHoveredIcon(index)}
                      onMouseLeave={() => setHoveredIcon(null)}
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-2xl backdrop-blur-sm border border-white/20 transition-all duration-300 hover:border-white/40 group"
                        style={{ background: social.color }}
                      >
                        {/* Hover Tooltip */}
                        {hoveredIcon === index && (
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 backdrop-blur-sm rounded text-xs font-medium whitespace-nowrap border border-white/20">
                            {social.name}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80" />
                          </div>
                        )}

                        <social.icon
                          size={25}
                          className="text-white group-hover:scale-110 transition-transform duration-300"
                        />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
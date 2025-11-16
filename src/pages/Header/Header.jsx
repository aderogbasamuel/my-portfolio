import { Briefcase, Code, GraduationCap, Home, Laptop, Mail } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { id: "home", icon: Home, text: "Home" },
    { id: "skills", icon: Code, text: "Skills" },
    { id: "experience", icon: Briefcase, text: "Experience" },
    { id: "education", icon: GraduationCap, text: "Education" },
    { id: "projects", icon: Laptop, text: "Projects" },
    { id: "contact", icon: Mail, text: "Contact" },
  ];

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 w-auto">
        <div className="p-[1.5px] rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x">
          <nav className="bg-gray-900/90 backdrop-blur-md rounded-full px-2 py-2">
            <div className="flex flex-row items-center gap-0 md:gap-1 lg:gap-2 py-0">
              {navLinks.map(({ id, icon: Icon, text }) => (
                <button
                  key={id}
                  onClick={() => handleScrollToSection(id)}
                  className={`px-2 py-2 md:py-2 rounded-full text-sm font-medium
                    transition-all duration-300 flex items-center gap-2
                    hover:bg-white/10 hover:-rotate-6 hover:scale-105 
                    ${activeLink === id ? "bg-white/15 text-white" : "text-gray-300 hover:text-white"}
                  `}
                >
                  <Icon className={`text-base ${activeLink === id ? "scale-110" : ""}`} size={24} />
                  {/* <span className="inline">{text}</span> */}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
}

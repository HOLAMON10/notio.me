import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaHome,
  FaLightbulb,
  FaCamera,
  FaGithub,
  FaEnvelope,
  FaFeatherAlt,
} from "react-icons/fa";

const HorizontalMenu = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [tappedIndex, setTappedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const menuItems = [
    { icon: <FaHome size={20} />, label: "Home", href: "/" },
    { icon: <FaLightbulb size={20} />, label: "Craft", href: "/projects" },
    { icon: <FaCamera size={20} />, label: "Pictures", href: "/pictures" },
    { icon: <FaFeatherAlt size={20} />, label: "Literature", href: "/writings" },
    {
      icon: <FaGithub size={20} />,
      label: "GitHub",
      href: "https://github.com/HOLAMON10",
      external: true,
    },
    {
      icon: <FaEnvelope size={20} />,
      label: "Mail",
      href: "mailto:jmcardozo.q@gmail.com",
    },
  ];

  const handleClick = (item, index) => {
  if (isMobile) {
    setTappedIndex(index);
    setTimeout(() => {
      setTappedIndex(null);
    }, 200);
  }

  if (item.external || item.href.startsWith("mailto:")) {
    window.open(item.href, "_blank");
  } else if (item.href) {
    navigate(item.href);
  }
};

  return (
    <footer className="flex justify-center items-center mb-3 bg-transparent">
      <div
        className={`flex gap-2 bg-white rounded-full shadow-md px-2 py-1 transition-all duration-50 ease-out ${
          !isMobile && hoveredIndex !== null ? "px-4" : ""
        }`}
      >
        {menuItems.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isBefore = hoveredIndex !== null && index < hoveredIndex;
          const isAfter = hoveredIndex !== null && index > hoveredIndex;
          const isTapped = tappedIndex === index;

          return (
            <button
              key={index}
              className={`relative flex justify-center items-center w-11 h-11 text-gray-700 bg-slate-300 hover:bg-gray-200 hover:ring-offset-2 rounded-full transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1.2)] transform shadow-sm
                ${
                  !isMobile && isBefore ? "-translate-x-1" : ""
                }
                ${
                  !isMobile && isAfter ? "translate-x-1" : ""
                }
                ${
                  !isMobile && isHovered ? "scale-150 -translate-y-5 shadow-lg" : ""
                }
                ${
                  isMobile && isTapped ? "-translate-y-3" : ""
                }
              `}
              aria-label={item.label}
              onMouseEnter={() => {
                if (!isMobile) setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                if (!isMobile) setHoveredIndex(null);
              }}
              onClick={() => handleClick(item, index)}
            >
              {item.icon}

              {/* Hover label */}
              {!isMobile && (
                <span
                  className={`absolute bottom-full mb-1 text-xs bg-black text-white rounded px-2 py-0.5 opacity-0 pointer-events-none transition-opacity duration-200 ${
                    isHovered ? "opacity-100" : ""
                  }`}
                >
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </footer>
  );
};

export default HorizontalMenu;

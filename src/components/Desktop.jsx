import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Desktop = () => {
  const videoRefs = useRef({});
  const [loaded, setLoaded] = useState({});
  const [hoverInfo, setHoverInfo] = useState(null); // label + screenX + bounds
  const navigate = useNavigate();

  const apps = [
    {
      label: "Projects",
      href: "/projects",
      type: "video",
      image: "https://cdn.rauno.me/flume-s2.mp4#t=0.01",
    },
    {
      label: "Literature",
      href: "/writings",
      type: "video",
      image: "https://cdn.rauno.me/ixd/page-flip4-s.mp4#t=1",
    },
    {
      label: "Pictures",
      href: "/pictures",
      type: "video",
      image: "https://cdn.rauno.me/screenshot-tiny.mp4#t=0.01",
    },
    
  ];

  const handleMouseEnter = (app, bounds) => {
    const ref = videoRefs.current[app.label];
    if (ref) ref.play();
    setHoverInfo({ label: app.label, x: bounds.left, bounds });
  };

  const handleMouseMove = (e, app, bounds) => {
    const x = Math.min(Math.max(e.clientX, bounds.left), bounds.right);
    const y = Math.min(Math.max(e.clientY, bounds.top), bounds.bottom);
    setHoverInfo({
      label: app.label,
      x,
      cursorY: y,
      bounds,
    });
  };

  const handleMouseLeave = (app) => {
    const ref = videoRefs.current[app.label];
    if (ref) {
      ref.pause();
      ref.currentTime = 0;
    }
    setHoverInfo(null);
  };

  const handleLoadedData = (label) => {
    setLoaded((prev) => ({ ...prev, [label]: true }));
  };

  const handleClick = (href) => {
    navigate(href);
  };

  const raunoStyle = {
    transform: `
      translate(-50%, -75%) 
      skewX(-48deg) 
      skewY(14deg) 
      scaleX(2) 
      scale(0.4) 
      rotate(0deg) 
      translateZ(0)
    `,
    position: "absolute",
    top: "55%",
    left: "50%",
  };

  return (
    <div className="relative w-full min-h-screen bg-transparent">
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-50 px-4">
 
</div>
      {/* The vertical line rendered OUTSIDE of raunoStyle */}
      {hoverInfo && (
  <div
    className="fixed flex flex-col items-center pointer-events-none"
    style={{
      left: hoverInfo.x,
      transform: "translateY(-110%) translateX(-45%)",
      top: `${hoverInfo.cursorY}px`,
      zIndex: 50,
    }}
  >
    <div className="text-base text-gray-700 mb-1 whitespace-nowrap font-semibold ">
      {hoverInfo.label}
    </div>
    <div
      className="w-px bg-gray-600"
      style={{
        height: `100px`,
      }}
    />
  </div>
)}


      <div
        className="flex gap-6 lg:gap-24 justify-center mt-48 px-4"
        style={raunoStyle}
      >
        {apps.map((app) => {
          let sizeClasses = "w-36 h-28 md:w-48 md:h-36 lg:w-96 lg:h-64";
          if (app.label === "Projects")
            sizeClasses = "w-32 h-48 md:w-36 md:h-64 lg:w-52 lg:h-96";
          else if (app.label === "Pictures")
            sizeClasses = "w-48 h-32 md:w-64 md:h-48 lg:w-96 lg:h-72";

          const isLoaded = loaded[app.label];

          return (
            <div
              key={app.label}
              className="relative flex flex-col items-center cursor-pointer fade-in-down group"
              onMouseEnter={(e) => {
                const bounds = e.currentTarget.getBoundingClientRect();
                handleMouseEnter(app, bounds);
              }}
              onMouseMove={(e) => {
                const bounds = e.currentTarget.getBoundingClientRect();
                handleMouseMove(e, app, bounds);
              }}
              onMouseLeave={() => handleMouseLeave(app)}
              onClick={() => handleClick(app.href)}
            >
              <div
                className={`${sizeClasses} overflow-hidden relative transition-transform duration-300 ease-out group-hover:scale-105 group-hover:shadow-xl`}
                style={{
                  boxShadow: "200px 200px 45px rgba(0, 0, 0, 0.4)",
                  borderRadius: "1px",
                }}
              >
                {app.type === "video" ? (
                  <video
                    ref={(el) => (videoRefs.current[app.label] = el)}
                    src={app.image}
                    muted
                    onLoadedData={() => handleLoadedData(app.label)}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      isLoaded ? "blur-0 opacity-100" : "blur-md opacity-80"
                    }`}
                  />
                ) : (
                  <img
                    src={app.image}
                    alt={app.label}
                    onLoad={() => handleLoadedData(app.label)}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      isLoaded ? "blur-0 opacity-100" : "blur-md opacity-80"
                    }`}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Desktop;

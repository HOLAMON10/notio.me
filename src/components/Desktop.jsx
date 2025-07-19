import { useRef, useEffect } from "react";

const Desktop = () => {
  const videoRefs = useRef({});

  const apps = [
    {
      label: "Work",
      type: "video",
      image: "https://cdn.rauno.me/flume-s2.mp4#t=0.01",
      onClick: () => alert("Work clicked"),
    },
    {
      label: "Pictures",
      type: "video",
      image: "https://cdn.rauno.me/ixd/page-flip4-s.mp4#t=1",
      onClick: () => alert("Pictures clicked"),
    },
    {
      label: "About Me",
      type: "video",
      image: "https://cdn.rauno.me/screenshot-tiny.mp4#t=0.01",
      onClick: () => alert("About Me clicked"),
    },
  ];

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .fade-in-down {
        opacity: 0;
        transform: translateY(-10px);
        animation: fadeInDown 0.5s ease-out forwards;
      }

      @keyframes fadeInDown {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleMouseEnter = (app) => {
    const ref = videoRefs.current[app.label];
    if (ref) ref.play();
  };

  const handleMouseLeave = (app) => {
    const ref = videoRefs.current[app.label];
    if (ref) {
      ref.pause();
      ref.currentTime = 0;
    }
  };

  const raunoStyle = {
    transform: `
      translate(-50%, -50%) 
      skewX(-48deg) 
      skewY(14deg) 
      scaleX(2) 
      scale(0.4) 
      rotate(0deg) 
      translateZ(0)
    `,
    position: "absolute",
    top: "60%",
    left: "50%",
    willChange: "transform",
    backfaceVisibility: "hidden",
    transformStyle: "preserve-3d",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  };

  const shadowStyle = {
    boxShadow: "200px 200px 45px rgba(0, 0, 0, 0.4)",
    transition: "box-shadow 0.3s ease",
    borderRadius: "1px",
  };

  return (
    <div className="relative w-full h-full bg-transparent">
      <div
        className="flex gap-6 lg:gap-24 justify-center mt-48 px-4"
        style={raunoStyle}
      >
        {apps.map((app) => {
          let sizeClasses = "w-36 h-28 md:w-48 md:h-36 lg:w-96 lg:h-64";

          if (app.label === "Work") {
            sizeClasses = "w-32 h-48 md:w-36 md:h-64 lg:w-52 lg:h-96";
          } else if (app.label === "Pictures") {
            sizeClasses = "w-48 h-32 md:w-64 md:h-48 lg:w-96 lg:h-72";
          }

          return (
            <div
              key={app.label}
              className="flex flex-col items-center cursor-pointer fade-in-down"
              onClick={app.onClick}
              onMouseEnter={() => handleMouseEnter(app)}
              onMouseLeave={() => handleMouseLeave(app)}
              style={{
                willChange: "transform",
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className={`${sizeClasses} overflow-hidden transition`}
                style={shadowStyle}
              >
                {app.type === "video" ? (
                  <video
                    ref={(el) => (videoRefs.current[app.label] = el)}
                    src={app.image}
                    muted
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <img
                    src={app.image}
                    alt={app.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
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

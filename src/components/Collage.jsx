import { useEffect, useState } from "react";

const Collage = () => {
  const filenames = [
    "1.webp", "3.webp", "4.webp", "5.webp", "2.webp", "8.webp", "9.webp", "23.webp",
    "6.webp", "7.webp", "30.webp", "10.webp", "11.webp", "24.webp", "12.webp", "13.webp",
    "14.webp", "15.webp", "16.webp", "22.webp", "17.webp", "18.webp", "28.webp", "25.webp",
    "19.webp", "26.webp", "27.webp", "29.webp",
  ];

  const [loaded, setLoaded] = useState({});

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .collage {
        display: grid;
        gap: 10px;
        padding: 6px;
        background: white;
        grid-template-columns: 1fr;
      }

      .collage__img {
        width: 100%;
        max-height: 570px;
        object-fit: cover;
        display: block;
        filter: blur(20px);
        transition: filter 0.5s ease, opacity 0.5s ease;
        opacity: 0.8;
      }

      .collage__img--loaded {
        filter: blur(0);
        opacity: 1;
      }

      @media (min-width: 768px) {
        .collage {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleLoad = (file) => {
    setLoaded((prev) => ({ ...prev, [file]: true }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="collage">
          {filenames.map((file) => (
            <img
              key={file}
              src={`/images/photos/${file}`}
              alt=""
              loading="lazy"
              onLoad={() => handleLoad(file)}
              style={{ aspectRatio: "4/3" }}
              className={`collage__img ${loaded[file] ? "collage__img--loaded" : ""}`}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Collage;

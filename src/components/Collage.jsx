import { useEffect } from "react";

const Collage = () => {
  const filenames = [
    "1.webp", "3.webp", "4.webp", "5.webp", "2.webp", "8.webp", "9.webp", "23.webp", "6.webp", "7.webp", "30.webp", "10.webp", "11.webp", "24.webp", "12.webp", "13.webp", "14.webp", "15.webp", "16.webp", "22.webp", "17.webp", "18.webp", "28.webp", "25.webp", "19.webp", "26.webp", "27.webp", "29.webp",
  ];

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

      .collage img {
        opacity: 0;
        transform: translateY(-10px);
        animation: fade-in 1.5s ease-out forwards;
      }

      @keyframes fade-in {
        to {
          opacity: 1;
          transform: translateY(0);
        }
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

  return (
    <div className="collage">
      {filenames.map((file) => (
        <img
          key={file}
          src={`/images/photos/${file}`}
          alt=""
          loading="lazy"
          style={{
            width: "100%",
            maxHeight: "570px",
            objectFit: "cover",
            display: "block",
          }}
        />
      ))}
    </div>
  );
};

export default Collage;

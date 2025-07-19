import { useEffect } from "react";

const Collage = () => {
  const filenames = [
    "1.jpg", "3.jpg", "4.jpg", "5.jpg", "2.jpg", "8.jpg", "9.jpg", "23.jpg", "6.jpg", "7.jpg", "30.jpg", "10.jpg", "11.jpg", "24.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "22.jpg", "17.jpg", "18.jpg", "28.jpg", "25.jpg", "19.jpg", "26.jpg", "27.jpg", "29.jpg",
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

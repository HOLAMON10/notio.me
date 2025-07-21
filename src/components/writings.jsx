import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { IoChevronForwardSharp } from "react-icons/io5";

const Writings = () => {
  const poems = [
    {
      id: "ode-to-a-nightingale",
      title: "Nadie Se Salva Solo",
      content: `
Nadie soporta la existencia solo.
Nadie carga con el peso miserable de sí mismo.
Nadie aguanta el huracán neurótico de la infernal soledad.

Nunca nadie se salva solo.

Un filósofo dijo una vez:
"Lo sabio es pedir ayuda."
y siguió su camino en la montaña.

La idea no es perderse en el Otro,
pero sabernos libres con el Otro,
porque nadie nunca se salva solo.
      `,
      filename: "patagonia.webp",
    },
    {
      id: "thing-of-beauty",
      title: "Dear Dante",
      content: `
The devil between your thighs,
dont let us have a bite,
of a that submarine of wine.
Only a pretentious moment,
we dont really want.
One step to the longest stair,
too scare to lift up that way.
Think twice;
and run out to another stay.
just to enter Dante's Cave.
      `,
      filename: "dante1.webp",
    },
    {
      id: "road-not-taken",
      title: "Laberinto",
      content: `
Planeando en este inexplicable camino,
cuyo laberinto tropieza el todo del mundo.
Buscando una certeza que no viene,
no viene y no está en esta parte.

El veneno y Florencia en la lejanía,
de Barcelona que se aleja con cada segundo.
Tan cerca que desde ese momento,
ningún hombre se atrevió a tocar,
ella sigue rondando los laureles,
como Cervantes, confiados de su llegada.

Si ningún hombre la sintió otra vez,
estas palabras mentiras y falacias traerán,
y nadie más volvió a amar.
Tapadas por las sombras de la historia.

Aquello inexplicable, irrazonable y humano.
Quizás demasiado.
      `,
      filename: "writing1.webp",
    },
    {
      id: "if",
      title: "Efimero",
      content: `
Lo efimero como uno, dos, tres,
con el querer de ser uno.
Sobre una cama antigua,
encontrando a lo que ibamos,
ibamos a ser efimeros.

Un amor con pradera al sur,
buscando el Norte.
No venia el horizonte,
sobre una cama antigua, 
no era el unico hombre. 
      `,
      filename: "writing2.webp",
    },
    {
      id: "daffodils",
      title: "Bahia",
      content: `
Una bahía de vientos chocantes,
que se deslizan entre el roce.
¿o el goce?
Las hojas se mecen en el viento,
bailan con las almas,
como si de mucho tiempo se tratase,
y otra vez.
Los océanos entonan su melodía,
guiados por la luna,
criados por el viento.
      `,
      filename: "bahia.webp",
    },
  ];

  const [activePoem, setActivePoem] = useState(poems[0].id);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [fading, setFading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const currentPoemIndex = poems.findIndex((p) => p.id === activePoem);
  const currentPoem = poems[currentPoemIndex];

  useEffect(() => {
    document.title = "Desktop";
    const timeout = setTimeout(() => setPageLoaded(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  // 🔷 Preload all images once
  useEffect(() => {
    poems.forEach((poem) => {
      const img = new Image();
      img.src = `/images/photos/${poem.filename}`;
    });
  }, []);

  const handlePoemChange = (id, direction) => {
    if (id === activePoem) return;
    setSwipeDirection(direction);
    setFading(true);
    setImageLoaded(false);
    setTimeout(() => {
      setActivePoem(id);
      setFading(false);
      setSwipeDirection(null);
    }, 300);
  };

  const handleSwipe = (direction) => {
    if (direction === "left" && currentPoemIndex < poems.length - 1) {
      handlePoemChange(poems[currentPoemIndex + 1].id, "left");
    } else if (direction === "right" && currentPoemIndex > 0) {
      handlePoemChange(poems[currentPoemIndex - 1].id, "right");
    }
  };

  let touchStartX = 0;

  const onTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) handleSwipe("left");
      else handleSwipe("right");
    }
  };

  const getPoemButtonClasses = (poemId) => {
    const isActive = activePoem === poemId;
    return [
      "relative block text-left w-full px-1 py-0.5 transition-colors duration-300",
      "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-current after:transition-all after:duration-300",
      isActive
        ? "text-black-800 after:w-full"
        : "text-gray-700 after:w-0 hover:text-black-700 hover:after:w-full",
    ].join(" ");
  };

  return (
    <div
      className="bg-gradient-to-br from-slate-100 via-slate to-slate-300 min-h-[105vh] "
    >
      <div className="flex justify-center px-4 py-16 sm:pl-36 pb-24">
        <div className="flex max-w-6xl w-full relative">
          {/* Sidebar */}
          <aside className="hidden md:block w-56 pr-8 py-12 border-r-4 border-gray-300 text-sm text-gray-700 sm:py-36 sticky top-0 overflow-y-auto">
            <div className="mb-6">
              <a
                href="/"
                className="text-gray-500 text-xs hover:text-black transition-colors duration-300"
              >
                ⤺ Home
              </a>
            </div>
            <nav className="space-y-2">
              {poems.map((poem) => (
                <button
                  key={poem.id}
                  onClick={() => handlePoemChange(poem.id)}
                  className={getPoemButtonClasses(poem.id)}
                >
                  {poem.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Mobile Nav */}
          <div className="md:hidden absolute top-0 left-0 right-0 flex justify-between items-center px-4">
            <a href="/" className="text-sm text-gray-700">
              ← Home
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="text-gray-700 text-xl"
            >
              <FiMenu />
            </button>
          </div>

          {/* Mobile Slide-In Menu */}
          <div
            className={`fixed top-0 right-0 h-full bg-gray-50 z-20 transform transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
            style={{
              width: "50%",
              transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <div className="p-4 pt-12">
              <span className="text-lg font-semibold block mb-4">Poems</span>
              {poems.map((poem) => (
                <button
                  key={poem.id}
                  onClick={() => {
                    setMenuOpen(false);
                    setTimeout(() => handlePoemChange(poem.id), 100);
                  }}
                  className={getPoemButtonClasses(poem.id)}
                >
                  {poem.title}
                </button>
              ))}
            </div>
            {menuOpen && (
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 shadow rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition"
              >
                <IoChevronForwardSharp
                  className={`text-lg text-gray-700 transition-transform ${
                    menuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}
          </div>

          {/* Main Content */}
          <main
            className="relative flex-1 px-8 text-gray-900 mt-12 md:mt-0 overflow-y-auto"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className={`transition-all duration-300 transform ${
                fading
                  ? swipeDirection === "left"
                    ? "opacity-0 -translate-x-4"
                    : "opacity-0 translate-x-4"
                  : "opacity-100 translate-x-0"
              }`}
            >
              {currentPoem && (
                <section id={currentPoem.id}>
                  <h2 className="text-2xl font-semibold mb-4">
                    {currentPoem.title}
                  </h2>
                  {currentPoem.filename && (
                    <img
                      src={`/images/photos/${currentPoem.filename}`}
                      alt={currentPoem.title}
                      onLoad={() => setImageLoaded(true)}
                      className={`w-full max-w-[500px] max-h-[300px] object-contain rounded mb-4 transition-all duration-500 ${
                        imageLoaded ? "opacity-100 blur-0" : "opacity-80 blur"
                      }`}
                    />
                  )}
                  <div className="text-gray-700 whitespace-pre-wrap sm:pl-16 pl-8">
                    {currentPoem.content.trim()}
                  </div>

                  {/* Dynamic arrows */}
                  <div className="sm:hidden text-center text-gray-700 text-[10px] mt-1">
                    {currentPoemIndex > 0 && "←"}
                    {currentPoemIndex > 0 &&
                      currentPoemIndex < poems.length - 1 &&
                      " "}
                    {currentPoemIndex < poems.length - 1 && "→"}
                  </div>
                </section>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Writings;

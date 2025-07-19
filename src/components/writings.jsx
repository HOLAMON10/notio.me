import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { IoChevronForwardSharp } from "react-icons/io5";

const Writings = () => {
  const poems = [
    {
      id: "thing-of-beauty",
      title: "A Thing of Beauty",
      content: `
A thing of beauty is a joy forever:
Its loveliness increases, it will never
Pass into nothingness; but still will keep
A bower quiet for us, and a sleep
Full of sweet dreams, and health, and quiet breathing.
      `,
    },
    {
      id: "ode-to-a-nightingale",
      title: "Ode to a Nightingale",
      content: `
My heart aches, and a drowsy numbness pains
My sense, as though of hemlock I had drunk...
      `,
    },
    {
      id: "road-not-taken",
      title: "The Road Not Taken",
      content: `
Two roads diverged in a yellow wood,
And sorry I could not travel both...
      `,
    },
    {
      id: "if",
      title: "If—",
      content: `
If you can keep your head when all about you
Are losing theirs and blaming it on you...
      `,
    },
    {
      id: "daffodils",
      title: "Daffodils",
      content: `
I wandered lonely as a cloud
That floats on high o'er vales and hills...
      `,
    },
  ];

  const [activePoem, setActivePoem] = useState(poems[0].id);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);

  const currentPoem = poems.find((poem) => poem.id === activePoem);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .fade-in-down {
        opacity: 0;
        transform: translateY(-10px);
        animation: fadeInDown 0.4s ease-out forwards;
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

  return (
    <div className="bg-white flex justify-center px-4 mt-24">
      <div className="flex max-w-6xl w-full relative">

        {/* Sidebar - desktop */}
        <aside className="hidden md:block w-56 pr-8 py-8 border-r text-sm text-gray-700">
          <div className="mb-6">
            <a href="/" className="text-gray-500 text-xs hover:underline">
              ← Home
            </a>
          </div>
          <nav className="space-y-2">
            {poems.map((poem) => (
              <button
                key={poem.id}
                onClick={() => {
                  setActivePoem(poem.id);
                  setFadeKey(prev => prev + 1); // trigger animation
                }}
                className={`block text-left w-full hover:text-blue-600 ${
                  activePoem === poem.id ? "font-semibold text-blue-700" : ""
                }`}
              >
                {poem.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile top nav */}
        <div className="md:hidden absolute top-0 left-0 right-0 flex justify-between items-center px-4 py-2 bg-white shadow z-10">
          <a href="/" className="text-sm text-gray-700 underline">
            ← Home
          </a>
          <button
            onClick={() => setMenuOpen(true)}
            className="text-gray-700 text-xl"
          >
            <FiMenu />
          </button>
        </div>

        {/* Mobile slide-in menu */}
        <div
          className={`fixed top-0 right-0 h-full bg-gray-50 z-20 transform transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
          style={{
            width: '60%',
            transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          }}
        >
          <div className="p-4 space-y-2 pt-12">
            <span className="text-lg font-semibold block mb-4">Poems</span>
            {poems.map((poem) => (
              <button
                key={poem.id}
                onClick={() => {
                  setActivePoem(poem.id);
                  setFadeKey(prev => prev + 1);
                  setMenuOpen(false);
                }}
                className={`block w-full text-left text-lg hover:text-blue-600 ${
                  activePoem === poem.id ? "font-semibold text-blue-700" : ""
                }`}
              >
                {poem.title}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 shadow rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <IoChevronForwardSharp className="text-lg text-gray-700" />
          </button>
        </div>

        {/* Main Content */}
        <main className="flex-1 py-8 px-8 text-gray-900 mt-12 md:mt-0">
          {currentPoem && (
            <section
              id={currentPoem.id}
              key={fadeKey}
              className="fade-in-down"
            >
              <h2 className="text-2xl font-semibold mb-4">
                {currentPoem.title}
              </h2>
              <div className="text-gray-700 whitespace-pre-wrap pl-4">
                {currentPoem.content.trim()}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default Writings;

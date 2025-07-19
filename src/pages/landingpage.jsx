import Desktop from "../components/Desktop";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-gradient-to-br from-purple-300 via-gray-300 to-blue-300">
      <main className="flex-1 flex justify-center items-center relative">
        {/* Text block absolutely positioned */}
        <div className="absolute top-28 sm:top-24 left-4 sm:left-28 sm:translate-x-1 px-4 text-left w-full p-3">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-700 p-1">
            Excellence in the Extraordinary.
          </h1>
          <p className="text-base md:text-lg text-gray-600 p-1">
            Focused on delivering high-quality, innovative designs.
          </p>
          <p className="text-base md:text-lg text-gray-600 p-1">
            Always exploring new ideas, trends, and technologies to deliver unique solutions.
          </p>
        </div>

       <div className="sm:mb-16">
        <Desktop />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;

const HeroSection = () => {
  return (
    <div className="lg:h-screen bg-gradient-to-b from-white via-pink-200 to-sky-200 flex items-center justify-center h-96">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
          Start Your Mock Test <span className="text-pink-600">Journey</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700">
          Prepare for success with our comprehensive mock tests
        </p>
        <div className="mt-8 sm:mt-10">
          <a
            href="#"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 sm:px-8 rounded-full text-lg sm:text-xl font-semibold transition duration-300 ease-in-out"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

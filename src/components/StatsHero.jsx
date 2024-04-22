import React from 'react';

const HeroSection = () => {
  // Dummy data for statistics
  const totalMockTests = 25;
  const totalTestsTaken = 550;
  const totalStudentsRegistered = 1000;
  const totalCourses = 15;

  return (
    <div className="bg-gradient-to-r from-pink-200 via-sky-400 to-white text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Learning Platform</h1>
        <p className="text-lg mb-8">Start your journey towards success today!</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Total Mock Tests */}
          <div className="bg-gray-800 p-4 rounded-md text-center">
            <h2 className="text-2xl font-semibold">{totalMockTests}</h2>
            <p className="text-sm">Total Mock Tests</p>
          </div>
          {/* Total Test Taken */}
          <div className="bg-gray-800 p-4 rounded-md text-center">
            <h2 className="text-2xl font-semibold">{totalTestsTaken}</h2>
            <p className="text-sm">Total Tests Taken</p>
          </div>
          {/* Number of Students Registered */}
          <div className="bg-gray-800 p-4 rounded-md text-center">
            <h2 className="text-2xl font-semibold">{totalStudentsRegistered}</h2>
            <p className="text-sm">Number of Students Registered</p>
          </div>
          {/* Total Courses */}
          <div className="bg-gray-800 p-4 rounded-md text-center">
            <h2 className="text-2xl font-semibold">{totalCourses}</h2>
            <p className="text-sm">Total Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

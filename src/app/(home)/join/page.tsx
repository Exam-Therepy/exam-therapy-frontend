import Link from 'next/link';
import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Welcome to Creator <span className='text-red-600'> Studio</span></h1>
        <p className="text-lg text-gray-600 mb-8">Empower yourself to craft dynamic mock tests with ease.</p>
        <Link href="/join/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full mb-4 inline-block">Join Now for Free</Link>
      </div>
    </div>
  );
};

export default LandingPage;

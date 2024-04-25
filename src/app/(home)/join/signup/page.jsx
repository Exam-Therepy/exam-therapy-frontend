import React from 'react';

const SignupForm = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center">
      <div className="max-w-xl mx-auto p-8 bg-gray-100 shadow-md rounded-md w-full m-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Creator Registration Form</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
            <input type="text" id="department" name="department" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

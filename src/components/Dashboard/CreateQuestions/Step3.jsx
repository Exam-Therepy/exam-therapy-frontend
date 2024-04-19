import React, { useState } from 'react';

const Step3 = ({ formData, setFormData, questions, setQuestions, onPrev, onNext }) => {
  const [isFree, setIsFree] = useState(false);

  const handlePrev = () => {
    onPrev();
  };

  const handleNext = () => {
    onNext();
  };

  const handleCheckboxChange = (e) => {
    setIsFree(e.target.checked);
    if (e.target.checked) {
      setFormData({ ...formData, price: '', isFree: true });
    } else {
      setFormData({ ...formData, isFree: false });
    }
  };

  const handlePriceChange = (e) => {
    setFormData({ ...formData, price: e.target.value });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Step 3: Pricing</h2>
      <div className="mb-4">
        <input
          type="checkbox"
          id="isFree"
          checked={isFree}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <label htmlFor="isFree" className="text-sm font-medium text-gray-700">
          Free
        </label>
      </div>
      {!isFree && (
        <div className="mb-6">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
            Price (INR)
          </label>
          <input
            type="text"
            id="price"
            value={formData.price}
            onChange={handlePriceChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter price in INR"
          />
        </div>
      )}
      <div className="flex justify-between">
        <button onClick={handlePrev} className="bg-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
          Previous
        </button>
        <button onClick={handleNext} className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3;

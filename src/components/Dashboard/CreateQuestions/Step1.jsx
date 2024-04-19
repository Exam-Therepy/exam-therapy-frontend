import React, { useRef } from 'react';

const Step1 = ({ formData, setFormData, onNext }) => {
  const fileInputRef = useRef(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    onNext();
  };

  const handleFileDrop = e => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, coverImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleFileInputChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, coverImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickToUpload = () => {
    fileInputRef.current.click();
  };

  const handleDeleteImage = () => {
    setFormData({ ...formData, coverImage: '' });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Step 1: General Instructions</h2>
      <div className="grid grid-cols-1 gap-y-6">
        <div>
          <label htmlFor="examName" className="block text-sm font-medium text-gray-700 mb-1">Exam Name</label>
          <input
            type="text"
            name="examName"
            id="examName"
            value={formData.examName}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter Exam Name"
          />
        </div>
        <div>
          <label htmlFor="subjectName" className="block text-sm font-medium text-gray-700 mb-1">Subject Name</label>
          <input
            type="text"
            name="subjectName"
            id="subjectName"
            value={formData.subjectName}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter Subject Name"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select Category</option>
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
            {/* Add more options if needed */}
          </select>
        </div>
        <div className="relative">
          <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
          <div
            className="border-dashed border-2 border-gray-300 rounded-md p-4 cursor-pointer"
            onDrop={handleFileDrop}
            onDragOver={handleDragOver}
            onClick={handleClickToUpload}
          >
            <p className="text-gray-400 text-center">Drag & Drop or Click to Upload</p>
            <input
              type="file"
              accept="image/*"
              name="coverImage"
              id="coverImage"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              className="hidden"
            />
          </div>
          {formData.coverImage && (
            <div className="mt-2">
              <img src={formData.coverImage} alt="Cover" className="max-w-xs" />
              <button
                onClick={handleDeleteImage}
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mt-2"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-8">
        <button onClick={handleNext} className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1;

import React from 'react';

const Step4 = ({ formData, questions, onPrev, onSubmit }) => {
  const handlePrev = () => {
    onPrev();
  };

  const handleSubmit = () => {
    console.log(formData)
    console.log(questions)
    onSubmit();
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Step 4: Preview Page and Submit</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">General Instructions:</h3>
        <p>Exam Name: {formData.examName}</p>
        <p>Subject Name: {formData.subjectName}</p>
        <p>Category: {formData.category}</p>
        {/* Add other form data */}
      </div>
      {/* Display preview of questions */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Added Questions:</h3>
        <ul>
          {questions.map((question, index) => (
            <li key={index} className="mb-2">
              <span className="font-medium">{question.type}:</span> {question.content}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between">
        <button onClick={handlePrev} className="bg-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
          Previous
        </button>
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step4;

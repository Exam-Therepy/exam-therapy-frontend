import React, { useState } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Step2 = ({ questions, setQuestions, onPrev, onNext }) => {
  const [newQuestionType, setNewQuestionType] = useState('multipleChoice');
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [newQuestionOptions, setNewQuestionOptions] = useState([{ text: '', isCorrect: false }]);
  const [newQuestionAnswer, setNewQuestionAnswer] = useState('');
  const [newQuestionImage, setNewQuestionImage] = useState(null);

  const handlePrev = () => {
    onPrev();
  };

  const handleNext = () => {
    onNext();
  };

  const handleAddOption = () => {
    setNewQuestionOptions([...newQuestionOptions, { text: '', isCorrect: false }]);
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = [...newQuestionOptions];
    updatedOptions.splice(index, 1);
    setNewQuestionOptions(updatedOptions);
  };

  const handleMarkAsCorrect = (index) => {
    const updatedOptions = [...newQuestionOptions];
    updatedOptions[index].isCorrect = !updatedOptions[index].isCorrect;
    setNewQuestionOptions(updatedOptions);
  };

  const handleAddQuestion = () => {
    if (editorState.getCurrentContent().getPlainText().trim() === '') {
      alert('Please enter a question.');
      return;
    }

    let newQuestion = null;
    if (newQuestionType === 'multipleChoice') {
      newQuestion = {
        type: newQuestionType,
        content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
        options: newQuestionOptions.map((option) => option.text.trim()).filter((text) => text !== ''),
        answer: newQuestionOptions.findIndex((option) => option.isCorrect),
        image: newQuestionImage,
      };
    } else if (newQuestionType === 'numeric') {
      newQuestion = {
        type: newQuestionType,
        content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
        answer: newQuestionAnswer,
        image: newQuestionImage,
      };
    }

    setQuestions([...questions, newQuestion]);
    setNewQuestionType('multipleChoice');
    setEditorState(EditorState.createEmpty());
    setNewQuestionOptions([{ text: '', isCorrect: false }]);
    setNewQuestionAnswer('');
    setNewQuestionImage(null);
  };

  const handleChangeQuestionType = (e) => {
    setNewQuestionType(e.target.value);
  };

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const handleChangeOption = (index, value) => {
    const updatedOptions = [...newQuestionOptions];
    updatedOptions[index].text = value;
    setNewQuestionOptions(updatedOptions);
  };

  const handleChangeQuestionAnswer = (e) => {
    setNewQuestionAnswer(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewQuestionImage(file);
  };

  const handleEditQuestion = (index) => {
    // Handle edit functionality for the specific question
    console.log('Edit question:', index);
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  return (
    <div>
      <div className="p-4">
        <h2 className="text-3xl font-bold mb-8">Step 2: Add Questions</h2>
        <div className="mb-6">
          <label htmlFor="questionType" className="block text-sm font-medium text-gray-700 mb-2">
            Question Type
          </label>
          <select
            id="questionType"
            value={newQuestionType}
            onChange={handleChangeQuestionType}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="multipleChoice">Multiple Choice</option>
            <option value="numeric">Numeric</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="questionContent" className="block text-sm font-medium text-gray-700 mb-2">
            Question Content
          </label>
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={handleEditorChange}
          />
        </div>
        {newQuestionType === 'multipleChoice' && (
          <div className="mb-6">
            <label htmlFor="questionOptions" className="block text-sm font-medium text-gray-700 mb-2">
              Options
            </label>
            {newQuestionOptions.map((option, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  value={option.text}
                  onChange={(e) => handleChangeOption(index, e.target.value)}
                  className="flex-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter option"
                />
                <button
                  onClick={() => handleMarkAsCorrect(index)}
                  className={`ml-2 px-3 py-1 rounded-md ${
                    option.isCorrect ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
                  } hover:bg-green-600 focus:outline-none focus:ring-2 ${
                    option.isCorrect ? 'focus:ring-green-500' : 'focus:ring-gray-500'
                  } focus:ring-offset-2`}
                >
                  Mark as Correct
                </button>
                <button
                  onClick={() => handleRemoveOption(index)}
                  className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  -
                </button>
              </div>
            ))}
            <button
              onClick={handleAddOption}
              className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Option
            </button>
          </div>
        )}
        {newQuestionType === 'numeric' && (
          <div className="mb-6">
            <label htmlFor="questionAnswer" className="block text-sm font-medium text-gray-700 mb-2">
              Correct Answer
            </label>
            <input
              type="text"
              id="questionAnswer"
              value={newQuestionAnswer}
              onChange={handleChangeQuestionAnswer}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter correct answer"
            />
          </div>
        )}
        <div className="mb-6">
          <label htmlFor="questionImage" className="block text-sm font-medium text-gray-700 mb-2">
            Image (Optional)
          </label>
          <input
            type="file"
            id="questionImage"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            onClick={handlePrev}
            className="bg-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Previous
          </button>
          <button
            onClick={handleAddQuestion}
            className="bg-blue-500 mx-2 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Question
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Next
          </button>
        </div>
      </div>
      <div>
        {/* Display added questions */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Added Questions:</h3>
          <ul>
            {questions.map((question, index) => (
              <li key={index} className="mb-4 bg-gray-100 rounded-lg p-4 relative">
                <h4 className="text-xl font-semibold">Question {index + 1}</h4>
                <p>
                  <span className="font-medium">Type:</span> {question.type}
                </p>
                <p>
                  <span className="font-medium">Content:</span> {JSON.parse(question.content).blocks[0].text}
                </p>
                {question.type === 'multipleChoice' && (
                  <p>
                    <span className="font-medium">Options:</span>{' '}
                    {question.options.length > 0 ? question.options.join(', ') : 'No options'}
                  </p>
                )}
                  <p>
                    <span className="font-medium">Correct Answer:</span> {question.answer}
                  </p>
              
                <div className="mt-2 absolute top-1 right-1">
                  <button
                    onClick={() => handleEditQuestion(index)}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteQuestion(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Step2;

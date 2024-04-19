import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    examName: '',
    subjectName: '',
    category: '',
    // Add other form fields
  });
  const [questions, setQuestions] = useState([]);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmitForm = () => {
    // Handle final form submission
    console.log('Form submitted!');
  };

  return (
    <div className="w-full h-screen bg-white shadow-inner p-6">
      {step === 1 && <Step1 formData={formData} setFormData={setFormData} onNext={handleNextStep} />}
      {step === 2 && <Step2 questions={questions} setQuestions={setQuestions} onPrev={handlePrevStep} onNext={handleNextStep} />}
      {step === 3 && <Step3 formData={formData} setFormData={setFormData} questions={questions} setQuestions={setQuestions} onPrev={handlePrevStep} onNext={handleNextStep} />}
      {step === 4 && <Step4 formData={formData} questions={questions} onPrev={handlePrevStep} onSubmit={handleSubmitForm} />}
    </div>
  );
};

export default MultiStepForm;

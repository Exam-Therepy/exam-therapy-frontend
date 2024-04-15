'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';
import Loading from '@/components/Loading';
import PermissionModal from '@/components/PermissionModal'

export default function ExamPage({ params }) {
    const router = useRouter();
    const id = params.id;
    const { user, isLoading } = useUser();
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [responses, setResponses] = useState({});
    const [markedForReview, setMarkedForReview] = useState([]);
    const [saved, setSaved] = useState([]);
    const [loading, setLoading] = useState(true);
    const [timeLeft, setTimeLeft] = useState(3 * 60 * 60); // 3 hours in seconds

    const [isPermissionGranted, setIsPermissionGranted] = useState(false);

    useEffect(() => {
        setIsPermissionGranted(false);
    }, []);

    const handleRequestPermission = () => {
        const element = document.documentElement;

        // Request full-screen access using the Fullscreen API
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }

        // Disable keyboard functionality
        const disableKeyboard = (e) => {
            e.preventDefault();
        };

        // Disable right-click functionality
        // const disableRightClick = (e) => {
        //     e.preventDefault();
        // };

        // document.addEventListener('keydown', disableKeyboard);
        // document.addEventListener('contextmenu', disableRightClick);
        setIsPermissionGranted(true);
    };



    const fetchQuestions = async () => {
        try {
            const response = await fetch(
                `https://opentdb.com/api.php?amount=50&category=11&difficulty=easy`
            );
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                setQuestions(data.results);
                setLoading(false);
            } else {
                console.error('No questions found.');
            }
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };


    useEffect(() => {
        if (!isLoading && !user) {
            router.push('/api/auth/login');
        } else {
            fetchQuestions();
        }
    }, [isLoading, user, router]);

    useEffect(() => {
        if (timeLeft === 0) {
            handleSubmit();
        } else {
            const timer = setTimeout(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleAnswerChange = option => {
        setResponses({ ...responses, [currentQuestionIndex]: option });
    };

    const handleClearResponse = () => {
        const updatedResponses = { ...responses };
        delete updatedResponses[currentQuestionIndex];
        setResponses(updatedResponses);
    };

    const handleMarkForReview = () => {
        if (!markedForReview.includes(currentQuestionIndex)) {
            setMarkedForReview([...markedForReview, currentQuestionIndex]);
        }
        handleNextQuestion();
    };

    
    const handleSaveAndNext = () => {
        if (!responses[currentQuestionIndex]) {
            handleMarkForReview();
        } else {
            if (markedForReview.includes(currentQuestionIndex)) {
                setMarkedForReview(markedForReview.filter(index => index !== currentQuestionIndex));
            }
            if (!saved.includes(currentQuestionIndex)) {
                setSaved([...saved, currentQuestionIndex]);
            }
            handleNextQuestion();
        }
    };

    

    const calculateButtonColor = (index) => {

        if (index === currentQuestionIndex) {
            // Blue if the button is the current active question
            return 'bg-blue-500 text-white';
        }
        
        if (markedForReview.includes(index)) {
            if (responses[index]) {
                // Half Green and half purple if response is selected and marked for review
                return ' bg-gradient-to-r from-purple-500 to-green-500 relative text-white'
            } else {
                // Purple if marked for review without selecting response
                return 'bg-purple-500 text-white';
            }
        } else if (saved.includes(index)) {
            // Green if response is selected and saved
            return 'bg-green-500 text-white';
        } else if (responses[index]) {
            // Green if response is selected and not saved
            return 'bg-green-500 text-white';
        } else if (index < Object.keys(responses).length) {
            // Red if response is not selected and visited
            return 'bg-red-500 text-white';
        } else {
            // Gray if not visited
            return 'bg-gray-300 text-gray-700';
        }
    };
    
    

    const handleSubmit = () => {
        sessionStorage.setItem('examResponses', JSON.stringify(responses));
        // router.push('/response');
        console.log(responses)
    };

    if (loading) {
        return <Loading />;
    }

    if (!questions || questions.length === 0) {
        return <div>No questions available.</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    const formatTime = time => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''
            }${seconds}`;
    };


    return (
        <div>
            {!isPermissionGranted && <PermissionModal onRequestPermission={handleRequestPermission} />}
            {isPermissionGranted && (
                <div className="max-w-screen-xl mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="col-span-4 md:col-span-4 bg-blue-900 p-4">
                            <div className="col-span-4 md:col-span-4 bg-gray-100 p-4 flex items-center">
                                <img src={user.picture} className="h-20 w-20 mr-4" />
                                <div>
                                    <p className="text-lg font-semibold">Candidate Name : {user.name} </p>
                                    <p>Exam Name : Demo Exam</p>
                                    <p>Subject Name : Demo Subject</p>
                                    <p className="mb-0 text-red-600 font-bold">Time Left: {formatTime(timeLeft)}</p>
                                </div>
                            </div>

                        </div>

                        {/* Show Question */}
                        <div className="col-span-4 md:col-span-3 bg-gray-100 p-4 border-2 border-indigo-600">
                            <div className="flex justify-between mb-4">
                                <h1 className="text-2xl font-bold">Question {currentQuestionIndex + 1}</h1>
                            </div>

                            <p className="mb-4">{currentQuestion.question}</p>
                            <ul>
                                {currentQuestion.incorrect_answers.map((option, index) => (
                                    <li key={index} className="mb-2">
                                        <input
                                            type="radio"
                                            id={option}
                                            name="answer"
                                            value={option}
                                            checked={responses[currentQuestionIndex] === option}
                                            onChange={() => handleAnswerChange(option)}
                                            className="mr-2"
                                        />
                                        <label htmlFor={option}>{option}</label>
                                    </li>
                                ))}
                                <li className="mb-2">
                                    <input
                                        type="radio"
                                        id={currentQuestion.correct_answer}
                                        name="answer"
                                        value={currentQuestion.correct_answer}
                                        checked={responses[currentQuestionIndex] === currentQuestion.correct_answer}
                                        onChange={() => handleAnswerChange(currentQuestion.correct_answer)}
                                        className="mr-2"
                                    />
                                    <label htmlFor={currentQuestion.correct_answer}>{currentQuestion.correct_answer}</label>
                                </li>
                            </ul>

                        </div>

                        {/* Sidebar */}
                        <div className="col-span-4 md:col-span-1 bg-indigo-100 p-4">
                            <div className="mb-4">
                                <p className="text-sm font-semibold">Question Status</p>
                                <ul>
                                    <li className="flex items-center mb-2">
                                        <span className="bg-green-500 w-8 h-8 rounded-full mr-2"></span>
                                        <span className="text-sm">Answered :  {Object.keys(responses).length}</span>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <span className="bg-red-500 w-8 h-8 rounded-full mr-2"></span>
                                        <span className="text-sm">Not Answered : {questions.length - Object.keys(responses).length}</span>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <span className="bg-gray-400 w-8 h-8 rounded-full mr-2"></span>
                                        <span className="text-sm">Not Visited : {Math.max(0, questions.length - Object.keys(responses).length - markedForReview.length)}</span>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <span className="bg-purple-500 w-8 h-8 rounded-full mr-2"></span>
                                        <span className="text-sm">Mark for Review :  {markedForReview.length}</span>
                                    </li>

                                    <li className="flex items-center mb-2">
                                    <span className=" w-8 h-8 mr-2 bg-gradient-to-r from-purple-500 to-green-500 relative text-white"></span>
                                    <span className="text-sm w-full">Answered & Marked for Revision (will be considered for evaluation)</span>
                                   </li>
                                </ul>
                            </div>

                            <ul className="grid grid-cols-5 gap-2 h-72 overflow-y-auto">
                                {questions.map((_, index) => (
                                <li key={index}>
                                    <button
                                    id='questionNumber'
                                    onClick={() => setCurrentQuestionIndex(index)}
                                    className={`block h-10 w-10 text-center rounded-full focus:outline-none hover:bg-blue-500 hover:text-white ${calculateButtonColor(index)}`}
                                >
                                    {index + 1}
                                </button>
                                </li>
                                ))}
                            </ul>



                        </div>

                        {/* Buttons */}
                        <div className="col-span-4 bg-gray-300 p-4">
                            <button
                                onClick={handleClearResponse}
                                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mb-2 sm:mb-0 mr-2 flex-1"
                            >Clear</button>

                            <button
                                onClick={handleMarkForReview}
                                disabled={currentQuestionIndex === questions.length - 1}
                                className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto"
                            > Marked For Review & Next

                            </button>

                            <button
                                onClick={handlePreviousQuestion}
                                disabled={currentQuestionIndex === 0}
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-2 sm:mb-0 mr-2 flex-1"
                            >
                                Previous
                            </button>
                            <button
                                onClick={handleSaveAndNext}
                                disabled={currentQuestionIndex === questions.length - 1}
                                className="py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600 mb-2 sm:mb-0 mr-2 flex-1"
                            >
                                Save & Next
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-2 sm:mb-0 flex-1 float-right"
                            >
                                Submit
                            </button>

                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}

'use client'

let answers = {};
let timer = null;

function handleAnswerSelect(questionId, selectedOption) {
    answers[questionId] = selectedOption;
}

function calculateTotalMarks(quiz) {
    let totalMarks = 0;
    quiz.questions.forEach(question => {
        if (answers[question.id] === question.answer) {
            totalMarks += 1;
        }
    });
    return totalMarks;
}

function startTimer(time) {
    let count = time;
    timer = setInterval(() => {
        count--;
        if (count <= 0) {
            clearInterval(timer);
            alert('Time is up!');
        }
        else{
            document.getElementById('timer').innerText = `Time left: ${count} seconds`;
        }
    }, 1000);
}

function handleSubmit(quiz) {
    clearInterval(timer);
    const totalMarks = calculateTotalMarks(quiz);
    // location.href = `/quiz/result?totalMarks=${totalMarks}&quizId=${quiz.id}`;
    window.location.href = `/quiz/result/${quiz.id}/${totalMarks}`;
}

export default function QuizPage({ params }) {
    const { id } = params || {};
    const quizzes = [
        {
            id: 1,
            title: "Quiz 1",
            time: 100,
            questions: [
                {
                    id: 1,
                    question: "What is the capital of France?",
                    options: ["Paris", "Berlin", "London", "Rome"],
                    answer: "Paris"
                },
                {
                    id: 2,
                    question: "Which planet is known as the Red Planet?",
                    options: ["Mars", "Venus", "Jupiter", "Saturn"],
                    answer: "Mars"
                }
            ]
        },
        {
            id: 2,
            title: "Quiz 2",
            time: 150,
            questions: [
                {
                    id: 1,
                    question: "What is the capital of Japan?",
                    options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
                    answer: "Tokyo"
                },
                {
                    id: 2,
                    question: "Who wrote 'Romeo and Juliet'?",
                    options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
                    answer: "William Shakespeare"
                }
            ]
        }
    ];

    const quiz = quizzes.find(q => String(q.id) === String(id));

    if (!quiz) {
        return <div>Quiz not found</div>;
    }

    startTimer(quiz.time);

    return (
        <main className="mt-10">
            <h1 className="text-4xl text-center mt-4">{quiz.title}</h1>
            <div className="text-lg text-center mt-4" id="timer">Time left: {quiz.time} seconds</div>
            <ul className="text-lg text-center mt-4">
                {quiz.questions.map((question) => (
                    <li key={question.id}>
                        <p>{question.question}</p>
                        <ul className="text-lg text-center">
                            {question.options.map((option, index) => (
                                <li key={index}>
                                    <label>
                                        <input 
                                            type="radio" 
                                            name={`question-${question.id}`} 
                                            value={option} 
                                            onChange={() => handleAnswerSelect(question.id, option)}
                                        />
                                        {option}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <br />
            <hr />
            <div className="flex justify-center">
                <button className="text-lg text-center mt-4" onClick={() => handleSubmit(quiz)}>Submit Answers</button>
            </div>
        </main>
    );
}

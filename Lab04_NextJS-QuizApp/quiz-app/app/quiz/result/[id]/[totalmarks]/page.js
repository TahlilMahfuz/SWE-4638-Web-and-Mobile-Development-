'use client'

export default function ResultPage({ params }) {
    const { totalmarks,id } = params;
    console.log(totalmarks);
    console.log(id);
    const quizzes = [
        {
            id: 1,
            title: "Quiz 1",
            time: 10,
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
            time: 15,
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

    return (
        <main className="mt-10">
            <h1 className="text-4xl text-center mt-4">{quiz.title}</h1>
            <p className="text-4xl text-center mt-4">You have got {totalmarks}</p>
            <p className="text-4xl text-center mt-4">.All the correct answers are given below.</p>
            <br/>
            <br/>
            <hr/>
            <div>
                <ul className="text-lg text-center mt-4">
                    {quiz.questions.map((question) => (
                        <li key={question.id}>
                            <p>{question.question}</p>
                            <p>{question.answer}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <br/>
            <br/>
            <hr/>
            <br/>
            <br/>
            <div className="flex justify-center">
            <h1>Go back to:</h1>
            </div>
            <div className="flex justify-center">
                <button onClick={() => window.location.href = '/'}>Main page</button><br/>
            </div>
            <div className="flex justify-center">
                <button onClick={() => window.location.href = '/quiz'}>Quizzes</button>
            </div>
        </main>
    );
}
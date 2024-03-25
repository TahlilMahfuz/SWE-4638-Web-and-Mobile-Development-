import Link from "next/link";

export default function QuizZ() {
    const quizzes = [
        {
            id: 1,
            title: "Quiz 1",
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

    return (
        <main className="mt-10">
            <ul>
                {quizzes.map((quiz) => (
                    <li className="text-4xl text-center mt-4" key={quiz.id}>
                         <Link href={`/quiz/${quiz.id}`}>{quiz.title}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}

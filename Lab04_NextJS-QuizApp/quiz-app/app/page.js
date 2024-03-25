import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center">
          Welcome to the Quiz App!
        </h1>
        <p className="text-lg text-center mt-4">
          Test your knowledge and have fun! 
        </p>
        <Link href="/quiz" className="">
          Start Quiz
        </Link>
      </div>
    </main>
  );
}
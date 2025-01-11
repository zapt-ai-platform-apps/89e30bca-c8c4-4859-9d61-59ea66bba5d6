import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    console.log('App component mounted');
  }, []);

  return (
    <div className="h-full flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <header className="w-full max-w-4xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-center">Welcome to EduConnect</h1>
        <p className="mt-2 text-center text-lg">
          Connecting students and educators for a better learning experience.
        </p>
      </header>
      <main className="flex-1 w-full max-w-4xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">For Students</h2>
            <p className="text-gray-700">
              Access a wealth of resources and connect with educators to enhance your learning journey.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600">
              Learn More
            </button>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">For Educators</h2>
            <p className="text-gray-700">
              Share knowledge and collaborate with students to make education more accessible.
            </p>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600">
              Get Started
            </button>
          </div>
        </div>
      </main>
      <footer className="w-full p-4 bg-gray-200 text-center text-sm">
        <p className="text-gray-600">
          Made on{' '}
          <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
            ZAPT
          </a>
        </p>
      </footer>
    </div>
  );
}
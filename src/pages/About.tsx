import React from 'react';
import { BookOpen, Code, Coffee } from 'lucide-react';

function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Me</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-8">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        I'm a Software Engineering student at FIAP, passionate about technology and innovation.
        My journey in tech started when I was a child and began studying .bat to prank my classmates, and I've been continuously learning and growing in this field ever since.
        </p>
        
        <p className="text-lg text-gray-700 dark:text-gray-300">
        Currently, I am focused on my studies in different programming languages to strengthen my logical foundation. I've learned that logic is essential, and I’m always eager to take on new challenges (having already overcome a few in college) and contribute to meaningful projects that make a difference.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What I Do</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <Code className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Development</h3>
          <p className="text-gray-600 dark:text-gray-300">
          Focused on back-end development, building robust and efficient server-side applications.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Learning</h3>
          <p className="text-gray-600 dark:text-gray-300">
          Constantly expanding my knowledge in software engineering and new technologies, I understand what the market demands.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <Coffee className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Problem Solving</h3>
          <p className="text-gray-600 dark:text-gray-300">
          I enjoy tackling complex problems and finding efficient solutions, and if you're open to it, we could play a game of chess.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
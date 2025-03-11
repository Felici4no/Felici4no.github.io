import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <img
        src="https://media.licdn.com/dms/image/v2/D4D03AQE96D4Gs5ECTw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721184527351?e=1747267200&v=beta&t=biLDKYJp3t_wDAliI_YS_wRdPAHIiWMiPxd7_g3K2wk"
        alt="Profile"
        className="w-48 h-48 rounded-full mb-8 object-cover shadow-lg"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Lucas Feliciano
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
        Software Engineering Student at FIAP | Passionate about creating innovative solutions and learning new technologies
      </p>
      <div className="flex gap-4">
        <Link
          to="/projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors"
        >
          View Projects <ArrowRight className="w-5 h-5" />
        </Link>
        <Link
          to="/contact"
          className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}

export default Home;
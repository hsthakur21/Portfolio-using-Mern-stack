import React from 'react';
import About from '../../Pages/About';
import Contact from '../../Pages/Contact';
import Services from '../../Pages/Services';

const Homepage = () => {
  return (
   <>
   <div>
   <div className="bg-gray-100 min-h-screen flex flex-col items-center pt-20 md:p-20">
      <header className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start bg-white p-4 rounded-lg shadow-md">
        <img
          src={require('../Assets/photo.jpeg')}
          alt="Profile"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto md:mx-0 md:mr-8"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mt-4 md:mt-0">Himanshu Thakur</h1>
          <p className="text-xl text-gray-600">Software Engineer</p>
          <p className="mt-2 text-gray-700">Passionate about building scalable software and innovative solutions.
          "Recent IT engineering graduate with a strong passion for technology and innovation. 
          Proficient in various programming languages including Python, Java, and Full stack Web development, with a
           keen interest in software development and network management. Dedicated to continuous learning
            and eager to apply technical skills in a professional environment. Enthusiastic team player with 
            a love for problem-solving and a passion for cricket, 
          which enhances my strategic thinking and collaboration abilities."
          </p>
          <br></br>
          <h3 className="text-xl font-bold mb-2">Experience</h3>
          <p>I completed a two-month internship focused on the MERN stack, where 
            I developed full-stack web applications, gaining hands-on experience with MongoDB, Express.js, 
            React, and Node.js. My work included building RESTful APIs, designing
             responsive UIs, and integrating front-end and back-end functionalities.</p>
        </div>
      </header>

      <section className="w-full max-w-4xl mx-auto mt-8 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap">
        <span className="bg-blue-500 text-white px-4 py-2 rounded-full m-2">Java</span>
          <span className="bg-green-500 text-white px-4 py-2 rounded-full m-2">Python</span>
          <span className="bg-yellow-500 text-white px-4 py-2 rounded-full m-2">Data structure</span>
          <span className="bg-red-500 text-white px-4 py-2 rounded-full m-2">Tailwind CSS</span>
          <span className="bg-purple-500 text-white px-4 py-2 rounded-full m-2">HTML</span>
          <span className="bg-pink-500 text-white px-4 py-2 rounded-full m-2">CSS</span>
          <span className="bg-indigo-500 text-white px-4 py-2 rounded-full m-2">JavaScript</span>
          <span className="bg-teal-500 text-white px-4 py-2 rounded-full m-2">Spring boot</span>
          <span className="bg-orange-500 text-white px-4 py-2 rounded-full m-2">Docker</span>
          <span className="bg-gray-500 text-white px-4 py-2 rounded-full m-2">Node.js</span>
          <span className="bg-blue-300 text-white px-4 py-2 rounded-full m-2">Express.js</span>
          <span className="bg-green-300 text-white px-4 py-2 rounded-full m-2">MongoDB</span>
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full m-2">React.js</span>
          <span className="bg-red-300 text-white px-4 py-2 rounded-full m-2">AWS</span>
          <span className="bg-purple-300 text-white px-4 py-2 rounded-full m-2">Redux</span>
          <span className="bg-purple-300 text-white px-4 py-2 rounded-full m-2">Linux</span>
          <span className="bg-purple-300 text-white px-4 py-2 rounded-full m-2">Time Management</span>
        </div>
      </section>

    <Services/>

    <About/>
    <Contact/>
    </div>
   </div>
   </>
  );
};

export default Homepage;


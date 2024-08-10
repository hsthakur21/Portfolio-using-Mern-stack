import React from 'react';

const About = () => {
 
  return (
    
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
        <div className="text-center mb-6">
          <img
            src={require('../Components/Assets/photo.jpeg')}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto"
          />
          <h2 className="text-2xl font-semibold mt-4">Himanshu Thakur</h2>
          <p className="text-gray-600">Software Engineer</p>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Professional Summary</h3>
            <p className="text-gray-700">
            A motivated and detail-oriented IT engineer with a strong 
            foundation in computer science principles and hands-on experience in programming, network
             management, and software development. Recently graduated with a Bachelor's degree in 
             Information Technology, equipped with proficiency in languages like Python, Java, and Full stack Web development.
              Adept at troubleshooting, problem-solving, and working collaboratively within a team environment. Eager to contribute 
            to a dynamic tech team while continuously expanding skill sets in a professional setting..
            </p>
          </div>
          <h3 className="text-xl font-bold mb-2">Experience</h3>
          <p>I completed a two-month internship focused on the MERN stack, where 
            I developed full-stack web applications, gaining hands-on experience with MongoDB, Express.js, 
            React, and Node.js. My work included building RESTful APIs, designing
             responsive UIs, and integrating front-end and back-end functionalities.</p>
          <div>
            <h3 className="text-xl font-bold mb-2">Personal Interests</h3>
            <p className="text-gray-700">
              In my free time, I enjoy hiking, reading tech blogs, and contributing to open-source projects. I also have a keen interest in  Web devlopment 
              artificial intelligence and machine learning.
            </p>
            <p className="text-gray-700">
              
              "Passionate about cricket, I enjoy playing the game regularly as it sharpens my strategic thinking and teamwork skills. 
                The sport has taught me resilience, adaptability, and the importance of staying focused under pressure."
                <h2>I have played U19 cricket for board</h2>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

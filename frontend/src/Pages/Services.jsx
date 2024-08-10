import React from 'react'

const Services = () => {
  return (
   <>
    <section className="w-full max-w-4xl mx-auto mt-8 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="space-y-4">
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">
              Signup Login web page using Mern stack
            </h3>
            <p className="text-gray-700">"Built a user authentication web page using the 
              MERN stack (MongoDB, Express.js, React, and Node.js) to handle sign-up and login
               functionalities. The application securely manages user data and sessions, 
              providing a responsive and efficient user experience.".</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Dynamic music web page </h3>
            <p className="text-gray-700">"Created a dynamic music web page using HTML, CSS, and 
              JavaScript, featuring interactive elements like playlists, audio controls, and song 
              search functionality. The page allows users to play, pause, and navigate through tracks, 
              providing an engaging and user-friendly experience.".</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">A full-stack food delivery website </h3>
            <p className="text-gray-700">"Developed a full-stack food delivery website using HTML, CSS,
               and JavaScript for the front-end, with SQL for database management. The site enables users to browse menus, 
              place orders, and track deliveries, offering a seamless and interactive user experience.".</p>
              <a href='https://himanshuthakur.netlify.app/'>https://himanshuthakur.netlify</a>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Full stack E-commerce Website </h3>
            <p className="text-gray-700">A full stack e-commerce website using the MERN stack 
              (MongoDB, Express, React, Node.js) includes user authentication with hashed passwords
               for security, a dynamic front-end for product browsing and cart management, and a back-end API 
               for processing orders and handling data. The application features an admin panel for managing products,
                users, and orders, while ensuring secure access through role-based authentication. The site uses MongoDB
                 for data storage, Express and Node.js for server-side 
              logic, and React for a responsive and interactive user interface.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Detecting Segmenting and classifying Buildings
               and other elements using Remote sensing </h3>
            <p className="text-gray-700">"Developed a Python-based system for detecting, segmenting,
               and classifying buildings and other elements using remote sensing data. The project leverages 
               image processing and machine learning techniques to analyze satellite 
              imagery for accurate identification and categorization of structures.".</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Flutter Fuel App UI</h3>
            <p className="text-gray-700">"Developed a Fuel App UI using Flutter,
               showcasing a clean and user-friendly interface for monitoring fuel 
               levels and locating nearby gas stations. The design emphasizes ease of
               use with intuitive navigation and responsive elements."</p>
          </div>
        </div>
      </section>
   </>
  )
}

export default Services
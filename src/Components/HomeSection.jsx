import React from 'react'
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import HomeImg from "../assets/HomeImg.png"

function HomeSection() {
  return (
    <section id="home" className="relative min-h-screen flex align-middle items-center justify-center self-center overflow-hidden  py-16 md:py-0 text-white">
      
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 right-10 w-48 h-48 bg-blue-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 z-20 ">
        <div className="flex flex-col md:flex-row md:ml-24 items-center justify-between">
          
          <motion.div
            className="md:w-3/5 text-center md:text-left mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-blue-400 text-lg font-semibold mb-2">👋 Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Lakshay Bansal</h1>

            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                <Typewriter
                  words={['Full Stack Developer', 'MERN Stack Developer', 'Frontend Developer', 'AI/ML Enthusiast','DSA Lover']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>
            <p className="text-gray-100 text-lg mb-6 max-w-xl">
            I build fast, modern, and accessible web applications by leveraging cutting-edge technologies, intuitive design principles, and best development practices to deliver high-performance digital experiences.


            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition duration-300"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-600/20 font-semibold rounded-lg transition duration-300"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          {/* Profile Circle */}
          <motion.div
            className="md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl border-4 border-black">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 animate-pulse opacity-40 blur-xl"></div>
              <img
                src={HomeImg}
                alt="Profile"
                className="absolute rounded-full object-cover w-64 h-64 md:w-80 md:h-80"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


export default HomeSection
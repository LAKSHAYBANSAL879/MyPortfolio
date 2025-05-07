import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiGmail, SiLeetcode, SiLinkedin, SiMaildotcom, } from 'react-icons/si';
import { FaPersonBooth } from 'react-icons/fa';
import { BookCheck, Code, MapPin } from 'lucide-react';
import Programming from "../assets/bg.png"

function About() {
  const socialLinks = [
    { icon: <SiGithub size={24} />, href: "https://github.com/LAKSHAYBANSAL879", label: "GitHub" },
    { icon: <SiLinkedin size={24} />, href: "https://www.linkedin.com/in/lakshay-bansal-534184251/", label: "LinkedIn" },
    { icon: <SiLeetcode size={24} />, href: "https://leetcode.com/u/lakshaybansal879/", label: "Leetcode" },
    { icon: <SiMaildotcom size={24} />, href: "mailto:lakshaybansal879@gmail.com", label: "Email" },
  ];

  return (
    <section id="about" className="relative z-20 min-h-screen flex align-middle items-center justify-center self-center  py-16 md:py-0 text-white">
      <div className="container mx-auto px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            className="md:w-3/5 order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2">Full Stack Developer & Problem Solver</h3>
              <p className="text-gray-100 text-lg leading-relaxed">
                I am a passionate full stack developer with expertise in building modern web applications. 
                With a strong foundation in both frontend and backend technologies, I enjoy creating seamless 
                user experiences that are both functional and visually appealing.
              </p>
              <p className="text-gray-300 leading-relaxed">
              My programming journey began in university, where I developed a strong passion for building software and solving complex problems. Since then, I’ve consistently honed my skills—adapting to the ever-evolving tech landscape while deepening my understanding of data structures and algorithms. I take pride in writing clean, maintainable code and following best practices to create scalable, efficient, and reliable applications.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 text-gray-300">
                <div className="flex items-center space-x-3">
                  {/* <div className="w-3 h-3 bg-blue-500 rounded-full"></div> */}
                  <span className='flex gap-3 align-middle items-center'><strong><Code className='text-blue-500'/></strong>Lakshay Bansal</span>
                </div>
                <div className="flex items-center space-x-3">
                  {/* <div className="w-3 h-3 bg-purple-500 rounded-full"></div> */}
                  <span className='flex gap-3 align-middle items-center'><strong><SiGmail className='text-blue-500'/></strong>lakshaybansal879@gmail.com </span>
                </div>
                <div className="flex items-center space-x-3">
                  {/* <div className="w-3 h-3 bg-blue-500 rounded-full"></div> */}
                  <span className='flex gap-3 align-middle  items-center'><strong><MapPin className='text-blue-500'/></strong>Delhi, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  {/* <div className="w-3 h-3 bg-purple-500 rounded-full flex flex-row"></div> */}
                  <span className='flex gap-3 items-center align-middle'><strong><BookCheck className='text-blue-500'/></strong>Available For Freelance & Full-time</span>
                </div>
              </div>
              <div className='flex gap-5'>
              <a 
                href="https://drive.google.com/file/d/1AdFBrQGp0xf00wkq2rdphE_ZkjZjC8e8/view?usp=sharing" 
                target='_blank'
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600  text-white font-medium rounded-lg transition duration-300 inline-block shadow-lg shadow-blue-500/20"
              >
                Download Resume
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-blue-500 border-2 bg-transparent hover:bg-blue-500/20 text-blue-500 font-medium rounded-lg transition duration-300 inline-block shadow-lg shadow-blue-500/20"
              >
                Let's Connect
              </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/5 order-1 md:order-2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div> */}
              <div className="relative  overflow-hidden  shadow-2xl ">
                <img 
                  src={Programming}
                  alt="Developer Profile" 
                  className="w-full h-auto bg-transparent"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">Fresher</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Social Links */}
        <motion.div
          className="mt-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-xl font-medium text-white mb-6">Connect With Me</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => {
              
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  aria-label={social.label}
                >
                <span>{social.icon}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
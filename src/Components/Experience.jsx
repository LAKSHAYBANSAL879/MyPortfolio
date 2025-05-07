import React from 'react'
import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Web Developer Intern",
      company: "Vivusoft Technologies Pvt Ltd –",
      period: "JULY 2024 - AUGUST 2024",
      description: "Worked on building and enhancing web applications, ensuring they are robust, user-friendly, and scalable.",
      highlights: [
        "Reduced page load time by 40% through code optimization and enchance the SEO of website",
        "Tackled various challenges head-on by identifying and resolving bugs to improve the overall performance and functionality of projects.",
        "Mastered the Webflow tool to create responsive and visually appealing web designs"
      ]
    },
   
  ];
  
  return (
    <section id="experience" className="pb-20 pt-4 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 2, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 z-20">My Experience</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>
        
        <div className="relative">
          
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>
          
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                <div className="md:w-1/2 mb-6 md:mb-0 px-4">
                  <div className={`md:${index % 2 === 0 ? 'text-right' : 'text-left'} relative`}>
                    <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 
                      ${index % 2 === 0 ? 'right-0 translate-x-16' : 'left-0 -translate-x-16'} 
                      w-12 h-0.5 bg-gray-700"></div>
                    <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 
                      ${index % 2 === 0 ? 'right-0 translate-x-12' : 'left-0 -translate-x-12'} 
                      w-4 h-4 rounded-full bg-blue-500"></div>
                    <span className="text-blue-400 font-medium block mb-2">{exp.period}</span>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                </div>
                
                
                <div className="md:w-1/2 px-4">
                  <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300">
                    <p className="text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <ul className="text-gray-400">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start mb-2">
                          <div className="text-blue-500 mr-2 mt-1">•</div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience
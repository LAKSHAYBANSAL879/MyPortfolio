import React from 'react'
import { motion } from 'framer-motion';

function EducationSection() {
    const education = [
      {
        id: 1,
        degree: "B.Tech in Computer Science",
        institution: "Maharaja Agrasen Institute of Technology, Delhi",
        period: "2022 - 2026",
        description: "Specialized in Web Technologies and AIML",
        achievements: [
            "2nd Position in StackHack2.0, PAN India Hackathon",
            
            "1st Position in Frontend Fiesta, TNM MAIT",
            
            "Runner-Up in Bidding Loop, DSA Event, TNM MAIT"
        ]
      },
      {
        id: 2,
        degree: "Senior Secondary Studies",
        institution: "Agarwal Public School, Faridabad",
        period: "2020 - 2022",
        description: "Focused on Building foundation in science related feild",
        achievements: [
          "School topper with 95% overall",
        ]
      },
    ];
    
    return (
      <section id="education" className="py-20  z-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Education</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {education.map((item, index) => (
              <motion.div 
                key={item.id}
                className="mb-12 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                  <div className="md:w-1/3 bg-slate-800 p-6 flex flex-col justify-center">
                    <span className="text-blue-400 font-medium block mb-2">{item.period}</span>
                    <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                    <p className="text-gray-400">{item.institution}</p>
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <p className="text-gray-300 mb-4">
                      {item.description}
                    </p>
                    <ul className="text-gray-400">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start mb-2">
                          <div className="text-blue-500 mr-2 mt-1">•</div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }
export default EducationSection
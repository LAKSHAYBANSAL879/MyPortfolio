import React from 'react'
import { motion } from 'framer-motion';
import { SiCss3, SiExpress, SiGit, SiHtml5, SiJavascript, SiLeetcode, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiSystem76, SiTailwindcss, SiWebflow } from 'react-icons/si';
import { Code } from 'lucide-react';

function Skills() {
    const skillCategories = [
      {
        name: "Frontend",
        skills: [
          { name: "HTML5", icon: <SiHtml5 />, level: 95 },
          { name: "CSS3", icon: <SiCss3 />, level: 90 },
          { name: "JavaScript", icon: <SiJavascript />, level: 92 },
          { name: "React", icon: <SiReact />, level: 95 },
          { name: "Next", icon: <SiNextdotjs />, level: 70 },
          { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
          { name: "Webflow", icon: <SiWebflow />, level: 85 },

        ]
      },
      {
        name: "Backend",
        skills: [
          { name: "Node.js", icon: <SiNodedotjs />, level: 85 },
          { name: "Express.js", icon: <SiExpress />, level: 92 },
          { name: "MongoDB", icon: <SiMongodb />, level: 88 },
          { name: "MySql", icon: <SiMysql />, level: 78 },
          { name: "Python", icon: <SiPython />, level: 75 },
        ]
      },
      {
        name: "Tools & Others",
        skills: [
         { name: "DSA",icon:<SiLeetcode/> ,level: 90 },
          { name: "Git", icon:<SiGit/>,level: 88 },
          { name: "OOPS",icon:<Code/>, level: 80 },
          { name: "Operating System",icon:<SiSystem76/>, level: 75 },
          { name: "SEO", level: 80 },
          { name: "RESTful APIs", level: 90 },
          

        ]
      }
    ];
    
    return (
      <section id="skills" className="pb-10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Technical Skills</h2>
            <div className="w-28 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div 
                key={category.name}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-700">{category.name}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (catIndex * 0.1) + (skillIndex * 0.1) }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-300">
                          {skill.icon && <span className="text-blue-400 text-xl mr-2">{skill.icon}</span>}
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-sm text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: (catIndex * 0.1) + (skillIndex * 0.1) }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

export default Skills
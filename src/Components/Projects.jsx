import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("featured");
  const timelineRef = useRef(null);
  
  const featuredProjects = [
    {
      id: 1,
      title: "Alum Link",
      year: "2025",
      category: "web",
      image: "/alumLink.png",
      description: "Alum Link is a full-featured MERN stack web application designed for alumni networking. It combines a job portal, blog system, real-time one-to-one chat, and donation platform. The project includes intelligent systems like resume parsing, skill matching, and blog recommendation using NLP, along with real-time notifications, secure login via Google OAuth, and interactive dashboards tailored to user roles.",
      technologies: ["UI/UX","React", "Node.js", "MongoDB", "Express", "Stripe","Cloudinary","Socket.io","Python","Scklit","Material-ui","TailwindCSS"],
      link: "https://alum-link-beige.vercel.app",
      github: "https://github.com/LAKSHAYBANSAL879/AlumLink"
    },
    {
      id: 2,
      title: "Cinema Trails",
      year: "2024",
      category: "web",
      image: "/cinemaTrails.png",
      description: "An online platform for seamless movie ticket bookings, offering features like movie exploration, theater showtimes, and easy ticket purchasing.",
      technologies: ["ReactJS", "NodeJs", "MongoDb","Chartjs","Express","JWT","Stripe","Framer-Motion","Responsive Design principles"],
      link: "https://fastidious-selkie-4d4978.netlify.app/",
      github: "https://github.com/LAKSHAYBANSAL879/Cinema-Trails-Final"
    },
    {
      id: 3,
      title: "Face Recongnition Attendence System",
      year: "2024",
      category: "python",
      image: "/faceReco.png",
      description: "A real-time attendance system using facial recognition powered by OpenCV and the face_recognition library. This project captures live webcam input, detects and recognizes known faces, and logs attendance with timestamps while avoiding duplicate entries within a short time frame. It also supports automatic encoding of known faces from a designated folder and overlays bounding boxes with names for visual feedback.",
      technologies: ["Python", "TensorFlow", "Sklearn", "OpenCv"],
      link: "#",
      github: "https://github.com/LAKSHAYBANSAL879/Face-Recognition-opencv"
    },
    {
      id: 4,
      title: "Ecommerce website",
      year: "2024",
      category: "web",
      image: "/ecom.png",
      description: "A feature-rich e-commerce platform built to provide a seamless shopping experience for users and efficient management tools for administrators. The application includes user authentication, product listings with filters and categories, cart and checkout functionality, and secure payment integration using Razorpay..",
      technologies: ["React", "Express", "Node", "Chart.js","Razorpay","TailwindCSS","Redux"],
      link: "https://spiffy-conkies-f5c1f1.netlify.app/",
      github: "https://github.com/LAKSHAYBANSAL879/Flipkartclone2"
    }
  ];
  
  const webProjects = [
    {
      id: 5,
      title: "Real Estate Finder",
      category: "web",
      image: "/ss1.png",
      description: "Hotel booking website with features like User authentication and authorization,Hotel discovery with detailed information, Booking functionality with reservation management,Searching hotel based on name and location,Easily add new property",
      technologies: ["React", "Node.js", "MongoDB", "Multer","react-crousel"],
      link: "https://65a568e3a2c4040e9f2344fd--jade-pixie-827bf7.netlify.app/",
      github: "https://github.com/LAKSHAYBANSAL879/Hotel-booking-webiste"
    },
    {
      id: 6,
      title: "Food Ordering Website",
      category: "web",
      image: "/tasty.png",
      description: "Welcome to TastyTraverse, a delightful MERN stack food ordering website that brings the joy of exploring and ordering from various restaurants right to your fingertips.",
      technologies: ["React", "Node.js", "Tailwind CSS", "Stripe"],
      link: "https://65a568e3a2c4040e9f2344fd--jade-pixie-827bf7.netlify.app/",
      github: "#"
    },
    {
      id: 7,
      title: "JeevanDan",
      category: "web",
      image: "/jeevandan.png",
      description: "Introducing JEEVANDAN, an innovative web application designed to streamline blood donation and distribution in the healthcare sector. With a focus on creating a seamless connection between donors, blood banks, and those in need, BloodLink aims to make a significant impact on the efficiency and speed of blood group distribution.",
      technologies: ["CSS","JAVASCRIPT","HTML5","MongoDB","Express","UI/UX"],
      link: "https://blood-bank-managment-cvsv-6zzc9hrkk-lakshaybansal879s-projects.vercel.app/",
      github: "https://github.com/LAKSHAYBANSAL879/BLOOD-BANK-MANAGMENT"
    }
  ];
  
  const pythonProjects = [
    {
      id: 8,
      title: "Movie Recommendation System",
      category: "python",
      image: "/py1.png",
      description: "A Python-based based app using streamlit and machine learning to get recommended movies based on cosine-similarity algorithm.",
      technologies: ["Python", "ML", "Sklearn", "Streamlit","Flask","Cosine-Similarity"],
      link: "https://mllabprojectmovie.streamlit.app/",
      github: "https://github.com/LAKSHAYBANSAL879/MlLABPROJECT/tree/main/mlLabProject"
    },
    {
      id: 9,
      title: "Superstore Analysis",
      category: "python",
      image: "/py2.png",
      description: "Superstore analysis using pyhton and Tabelau for various parameters and detailed report",
      technologies: ["Python", "NumPy","Tableau"],
      link: "#",
      github: "#"
    },
    {
      id: 10,
      title: "Spam Email Classifier",
      category: "python",
      image: "/py3.png",
      description: "A python tool use to classify spam and ham email using Logistic Regression classifier, TFID vectorizer and sklearn libraries.",
      technologies: ["Python", "Pandas", "Logistic regression", "Matplotlib"],
      link: "#",
      github: "https://github.com/LAKSHAYBANSAL879/ML-projects/blob/main/MailSpamClassifier.ipynb"
    }
  ];
  
  const categories = [
    { id: "featured", name: "Featured Projects" },
    { id: "web", name: "Web Applications" },
    { id: "python", name: "Python Projects" },
  ];
  
  const getActiveProjects = () => {
    switch (activeCategory) {
      case "web":
        return webProjects;
      case "python":
        return pythonProjects;
      default:
        return webProjects;
    }
  };
  
  useEffect(() => {
   
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scale-110");
          }
        });
      },
      { threshold: 0.5 }
    );
    
    if (timelineRef.current) {
      const dots = timelineRef.current.querySelectorAll(".timeline-dot");
      dots.forEach((dot) => observer.observe(dot));
    }
    
    return () => {
      if (timelineRef.current) {
        const dots = timelineRef.current.querySelectorAll(".timeline-dot");
        dots.forEach((dot) => observer.unobserve(dot));
      }
    };
  }, []);
  
  return (
    <section id="projects" className="pb-20 pt-4">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">My Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            A timeline of my major projects and selected works across different technologies.
          </p>
        </motion.div>
        
        
        <div className="mb-24" ref={timelineRef}>
          <h3 className="text-2xl font-bold text-white mb-20 text-center">Featured Project Timeline</h3>
          
          <div className="relative">
            
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/30"></div>
            
           
            <div className="space-y-24">
              {featuredProjects.map((project, index) => (
                <div key={project.id} className={`relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                 
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-blue-900 timeline-dot transition-transform duration-500 ease-out shadow-lg shadow-blue-500/50"></div>
                  
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-16 bg-blue-900/80 px-4 py-1 rounded-full text-white font-bold text-sm backdrop-blur-sm">
                    {project.year}
                  </div>
                  
                  
                  <motion.div 
                    className={`flex flex-col md:flex-row items-center ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    } md:gap-8`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                      <div className="relative overflow-hidden rounded-lg shadow-xl shadow-blue-900/20 group">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-4">
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors duration-300"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    
                    <div className="w-full md:w-1/2 text-left md:text-inherit">
                      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-gray-200 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4 justify-start md:justify-normal">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-800/50 backdrop-blur-sm rounded-lg p-1 border border-gray-700">
            {categories.slice(1).map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
       
        {activeCategory !== "featured" && (
          <motion.h3
            className="text-2xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={activeCategory}
          >
            {categories.find(cat => cat.id === activeCategory)?.name}
          </motion.h3>
        )}
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {getActiveProjects().map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Projects;
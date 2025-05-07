import React, { useRef, useState } from 'react'
import  {motion}  from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import * as emailjs from '@emailjs/browser';
import { SiLeetcode } from 'react-icons/si';

function Contact() {
    const formRef=useRef(null);
    
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    
    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        emailjs
          .sendForm(
            'service_ewumrwj',          
            'template_2er001q',          
            formRef.current,            
            'Sx4o6vx7xG2hKlQda' ,
            {
                to_email:"lakshaybansal879@gmail.com"
            }        
          )
          .then(
            (result) => {
              console.log(result.text);
              setIsSubmitting(false);
              setSubmitStatus('success');
              e.target.reset();
              setTimeout(() => setSubmitStatus(null), 5000);
            },
            (error) => {
              console.error(error.text);
              setIsSubmitting(false);
              setSubmitStatus('error');
            }
          );
      };
    
    
    return (
      <section id="contact" className="pb-16 pt:4 md:pb-24">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to contact me!
            </p>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 shadow-lg h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">Phone</h4>
                      <p className="text-gray-400">+91 9205869712</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                      <p className="text-gray-400">lakshaybansal879@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                      <p className="text-gray-400">Delhi, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-medium text-white mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/LAKSHAYBANSAL879" className="bg-gray-700 hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-300">
                      <FaGithub className="h-5 w-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/lakshay-bansal-534184251/" className="bg-gray-700 hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-300">
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                    <a href="https://leetcode.com/u/lakshaybansal879/" className="bg-gray-700 hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-300">
                      <SiLeetcode className="h-5 w-5" />
                    </a>
                    <a href="mailto:lakshaybansal879@gmail.com" className="bg-gray-700 hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-300">
                      <FaEnvelope className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg mb-6">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                <form onSubmit={sendEmail} ref={formRef}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <input type="hidden" name="to_email" value="lakshaybansal879@gmail.com" />
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="from_name"
                        required
                        className="w-full bg-slate-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                      
                        required
                        className="w-full bg-slate-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
             
                      required
                      className="w-full bg-slate-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      className="w-full bg-slate-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

export default Contact
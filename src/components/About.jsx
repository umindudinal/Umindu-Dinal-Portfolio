import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'
import { FaGraduationCap, FaCode, FaLaptopCode, FaCheck, FaUser, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa'

const About = () => {
  return (
    <section 
      id='about'
      className='py-20 lg:py-24 bg-dark-200 relative overflow-hidden'
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className='container mx-auto px-6 max-w-6xl relative z-10'>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className='text-3xl sm:text-4xl font-extrabold text-white mb-4'>
            About <span className='text-gradient'>Me</span>
          </h2>
          <p className='text-gray-400 text-base sm:text-lg leading-relaxed'>
            Passionate IT Undergraduate & Multi-Disciplinary Software Developer committed to crafting scalable web systems, APIs, mobile apps, and intelligent solutions.
          </p>
        </div>

        {/* Content 2-Column Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mx-auto'>
          
          {/* Left Column - Photo & Highlights */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='lg:col-span-5 relative space-y-6'
          >
            {/* Profile Image Frame */}
            <div className="relative rounded-3xl overflow-hidden glass-panel p-3 border-purple/30 shadow-2xl">
              <img 
                src={assets.aboutProfile} 
                alt="Umindu Dinal" 
                className='w-full h-auto rounded-2xl'
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark-100/80 via-transparent to-transparent rounded-2xl pointer-events-none" />
              
              {/* Floating Highlight Box */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple/20 flex items-center justify-center text-purple text-lg shrink-0">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">NDT in Information Technology</p>
                    <p className="text-sm font-bold text-white">Institute of Technology University of Moratuwa ( ITUM )</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Profile Summary Badge Box */}
            <div className="glass-panel rounded-2xl p-5 border-dark-400/50 space-y-3">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-dark-400/40">
                <span className="text-gray-400 flex items-center gap-1.5"><FaUser className="text-purple" /> Name:</span>
                <span className="text-white font-semibold">Umindu Dinal</span>
              </div>
              <div className="flex items-center justify-between text-xs pb-2 border-b border-dark-400/40">
                <span className="text-gray-400 flex items-center gap-1.5"><FaGraduationCap className="text-purple" /> Education:</span>
                <span className="text-white font-semibold">ITUM (University of Moratuwa)</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400 flex items-center gap-1.5"><FaMapMarkerAlt className="text-purple" /> Location:</span>
                <span className="text-white font-semibold">Polonnaruwa, Sri Lanka</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column - Text Narrative & Key Pillars */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='lg:col-span-7 space-y-8'
          >
            {/* Developer Story Box */}
            <div className='glass-panel rounded-2xl p-8 border-dark-400/50 space-y-4'>
              <h3 className='text-2xl font-bold text-white flex items-center gap-3'>
                <span className="w-2 h-7 bg-purple rounded-full inline-block"></span>
                My Technical Background
              </h3>
              <p className='text-gray-300 leading-relaxed text-base'>
                I am an IT Undergraduate at <strong className="text-white">ITUM (University of Moratuwa)</strong>, specializing in software engineering, full-stack web development, AI computer vision, and embedded systems.
              </p>
              <p className='text-gray-300 leading-relaxed text-base'>
                My skill set covers building web & mobile apps with <strong className="text-purple">React 19, Flutter & Tailwind CSS</strong>, robust backend APIs using <strong className="text-purple">Spring Boot 3, Java 21, Node.js & MySQL</strong>, and C# .NET desktop software.
              </p>
              <p className='text-gray-300 leading-relaxed text-base'>
                I also engineer AI computer vision models (<strong className="text-purple">YOLOv8, OpenCV, TensorFlow</strong>) and embedded microcontroller automation (<strong className="text-purple">ATmega32, Embedded C & Proteus</strong>).
              </p>
            </div>

            {/* 4 Feature Cards Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {aboutInfo.map((data, index) => {
                const IconComp = data.icon;
                return (
                  <motion.div 
                    key={index} 
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className='glass-panel rounded-2xl p-5 border-dark-400/50 hover:border-purple/40 transition-colors'
                  >
                    <div className={`${data.color} text-3xl mb-3`}>
                      <IconComp />
                    </div>
                    <h4 className='text-lg font-bold text-white mb-1.5'>{data.title}</h4>
                    <p className='text-gray-400 text-xs sm:text-sm leading-relaxed'>{data.description}</p>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
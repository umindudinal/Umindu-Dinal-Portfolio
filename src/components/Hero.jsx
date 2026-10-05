import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { assets, heroStats } from '../assets/assets'
import { FaArrowRight, FaDownload, FaReact, FaServer, FaCode, FaGithub, FaLinkedin, FaMicrochip } from 'react-icons/fa'

const titles = [
  "Mobile App & Systems Developer",
  "Full-Stack Software Engineer",
  "AI & Deep Learning Developer",
  "Backend & Cloud API Developer"
];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index % titles.length];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setSubIndex((v) => v + 1);
        if (subIndex >= current.length) {
          setDeleting(true);
        }
      } else {
        setSubIndex((v) => v - 1);
        if (subIndex <= 0) {
          setDeleting(false);
          setIndex((v) => (v + 1) % titles.length);
        }
      }
      setText(current.substring(0, subIndex));
    }, deleting ? 35 : 75);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <section 
      id='home'
      className='min-h-screen flex items-center pt-28 pb-16 lg:pt-32 lg:pb-20 bg-radial-glow relative overflow-hidden'
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-purple/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-pink/15 rounded-full blur-3xl pointer-events-none" />

      <div className='container mx-auto px-6 max-w-6xl relative z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 w-full'>
          
          {/* Left Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className='lg:w-7/12 text-left'
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border-purple/30 mb-5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs md:text-sm font-medium text-gray-200 tracking-wide">
                Available for Freelance & Opportunities
              </span>
            </div>

            {/* Main Headline */}
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight'>
              Hi, I'm <span className='text-gradient'>Umindu Dinal</span>
            </h1>
            
            {/* Dynamic Typewriter Title */}
            <div className="min-h-12 mb-5 flex items-center">
              <h2 className='text-2xl sm:text-3xl font-semibold text-gray-300'>
                {text}
                <span className="ml-1 border-r-2 border-purple animate-pulse inline-block h-7"></span>
              </h2>
            </div>

            {/* Introduction Bio */}
            <p className='text-gray-300 text-base md:text-lg mb-7 max-w-2xl leading-relaxed'>
              Information Technology Undergraduate at <strong className="text-white">ITUM (University of Moratuwa)</strong>. Specializing in Full-Stack Web Architecture, Spring Boot REST APIs, AI & Computer Vision, Desktop Software, and Embedded IoT Systems.
            </p>

            {/* CTA Buttons & Social Links */}
            <div className='flex flex-wrap items-center gap-3.5 mb-9 sm:mb-11'>
              <a 
                href="#projects" 
                className='px-6 py-3.5 bg-linear-to-r from-purple to-pink rounded-xl font-semibold text-white shadow-lg shadow-purple/25 hover:shadow-purple/40 hover:scale-102 transition duration-300 flex items-center gap-2 text-sm sm:text-base'
              >
                <span>Explore My Work</span>
                <FaArrowRight className='text-sm' />
              </a>

              <a 
                href="/cv.pdf" 
                download="Umindu_Dinal_CV.pdf"
                className='px-6 py-3.5 glass-panel border-purple/30 rounded-xl font-semibold text-white hover:border-purple/60 hover:bg-purple/20 transition duration-300 flex items-center gap-2 text-sm sm:text-base group'
                title="Download CV"
              >
                <FaDownload className='text-purple group-hover:translate-y-0.5 transition-transform' />
                <span>Download CV</span>
              </a>

              <a 
                href="#contact" 
                className='px-6 py-3.5 glass-panel rounded-xl font-semibold text-gray-200 hover:text-white hover:border-purple/50 hover:bg-dark-300 transition duration-300 text-sm sm:text-base'
              >
                Contact Me
              </a>

              <div className="flex items-center gap-2.5 sm:ml-2">
                <a 
                  href="https://github.com/umindudinal" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 rounded-xl glass-panel flex items-center justify-center text-gray-300 hover:text-purple hover:border-purple/40 transition duration-300 text-xl"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/umindu-dinal-212688375/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 rounded-xl glass-panel flex items-center justify-center text-gray-300 hover:text-purple hover:border-purple/40 transition duration-300 text-xl"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Stats Counter Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-xl">
              {heroStats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div key={idx} className="glass-panel p-3.5 sm:p-4 rounded-xl border-dark-400/50">
                    <div className="flex items-center gap-2 mb-1">
                      <IconComponent className="text-purple text-sm" />
                      <span className="text-xl md:text-2xl font-bold text-white">{stat.value}</span>
                    </div>
                    <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
                  </div>
                );
              })}
            </div>

          </motion.div>

          {/* Right Profile Column with Animated Floating Badges */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className='lg:w-5/12 flex justify-center relative'
          >
            <div className='relative w-72 h-72 sm:w-84 sm:h-84 lg:w-96 lg:h-96'>
              
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-linear-to-tr from-purple via-pink to-blue blur-2xl opacity-30 animate-pulse"></div>

              {/* Profile Image Frame */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-3xl overflow-hidden border-2 border-purple/30 shadow-2xl p-2 bg-dark-200"
              >
                <img 
                  src={assets.profileImg} 
                  alt="Umindu Dinal Profile" 
                  className="w-full h-full object-cover rounded-2xl" 
                />
              </motion.div>

              {/* Floating Badge 1: React 19 */}
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 glass-panel px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl flex items-center gap-2.5 shadow-xl border-purple/30 z-20"
              >
                <FaReact className="text-cyan text-xl animate-spin-slow" />
                <div>
                  <p className="text-xs font-bold text-white">React 19 & Tailwind 4</p>
                  <p className="text-[10px] text-gray-400">Frontend Stack</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: SpringBoot */}
              <motion.div 
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 glass-panel px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl flex items-center gap-2.5 shadow-xl border-emerald-500/30 z-20"
              >
                <FaServer className="text-emerald-400 text-lg" />
                <div>
                  <p className="text-xs font-bold text-white">SpringBoot 3 & Java 21</p>
                  <p className="text-[10px] text-gray-400">Backend REST API</p>
                </div>
              </motion.div>

              {/* Floating Badge 3: AI & Embedded IoT */}
              <motion.div 
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 -left-4 sm:bottom-10 sm:-left-6 glass-panel px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl flex items-center gap-2 shadow-xl border-purple/30 z-20"
              >
                <FaMicrochip className="text-purple text-base" />
                <div>
                  <p className="text-xs font-bold text-white">AI Vision & Embedded IoT</p>
                  <p className="text-[10px] text-gray-400">YOLOv8, OpenCV & ATmega32</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
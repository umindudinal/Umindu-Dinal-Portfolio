import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowUp, FaHeart, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='bg-dark-100 border-t border-dark-400/50 py-12 relative z-10'>
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className='container mx-auto px-6 max-w-6xl relative z-10'>
        
        {/* Main Footer Grid */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-dark-400/40'>
          
          {/* Brand & Bio & Direct Contacts */}
          <div className='text-center md:text-left space-y-3'>
            <Link to="/" onClick={scrollToTop} className='text-2xl font-bold text-white tracking-wide inline-block'>
              Umindu<span className='text-gradient'>Dinal</span>
            </Link>
            <p className='text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md mx-auto md:mx-0'>
              Full-Stack & Systems Developer. NDT Information Technology Undergraduate at Institute of Technology, University of Moratuwa (ITUM).
            </p>
            {/* Quick Contact Links */}
            <div className='pt-1 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 text-xs text-gray-400'>
              <a href="mailto:umindudinal818@gmail.com" className="hover:text-purple transition flex items-center gap-1.5">
                <FaEnvelope className="text-purple" /> umindudinal818@gmail.com
              </a>
              <span className="hidden sm:inline text-gray-600">•</span>
              <a href="https://wa.me/94779648818" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                <FaPhone className="text-emerald-400" /> +94 77 964 8818
              </a>
            </div>
          </div>

          {/* Social Links & Back To Top */}
          <div className='flex flex-col sm:flex-row items-center gap-4 shrink-0'>
            <div className='flex items-center gap-3'>
              <a 
                href="https://github.com/umindudinal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl glass-panel border-dark-400 flex items-center justify-center text-gray-300 hover:text-purple hover:border-purple/50 hover:bg-purple/20 transition duration-300 text-base"
                title="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/umindu-dinal-212688375/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl glass-panel border-dark-400 flex items-center justify-center text-gray-300 hover:text-purple hover:border-purple/50 hover:bg-purple/20 transition duration-300 text-base"
                title="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* Back to top button */}
            <button 
              onClick={scrollToTop} 
              className='flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel border-purple/30 text-purple text-xs font-semibold hover:bg-purple/20 transition cursor-pointer'
            >
              <span>Back to Top</span>
              <FaArrowUp className="text-xs" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Built With Tagline */}
        <div className='pt-8 text-center text-gray-400 text-xs flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p>&copy; {new Date().getFullYear()} Umindu Dinal. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
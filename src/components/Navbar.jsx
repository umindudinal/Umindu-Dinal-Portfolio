import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaGithub, FaLinkedin, FaPaperPlane, FaSun, FaMoon } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
   const { theme, toggleTheme, isDark } = useTheme();
   const [showMenu, setShowMenu] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const [activeSection, setActiveSection] = useState('home');
   const location = useLocation();
   const navigate = useNavigate();

   const navLinks = [
      { name: 'Home', id: 'home' },
      { name: 'About', id: 'about' },
      { name: 'Skills', id: 'skills' },
      { name: 'Projects', id: 'projects' },
      { name: 'Experience', id: 'experience' },
      { name: 'Contact', id: 'contact' },
   ];

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 40);

         // Section active state detection
         const sections = navLinks.map(link => document.getElementById(link.id));
         const scrollPosition = window.scrollY + 200;

         sections.forEach(section => {
            if (section) {
               const top = section.offsetTop;
               const height = section.offsetHeight;
               if (scrollPosition >= top && scrollPosition < top + height) {
                  setActiveSection(section.id);
               }
            }
         });
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const handleNavClick = (e, sectionId) => {
      e.preventDefault();
      setShowMenu(false);
      setActiveSection(sectionId);

      if (location.pathname !== '/') {
         navigate('/');
         setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
               element.scrollIntoView({ behavior: 'smooth' });
            } else {
               window.scrollTo({ top: 0, behavior: 'smooth' });
            }
         }, 100);
      } else {
         const element = document.getElementById(sectionId);
         if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
         }
      }
   };

   return (
      <header className={`fixed w-full z-50 transition-all duration-300 ${
         scrolled 
            ? 'bg-dark-100/90 backdrop-blur-xl border-b border-purple/20 py-3 shadow-2xl shadow-purple/5' 
            : 'bg-dark-100/70 backdrop-blur-md border-b border-white/5 py-4'
      }`}>
         <div className='container mx-auto flex justify-between items-center max-w-6xl px-6'>
            
            {/* Logo */}
            <div>
               <Link 
                  to="/" 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                  className='text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2 group'
               >
                  <span className="w-2.5 h-2.5 rounded-full bg-purple animate-pulse group-hover:scale-125 transition-transform"></span>
                  <span>Umindu<span className='text-gradient'>Dinal</span></span>
               </Link>
            </div>

            {/* Desktop Navigation Links & CTA */}
            <div className='hidden md:flex items-center space-x-7'>
               {navLinks.map((link) => {
                  const isActive = activeSection === link.id && location.pathname === '/';
                  return (
                     <a
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={(e) => handleNavClick(e, link.id)}
                        className={`relative text-sm font-medium transition duration-300 py-1 ${
                           isActive 
                              ? 'text-purple dark:text-white font-semibold' 
                              : 'text-slate-600 dark:text-gray-300 hover:text-purple dark:hover:text-white'
                        }`}
                     >
                        <span>{link.name}</span>
                        {isActive ? (
                           <motion.span 
                              layoutId="activeNavIndicator"
                              className='absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-purple to-pink rounded-full' 
                           />
                        ) : (
                           <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple to-pink transition-all duration-300 hover:w-full rounded-full'></span>
                        )}
                     </a>
                  );
               })}

               {/* Theme Toggle Button (Desktop) */}
               <button 
                  onClick={toggleTheme}
                  aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                  title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                  className="p-2 rounded-xl glass-panel border border-purple/30 text-gray-200 hover:border-purple/60 hover:bg-purple/10 transition-all duration-300 cursor-pointer flex items-center justify-center group shadow-sm"
               >
                  <AnimatePresence mode="wait" initial={false}>
                     {isDark ? (
                        <motion.div
                           key="sun"
                           initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                           animate={{ rotate: 0, scale: 1, opacity: 1 }}
                           exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                           transition={{ duration: 0.2 }}
                           className="text-amber-400 group-hover:scale-110 transition-transform"
                        >
                           <FaSun className="text-base" />
                        </motion.div>
                     ) : (
                        <motion.div
                           key="moon"
                           initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
                           animate={{ rotate: 0, scale: 1, opacity: 1 }}
                           exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
                           transition={{ duration: 0.2 }}
                           className="text-purple group-hover:scale-110 transition-transform"
                        >
                           <FaMoon className="text-base" />
                        </motion.div>
                     )}
                  </AnimatePresence>
               </button>

               {/* Let's Talk CTA Button */}
               <a 
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="px-4.5 py-2 rounded-xl bg-gradient-to-r from-purple to-pink text-white text-xs font-semibold shadow-md shadow-purple/20 hover:shadow-purple/40 hover:scale-105 transition duration-300 flex items-center gap-1.5"
               >
                  <FaPaperPlane className="text-[10px]" />
                  <span>Hire Me</span>
               </a>
            </div>

             {/* Mobile Actions: Theme Toggle + Menu Button */}
             <div className="flex md:hidden items-center gap-2.5">
                <button
                   onClick={toggleTheme}
                   aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                   title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                   className="p-2.5 text-gray-200 rounded-xl glass-panel border border-purple/30 transition hover:border-purple/50 flex items-center justify-center cursor-pointer"
                >
                   {isDark ? (
                      <FaSun className="text-amber-400 text-base" />
                   ) : (
                      <FaMoon className="text-purple text-base" />
                   )}
                </button>

                <button
                   onClick={() => setShowMenu(!showMenu)}
                   className="p-2 text-gray-300 hover:text-white rounded-xl glass-panel border border-purple/30 transition cursor-pointer"
                   aria-label="Toggle Menu"
                >
                   {showMenu ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
                </button>
             </div>

          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
             {showMenu && (
                <motion.div 
                   initial={{ opacity: 0, y: -20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   transition={{ duration: 0.2 }}
                   className='md:hidden container mx-auto px-6 pt-3 pb-6'
                >
                   <div className='glass-panel rounded-2xl p-6 flex flex-col space-y-4 justify-center items-center text-center shadow-2xl border-purple/30 bg-dark-100/95 backdrop-blur-xl'>
                      {navLinks.map((link) => (
                         <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => handleNavClick(e, link.id)}
                            className={`relative text-base font-semibold transition duration-300 ${
                               activeSection === link.id ? 'text-purple font-bold' : 'text-slate-800 dark:text-gray-200 hover:text-purple'
                            }`}
                         >
                            <span>{link.name}</span>
                         </a>
                      ))}
                      
                      {/* Theme Toggle in Mobile Menu */}
                      <div className="pt-2 flex items-center justify-between border-t border-purple/15 w-full px-2">
                         <span className="text-xs font-semibold text-slate-600 dark:text-gray-400">Appearance:</span>
                         <button
                            onClick={toggleTheme}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass-panel border border-purple/40 text-xs font-medium text-slate-800 dark:text-gray-200 hover:text-purple cursor-pointer transition"
                         >
                            {isDark ? (
                               <>
                                  <FaSun className="text-amber-400 text-sm" />
                                  <span>Light Mode</span>
                               </>
                            ) : (
                               <>
                                  <FaMoon className="text-purple text-sm" />
                                  <span>Dark Mode</span>
                               </>
                            )}
                         </button>
                      </div>

                      <div className="pt-2 flex items-center gap-4 border-t border-white/10 w-full justify-center">
                         <a 
                            href="https://github.com/umindudinal" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-300 hover:text-purple text-lg transition"
                         >
                            <FaGithub />
                         </a>
                         <a 
                            href="https://www.linkedin.com/in/umindu-dinal-212688375/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-300 hover:text-purple text-lg transition"
                         >
                            <FaLinkedin />
                         </a>
                      </div>
                   </div>
                </motion.div>
             )}
          </AnimatePresence>
      </header>
   )
}

export default Navbar
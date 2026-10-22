import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, projectCategories } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaArrowRight, FaCode } from 'react-icons/fa'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(projectCategories[0]?.id || 'Mobile Application')

  const filteredProjects = projects.filter(project => {
    if (Array.isArray(project.category)) {
      return project.category.includes(activeCategory);
    }
    return project.category === activeCategory;
  });

  return (
    <section 
      id='projects'
      className='py-20 lg:py-24 bg-dark-200 relative overflow-hidden'
    >
      <div className='container mx-auto px-6 max-w-6xl relative z-10'>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className='text-3xl sm:text-4xl font-extrabold text-white mb-4'>
            Featured <span className='text-gradient'>Projects</span>
          </h2>
          <p className='text-gray-400 text-base sm:text-lg leading-relaxed'>
            Explore my recent full-stack web applications, REST API backend services, AI models, desktop software, and embedded IoT systems. Click any project for full details.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14 max-w-5xl mx-auto">
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'bg-linear-to-r from-purple to-pink text-white shadow-lg shadow-purple/30 scale-105 border border-purple/50' 
                    : 'glass-panel text-gray-300 hover:text-white hover:border-purple/40 hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <motion.div 
          layout
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch'
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                transition={{ 
                  y: { duration: 0.25, ease: "easeOut" },
                  layout: { duration: 0.3 }
                }}
                className='h-full flex flex-col will-change-transform'
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

export default Projects
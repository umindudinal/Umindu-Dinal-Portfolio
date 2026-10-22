import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { workData } from '../assets/assets'
import { FaGraduationCap, FaBriefcase, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa'

const filterCategories = [
  { id: 'Experience', label: 'Work Experience' },
  { id: 'Education', label: 'Education' },
];

const Work = () => {
  const [activeTab, setActiveTab] = useState('Experience')

  const filteredData = workData.filter(item => item.category === activeTab)

  return (
    <section 
      id='experience'
      className='py-20 lg:py-24 bg-dark-100 relative overflow-hidden'
    >
      <div className='container mx-auto px-6 max-w-6xl relative z-10'>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className='text-3xl sm:text-4xl font-extrabold text-white mb-4'>
            Experience & <span className='text-gradient'>Education</span>
          </h2>
          <p className='text-gray-400 text-base sm:text-lg leading-relaxed'>
            My academic journey at ITUM University of Moratuwa alongside practical software development experience.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-14 max-w-xl mx-auto">
          {filterCategories.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'bg-linear-to-r from-purple to-pink text-white shadow-lg shadow-purple/25 scale-105' 
                    : 'glass-panel text-gray-300 hover:text-white hover:border-purple/40'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Full-Width Spacious Timeline Container */}
        <div className='max-w-5xl mx-auto'>
          <motion.div 
            layout
            className='space-y-8 relative before:content-[""] before:absolute before:left-5 sm:before:left-6 before:top-3 before:bottom-3 before:w-0.5 before:bg-linear-to-b before:from-purple before:via-pink before:to-blue'
          >
            <AnimatePresence>
              {filteredData.map((item, index) => {
                const isEducation = item.category === 'Education';
                const IconComp = isEducation ? FaGraduationCap : FaBriefcase;

                return (
                  <motion.div 
                    key={item.role + index} 
                    layout
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className='relative pl-14 sm:pl-16'
                  >
                    
                    {/* Timeline Left Node Icon */}
                    <div className='absolute left-0 top-3 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-dark-200 border border-purple/50 flex items-center justify-center text-purple text-base sm:text-lg z-20 shadow-xl shadow-purple/20'>
                      <IconComp />
                    </div>

                    {/* Wide Full-Width Box */}
                    <div className='glass-panel rounded-2xl p-6 sm:p-8 border-dark-400/50 hover:border-purple/40 transition-all duration-300 group'>
                      
                      {/* Header Info Row */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-dark-400/40">
                        <div>
                          <h3 className='text-xl sm:text-2xl font-bold text-white group-hover:text-purple transition-colors mb-1 leading-snug'>
                            {item.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm">
                            <span className='text-purple font-semibold'>{item.company}</span>
                            {item.location && (
                              <span className='text-gray-400 text-xs flex items-center gap-1'>
                                <FaMapMarkerAlt className="text-purple/80" />
                                {item.location}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className='flex flex-wrap items-center gap-2 shrink-0'>
                          <span className='px-3.5 py-1.5 bg-purple/15 text-purple rounded-full text-xs font-semibold uppercase tracking-wider border border-purple/30'>
                            {item.duration}
                          </span>
                          <span className='px-3 py-1 bg-dark-300 text-gray-300 rounded-full text-xs font-medium border border-dark-400'>
                            {item.category}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className='text-gray-300 text-sm sm:text-base leading-relaxed mb-5'>
                        {item.description}
                      </p>

                      {/* Key Achievements List */}
                      {item.achievements && (
                        <div className='space-y-2.5 mb-6 text-left'>
                          {item.achievements.map((ach, idx) => (
                            <div key={idx} className='flex items-start gap-3 text-xs sm:text-sm text-gray-300'>
                              <FaCheckCircle className='text-purple text-base shrink-0 mt-0.5' />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Applied Skills Tags */}
                      {item.skills && (
                        <div className='flex flex-wrap items-center gap-2 pt-4 border-t border-dark-400/40'>
                          <span className="text-xs font-semibold text-gray-400 uppercase mr-1">Applied Skills:</span>
                          {item.skills.map((skillTag, idx) => (
                            <span 
                              key={idx} 
                              className='px-3 py-1 rounded-lg bg-dark-300/80 border border-dark-400/60 text-xs font-medium text-gray-200 hover:border-purple/40 hover:text-purple transition-colors'
                            >
                              {skillTag}
                            </span>
                          ))}
                        </div>
                      )}

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Work
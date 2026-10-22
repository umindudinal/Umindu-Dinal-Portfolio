import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaReact, 
  FaJava, 
  FaPython,
  FaJs, 
  FaGitAlt, 
  FaBrain,
  FaMicrochip,
  FaPhp,
  FaHtml5,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaCss3
} from 'react-icons/fa'
import { 
  SiSpringboot, 
  SiTailwindcss, 
  SiMysql, 
  SiDotnet, 
  SiFlutter,
  SiTensorflow,
  SiOpencv,
  SiVite,
  SiFirebase,
  SiStreamlit,
  SiFramer,
  SiSupabase,
  SiMongodb,
  SiPostgresql,
  SiLeaflet,
  SiPostman,
  SiJsonwebtokens
} from 'react-icons/si'

const techStack = [
  // Languages
  { name: 'Java 21', category: 'Languages', icon: FaJava, color: 'text-amber-400', level: 'Core Lang' },
  { name: 'Python', category: 'Languages', icon: FaPython, color: 'text-blue-400', level: 'Core Lang' },
  { name: 'C#', category: 'Languages', icon: SiDotnet, color: 'text-purple-400', level: 'Core Lang' },
  { name: 'JavaScript', category: 'Languages', icon: FaJs, color: 'text-yellow-400', level: 'Core Lang' },
  { name: 'Dart', category: 'Languages', icon: SiFlutter, color: 'text-sky-400', level: 'Core Lang' },
  { name: 'Embedded C', category: 'Languages', icon: FaMicrochip, color: 'text-rose-400', level: 'Microcontroller' },
  { name: 'PHP', category: 'Languages', icon: FaPhp, color: 'text-indigo-400', level: 'Web Lang' },
  { name: 'SQL', category: 'Languages', icon: FaDatabase, color: 'text-cyan-400', level: 'Query Lang' },

  // Frontend & Mobile
  { name: 'React 19', category: 'Frontend', icon: FaReact, color: 'text-cyan-400', level: 'Web UI' },
  { name: 'Tailwind CSS 4', category: 'Frontend', icon: SiTailwindcss, color: 'text-sky-400', level: 'Styling' },
  { name: 'Flutter', category: 'Frontend', icon: SiFlutter, color: 'text-sky-400', level: 'Mobile UI' },
  { name: 'Framer Motion', category: 'Frontend', icon: SiFramer, color: 'text-pink-400', level: 'Animations' },
  { name: 'Vite 7', category: 'Frontend', icon: SiVite, color: 'text-purple-400', level: 'Build Tool' },
  { name: 'HTML5', category: 'Frontend', icon: FaHtml5, color: 'text-orange-400', level: 'Markup' },
  { name: 'CSS3', category: 'Frontend', icon: FaCss3, color: 'text-blue-400', level: 'Styling' },

  // Backend & Frameworks
  { name: 'Spring Boot 3', category: 'Backend', icon: SiSpringboot, color: 'text-emerald-400', level: 'Backend API' },
  { name: 'Node.js & Express', category: 'Backend', icon: FaNodeJs, color: 'text-emerald-500', level: 'REST API' },
  { name: 'RESTful APIs', category: 'Backend', icon: FaServer, color: 'text-indigo-300', level: 'Architecture' },
  { name: 'JWT Auth', category: 'Backend', icon: SiJsonwebtokens, color: 'text-pink-400', level: 'Security' },
  { name: 'Firebase FCM', category: 'Backend', icon: SiFirebase, color: 'text-amber-500', level: 'Push / Cloud' },
  { name: '.NET Framework', category: 'Backend', icon: SiDotnet, color: 'text-purple-400', level: 'Desktop & Web' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', icon: SiPostgresql, color: 'text-sky-400', level: 'RDBMS' },
  { name: 'Supabase', category: 'Databases', icon: SiSupabase, color: 'text-emerald-400', level: 'Cloud DB' },
  { name: 'MySQL', category: 'Databases', icon: SiMysql, color: 'text-sky-500', level: 'RDBMS' },
  { name: 'MS SQL Server', category: 'Databases', icon: FaDatabase, color: 'text-red-400', level: 'RDBMS' },
  { name: 'SQLite', category: 'Databases', icon: FaDatabase, color: 'text-blue-300', level: 'Embedded DB' },
  { name: 'MongoDB', category: 'Databases', icon: SiMongodb, color: 'text-green-400', level: 'NoSQL DB' },

  // AI, Tools & GIS
  { name: 'Leaflet & GIS', category: 'Tools & ML', icon: SiLeaflet, color: 'text-emerald-400', level: 'GIS Mapping' },
  { name: 'YOLOv8', category: 'Tools & ML', icon: FaBrain, color: 'text-pink-400', level: 'Vision ML' },
  { name: 'OpenCV & EasyOCR', category: 'Tools & ML', icon: SiOpencv, color: 'text-red-400', level: 'Computer Vision' },
  { name: 'TensorFlow / Keras', category: 'Tools & ML', icon: SiTensorflow, color: 'text-orange-500', level: 'Deep Learning' },
  { name: 'Postman', category: 'Tools & ML', icon: SiPostman, color: 'text-orange-400', level: 'API Testing' },
  { name: 'Streamlit', category: 'Tools & ML', icon: SiStreamlit, color: 'text-rose-500', level: 'AI Web Apps' },
  { name: 'ATmega32 & Proteus', category: 'Tools & ML', icon: FaMicrochip, color: 'text-yellow-500', level: 'Embedded IoT' },
  { name: 'Git & GitHub', category: 'Tools & ML', icon: FaGitAlt, color: 'text-orange-500', level: 'Version Control' },
];

const categories = [
  { id: 'Languages', label: 'Languages' },
  { id: 'Frontend', label: 'Frontend & Mobile' },
  { id: 'Backend', label: 'Backend & APIs' },
  { id: 'Databases', label: 'Databases' },
  { id: 'Tools & ML', label: 'AI, Tools & GIS' },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Languages')

  const filteredTech = techStack.filter(item => item.category === activeCategory)

  return (
    <section 
      id='skills'
      className='py-20 lg:py-24 bg-dark-100 relative'
    >
      <div className='container mx-auto px-6 max-w-6xl relative z-10'>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <h2 className='text-3xl sm:text-4xl font-extrabold text-white mb-4'>
            Skills & <span className='text-gradient'>Technologies</span>
          </h2>
          <p className='text-gray-400 text-base sm:text-lg leading-relaxed'>
            A comprehensive, interactive showcase of programming languages, frameworks, AI models, databases, and engineering tools I utilize in real-world applications.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14 max-w-4xl mx-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'bg-linear-to-r from-purple to-pink text-white shadow-lg shadow-purple/25 scale-105' 
                    : 'glass-panel text-gray-300 hover:text-white hover:border-purple/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Technology Cards Grid */}
        <motion.div 
          layout
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto min-h-55'
        >
          <AnimatePresence mode='popLayout'>
            {filteredTech.map((tech) => {
              const IconComp = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -6, scale: 1.04 }}
                  className='glass-panel rounded-2xl p-5 border-dark-400/50 hover:border-purple/50 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden'
                >
                  <div className={`text-4xl mb-3 ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComp />
                  </div>
                  <h4 className='text-sm font-bold text-white group-hover:text-purple transition-colors mb-1.5'>
                    {tech.name}
                  </h4>
                  <span className='text-[10px] text-gray-400 font-medium px-2 py-0.5 rounded-md bg-dark-300/80 border border-dark-400/40'>
                    {tech.level}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills
import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaExternalLinkAlt, 
  FaGithub, 
  FaCheckCircle, 
  FaCalendarAlt, 
  FaUserTie, 
  FaFolder, 
  FaCode,
  FaLightbulb
} from 'react-icons/fa'

const ProjectDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Find current project by id or fallback to index matching
  const projectIndex = projects.findIndex(p => p.id === id || p.title.toLowerCase().replace(/\s+/g, '-') === id)
  const project = projects[projectIndex]

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-100 flex flex-col items-center justify-center px-6 text-center pt-24">
        <h2 className="text-3xl font-bold text-white mb-4">Project Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md">The project you are looking for does not exist or has been moved.</p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-purple text-white font-medium rounded-lg hover:bg-purple-700 transition"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
      </div>
    )
  }

  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length]
  const nextProject = projects[(projectIndex + 1) % projects.length]

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-dark-100 pt-28 pb-20 text-white"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Top Navigation & Breadcrumb */}
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <button 
            onClick={() => navigate('/#projects')} 
            className="inline-flex items-center text-gray-400 hover:text-purple transition font-medium group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" /> 
            Back to Projects
          </button>
          
          {(project.displayCategory || project.category) && (
            <span className="px-4 py-1.5 bg-purple/15 text-purple border border-purple/30 rounded-full text-xs font-semibold uppercase tracking-wider">
              {project.displayCategory || (Array.isArray(project.category) ? project.category.join(' • ') : project.category)}
            </span>
          )}
        </div>

        {/* Project Navigation (Previous / Next) */}
        <div className="mb-10 pb-8 border-b border-dark-300 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link 
            to={`/project/${prevProject.id}`}
            className="flex items-center gap-3 p-4 rounded-xl bg-dark-200 border border-dark-300 hover:border-purple/50 hover:bg-dark-300/40 transition group w-full sm:w-auto"
          >
            <FaArrowLeft className="text-purple group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <p className="text-xs text-gray-400">Previous Project</p>
              <p className="font-semibold text-white group-hover:text-purple transition line-clamp-1">{prevProject.title}</p>
            </div>
          </Link>

          <Link 
            to={`/project/${nextProject.id}`}
            className="flex items-center justify-end gap-3 p-4 rounded-xl bg-dark-200 border border-dark-300 hover:border-purple/50 hover:bg-dark-300/40 transition group w-full sm:w-auto text-right"
          >
            <div>
              <p className="text-xs text-gray-400">Next Project</p>
              <p className="font-semibold text-white group-hover:text-purple transition line-clamp-1">{nextProject.title}</p>
            </div>
            <FaArrowRight className="text-purple group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Header Title & Tagline */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Hero Image Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-dark-300 mb-12 bg-dark-200"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Overview */}
            <div className="bg-dark-200 rounded-2xl p-8 border border-dark-300">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-2 h-7 bg-purple rounded-full inline-block"></span>
                Project Overview
              </h2>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg whitespace-pre-line">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="bg-dark-200 rounded-2xl p-8 border border-dark-300">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-7 bg-purple rounded-full inline-block"></span>
                  Key Features & Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-dark-300/60 p-4 rounded-xl border border-dark-400/50">
                      <FaCheckCircle className="text-purple text-lg mt-1 shrink-0" />
                      <span className="text-gray-200 text-sm md:text-base leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Insights / Learnings */}
            {project.highlights && (
              <div className="bg-linear-to-r from-purple/10 to-pink/10 rounded-2xl p-8 border border-purple/20">
                <h2 className="text-xl font-bold mb-3 flex items-center text-purple gap-2">
                  <FaLightbulb className="text-yellow-400" /> Key Takeaway
                </h2>
                <p className="text-gray-300 italic text-base leading-relaxed">
                  "{project.highlights}"
                </p>
              </div>
            )}

          </div>

          {/* Sidebar Information Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-dark-200 rounded-2xl p-6 border border-dark-300 sticky top-28 space-y-6">
              <h3 className="text-xl font-bold pb-4 border-b border-dark-300">Project Information</h3>
              
              {/* Role */}
              {project.role && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center text-purple text-lg shrink-0">
                    <FaUserTie />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-semibold">Role</p>
                    <p className="text-white font-medium">{project.role}</p>
                  </div>
                </div>
              )}

              {/* Timeline */}
              {project.duration && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center text-purple text-lg shrink-0">
                    <FaCalendarAlt />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-semibold">Timeline</p>
                    <p className="text-white font-medium">{project.duration}</p>
                  </div>
                </div>
              )}

              {/* Category */}
              {(project.displayCategory || project.category) && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center text-purple text-lg shrink-0">
                    <FaFolder />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-semibold">Category</p>
                    <p className="text-white font-medium">
                      {project.displayCategory || (Array.isArray(project.category) ? project.category.join(' • ') : project.category)}
                    </p>
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FaCode className="text-purple" />
                  <p className="text-xs text-gray-400 uppercase font-semibold">Technologies Used</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 bg-dark-300 border border-dark-400 rounded-full text-xs font-semibold text-gray-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-dark-300 space-y-3">
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-purple text-white font-semibold rounded-xl hover:bg-purple-700 transition shadow-lg shadow-purple/20"
                  >
                    <FaExternalLinkAlt className="text-sm" /> Live Demo
                  </a>
                )}

                {project.code && (
                  <a 
                    href={project.code} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 border border-purple/50 text-white font-semibold rounded-xl hover:bg-purple/20 transition"
                  >
                    <FaGithub className="text-lg" /> Source Code
                  </a>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default ProjectDetails

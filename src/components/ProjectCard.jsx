import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const ProjectCard = ({ id, title, description, image, tech = [], code, demo, displayCategory }) => {
   const MAX_TECH = 4;
   const visibleTech = tech.slice(0, MAX_TECH);
   const remainingCount = tech.length - MAX_TECH;

   return (
      <div className='bg-dark-300 rounded-2xl overflow-hidden transition-all duration-300 ease-out flex flex-col justify-between border border-dark-400/50 hover:border-purple/50 hover:shadow-xl hover:shadow-purple/20 group relative h-full w-full'>
         <div className='flex flex-col flex-1'>
            <Link to={`/project/${id}`} className='block overflow-hidden relative shrink-0'>
               {displayCategory && (
                  <span className='absolute top-3 left-3 px-3 py-1 bg-dark-100/85 backdrop-blur-md border border-purple/40 text-purple text-xs font-semibold rounded-full shadow-lg z-10'>
                     {displayCategory}
                  </span>
               )}
               <img 
                  src={image} 
                  alt={title} 
                  className='w-full h-52 object-cover transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform'
               />
            </Link>
            <div className='p-6 flex flex-col flex-1 justify-between'>
               <div>
                  <Link to={`/project/${id}`}>
                     <h3 className='text-xl font-semibold mb-2 hover:text-purple transition duration-200 line-clamp-1' title={title}>{title}</h3>
                  </Link>
                  <p className='text-gray-400 mb-4 text-sm line-clamp-2 leading-relaxed h-10 overflow-hidden'>{description}</p>
               </div>
               <div className='flex flex-wrap items-center gap-1.5 mt-auto pt-2'>
                  {visibleTech.map((item, index) => (
                     <span key={index} className='px-2.5 py-1 bg-dark-400 rounded-full text-xs font-medium text-gray-300'>
                        {item}
                     </span>
                  ))}
                  {remainingCount > 0 && (
                     <span 
                        className='px-2.5 py-1 bg-purple/15 text-purple border border-purple/30 rounded-full text-xs font-semibold hover:bg-purple/25 transition-colors cursor-default'
                        title={`+${remainingCount} more: ${tech.slice(MAX_TECH).join(', ')}`}
                     >
                        +{remainingCount}
                     </span>
                  )}
               </div>
            </div>
         </div>
         <div className='px-6 pb-6 pt-2 flex items-center gap-3 shrink-0 mt-auto'>
            <Link 
               to={`/project/${id}`} 
               className='flex-1 text-center px-4 py-2.5 bg-purple font-medium rounded-lg hover:bg-purple-700 transition text-sm flex items-center justify-center gap-2 shadow-md shadow-purple/20'
            >
               View Details <FaArrowRight className='text-xs' />
            </Link>
            {demo && (
               <a 
                  href={demo} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='p-2.5 border border-purple/50 font-medium rounded-lg hover:bg-purple/20 transition text-sm text-purple'
                  title='Live Demo'
               >
                  <FaExternalLinkAlt className='text-xs' />
               </a>
            )}
            {code && (
               <a 
                  href={code} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='p-2.5 border border-purple/50 font-medium rounded-lg hover:bg-purple/20 transition text-sm text-purple'
                  title='Source Code'
               >
                  <FaGithub className='text-sm' />
               </a>
            )}
         </div>
      </div>
   )
}

export default ProjectCard
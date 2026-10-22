import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaGithub, 
  FaLinkedin, 
  FaCopy, 
  FaCheck,
  FaPaperPlane,
  FaWhatsapp,
  FaExternalLinkAlt
} from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const [status, setStatus] = useState('')
  const [copiedField, setCopiedField] = useState(null)
  const [setSelectedType] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm(
      'service_wlna5bw',
      'template_792ufli',
      formRef.current,
      '7gJwc38dTeVrBfaoY'
    )
    .then(() => {
      setStatus('success')
      formRef.current.reset()
      setSelectedType('')
      setTimeout(() => setStatus(''), 5000)
    })
    .catch(() => {
      setStatus('error')
    })
  }

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text)
    setCopiedField(fieldName)
    setTimeout(() => setCopiedField(null), 2500)
  }

  return (
    <section 
      id='contact'
      className='py-20 lg:py-24 bg-dark-200 relative overflow-hidden'
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-pink/10 rounded-full blur-3xl pointer-events-none" />

      <div className='container mx-auto px-6 max-w-6xl relative z-10'>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className='text-3xl sm:text-4xl font-extrabold text-white mb-4'>
            Get in <span className='text-gradient'>Touch</span>
          </h2>
          <p className='text-gray-400 text-base sm:text-lg leading-relaxed'>
            Have a project in mind, a job opportunity, or technical inquiry? Send me a message or connect directly via email or WhatsApp!
          </p>
        </div>

        {/* 2-Column Form & Contact Info */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start'>
          
          {/* Contact Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border-dark-400/50 shadow-2xl relative'
          >
            <h3 className="text-2xl font-bold text-white mb-2">Send Me a Message</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-6">Fill out the form below and I'll respond as soon as possible.</p>
            
            <form ref={formRef} onSubmit={sendEmail} className='space-y-6'>
              <div>
                <label htmlFor="name" className='block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2'>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="e.g. S U Dinal"
                  className='w-full bg-dark-300/80 border border-dark-400 rounded-xl px-4 py-3.5 outline-none text-white focus:border-purple focus:ring-1 focus:ring-purple transition-all text-sm'
                />
              </div>

              <div>
                <label htmlFor="email" className='block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2'>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="e.g. dinal@example.com" 
                  className='w-full bg-dark-300/80 border border-dark-400 rounded-xl px-4 py-3.5 outline-none text-white focus:border-purple focus:ring-1 focus:ring-purple transition-all text-sm'
                />
              </div>

              <div>
                <label htmlFor="message" className='block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2'>
                  Your Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  required
                  placeholder="Write your project requirements, job opportunity, or inquiry here..."
                  className='w-full bg-dark-300/80 border border-dark-400 rounded-xl px-4 py-3.5 outline-none resize-none text-white focus:border-purple focus:ring-1 focus:ring-purple transition-all text-sm'
                />
              </div>

              {/* Status Banner */}
              {status === 'success' && (
                <div className='p-4 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm font-medium flex items-center gap-2'>
                  <FaCheck /> Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className='p-4 bg-rose-500/15 border border-rose-500/30 rounded-xl text-rose-400 text-sm font-medium'>
                  Something went wrong while sending. Please try again.
                </div>
              )}

              <button
                type='submit'
                disabled={status === 'sending'}
                className='w-full bg-linear-to-r from-purple to-pink text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-purple/25 hover:shadow-purple/40 hover:scale-[1.01] transition duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60'
              >
                <FaPaperPlane className="text-sm" />
                <span>{status === 'sending' ? 'Sending Message...' : 'Send Message'}</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Details & Socials Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='lg:col-span-5 space-y-6'
          >
            
            {/* Email Card with Copy & Direct Mailto */}
            <div className='glass-panel p-6 rounded-2xl border-dark-400/50 flex items-center justify-between gap-4 group hover:border-purple/40 transition-colors'>
              <div className='flex items-center gap-4 min-w-0'>
                <div className='w-12 h-12 rounded-xl bg-purple/15 text-purple flex items-center justify-center text-xl shrink-0 border border-purple/20'>
                  <FaEnvelope />
                </div>
                <div className='min-w-0'>
                  <p className='text-xs font-semibold text-gray-400 uppercase'>Email Address</p>
                  <a 
                    href="mailto:umindudinal818@gmail.com" 
                    className='text-sm font-bold text-white hover:text-purple transition truncate block'
                  >
                    umindudinal818@gmail.com
                  </a>
                </div>
              </div>
              <div className='flex items-center gap-1.5 shrink-0'>
                <a 
                  href="mailto:umindudinal818@gmail.com" 
                  className='p-2.5 rounded-lg bg-dark-300 text-gray-300 hover:text-purple hover:bg-dark-400 transition cursor-pointer'
                  title="Open Mail Client"
                >
                  <FaExternalLinkAlt className="text-xs" />
                </a>
                <button 
                  onClick={() => handleCopy('umindudinal818@gmail.com', 'email')}
                  className='p-2.5 rounded-lg bg-dark-300 text-gray-300 hover:text-purple hover:bg-dark-400 transition cursor-pointer'
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <FaCheck className="text-emerald-400 text-xs" /> : <FaCopy className="text-xs" />}
                </button>
              </div>
            </div>

            {/* Phone Card with Copy & WhatsApp Link */}
            <div className='glass-panel p-6 rounded-2xl border-dark-400/50 flex items-center justify-between gap-4 group hover:border-purple/40 transition-colors'>
              <div className='flex items-center gap-4 min-w-0'>
                <div className='w-12 h-12 rounded-xl bg-purple/15 text-purple flex items-center justify-center text-xl shrink-0 border border-purple/20'>
                  <FaPhone />
                </div>
                <div className='min-w-0'>
                  <p className='text-xs font-semibold text-gray-400 uppercase'>Phone / WhatsApp</p>
                  <a 
                    href="https://wa.me/94779648818" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='text-sm font-bold text-white hover:text-emerald-400 transition block'
                  >
                    +94 77 964 8818
                  </a>
                </div>
              </div>
              <div className='flex items-center gap-1.5 shrink-0'>
                <a 
                  href="https://wa.me/94779648818" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='p-2.5 rounded-lg bg-dark-300 text-emerald-400 hover:bg-emerald-500/20 transition cursor-pointer'
                  title="Chat on WhatsApp"
                >
                  <FaWhatsapp className="text-sm" />
                </a>
                <button 
                  onClick={() => handleCopy('+94 77 964 8818', 'phone')}
                  className='p-2.5 rounded-lg bg-dark-300 text-gray-300 hover:text-purple hover:bg-dark-400 transition cursor-pointer'
                  title="Copy Phone Number"
                >
                  {copiedField === 'phone' ? <FaCheck className="text-emerald-400 text-xs" /> : <FaCopy className="text-xs" />}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className='glass-panel p-6 rounded-2xl border-dark-400/50 flex items-center gap-4 hover:border-purple/40 transition-colors'>
              <div className='w-12 h-12 rounded-xl bg-purple/15 text-purple flex items-center justify-center text-xl shrink-0 border border-purple/20'>
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className='text-xs font-semibold text-gray-400 uppercase'>Location</p>
                <p className='text-sm font-bold text-white'>Track 09 Junction Medirigiriya, Polonnaruwa, Sri Lanka</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className='glass-panel p-6 rounded-2xl border-dark-400/50 space-y-4'>
              <h4 className='text-sm font-bold text-white uppercase tracking-wider'>Connect Across Platforms</h4>
              <div className='grid grid-cols-2 gap-3'>
                <a 
                  href="https://github.com/umindudinal" 
                  target='_blank' 
                  rel="noopener noreferrer"
                  className='p-4 rounded-xl bg-dark-300 border border-dark-400 hover:border-purple/50 hover:bg-purple/20 text-white flex flex-col items-center justify-center gap-2 transition text-xs font-semibold group'
                >
                  <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/umindu-dinal-212688375/" 
                  target='_blank' 
                  rel="noopener noreferrer"
                  className='p-4 rounded-xl bg-dark-300 border border-dark-400 hover:border-purple/50 hover:bg-purple/20 text-white flex flex-col items-center justify-center gap-2 transition text-xs font-semibold group'
                >
                  <FaLinkedin className="text-2xl text-[#0A66C2] group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Contact
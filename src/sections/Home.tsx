import React from 'react'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

export default function Home() {
  return (
    <section id="home" className="min-h-[100vh] flex items-center justify-center bg-background px-4 py-20">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          I'm <span className="text-primary">Amarnath</span>
        </motion.h1>
        
          <motion.p 
          className="text-xl md:text-2xl text-white/80 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          Fullstack Web Developer
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          <Button text="Hire Me" variant="primary" />
          <Button text="My Works" variant="secondary" />
        </motion.div>
      </motion.div>
    </section>
  )
}

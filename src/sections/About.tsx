import React from 'react'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import SectionTitle from '../components/ui/SectionTitle'
import aboutData from '../data/about.json'
import profileImage from '../assets/images/profile.jpeg'

export default function About() {
  const details = [
    { label: 'Name', value: aboutData.name },
    { label: 'Date of Birth', value: aboutData.dob },
    { label: 'Address', value: aboutData.address },
    { label: 'Email', value: aboutData.email },
    { label: 'Phone', value: aboutData.phone },
  ]

  return (
        <section id="about" className="min-h-[100vh] flex items-center justify-center bg-background px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="About Me" className="text-center mb-12" />
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="aspect-square bg-white/5 rounded-lg overflow-hidden"
          >
            {/* Replace with your photo */}
            <img
              src={profileImage}
              alt="Amarnath - Fullstack Web Developer"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <p className="text-lg text-white/80 mb-6">{aboutData.bio}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {details.map(({ label, value }) => (
                <div key={label} className="space-y-1">
                  <p className="text-sm text-white/60">{label}</p>
                  <p className="text-white">{value}</p>
                </div>
              ))}
              
              <div className="space-y-1">
                <p className="text-sm text-white/60">Projects Completed</p>
                <p className="text-2xl font-bold text-primary">{aboutData.projectsCompleted}</p>
              </div>
            </div>

            <Button text="Download CV" variant="primary" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
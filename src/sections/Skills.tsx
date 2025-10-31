import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import skillsData from '../data/skills.json'

export default function Skills() {
  return (
    <section id="skills" className="min-h-[100vh] flex items-center justify-center bg-background px-4 py-20">
      <div className="max-w-6xl w-full mx-auto">
        <SectionTitle title="My Skills" className="text-center mb-12" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2 px-4"
            >
              <div className="flex justify-between items-center">
                <span className="text-lg text-white/90">{skill.name}</span>
                <span className="text-sm text-white/60">{skill.level}%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
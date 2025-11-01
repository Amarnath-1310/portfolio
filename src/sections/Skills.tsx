import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import Reveal from '../components/Reveal'
import skillsData from '../data/skills.json'

export default function Skills() {
  return (
    <section id="skills" className="min-h-[100vh] flex items-center justify-center bg-background px-4 py-24">
      <div className="max-w-6xl w-full mx-auto">
        <Reveal>
          <SectionTitle title="My Skills" className="text-center mb-12" />
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => (
            <Reveal
              key={skill.name}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.1}
            >
              <div className="space-y-2 px-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-white/90">{skill.name}</span>
                  <span className="text-sm text-white/60">{skill.level}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

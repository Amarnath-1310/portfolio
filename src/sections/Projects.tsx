import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import projectsData from '../data/projects.json'

export default function Projects() {
  return (
    <section id="projects" className="min-h-[100vh] flex items-center justify-center bg-background px-4 py-20">
      <div className="max-w-6xl w-full mx-auto">
        <SectionTitle title="My Projects" className="text-center mb-12" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-lg p-6 hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-white/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button
                text="View Project"
                variant="secondary"
                onClick={() => window.open(project.link, '_blank')}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
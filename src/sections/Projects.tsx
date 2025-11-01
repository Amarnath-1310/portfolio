import React from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Reveal from '../components/Reveal'
import projectsData from '../data/projects.json'

export default function Projects() {
  return (
    <section id="projects" className="min-h-[100vh] flex items-center justify-center bg-background px-4 py-24">
      <div className="max-w-6xl w-full mx-auto">
        <Reveal>
          <SectionTitle title="My Projects" className="text-center mb-12" />
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <Reveal
              key={project.title}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.2}
            >
              <div className="bg-white/5 rounded-lg p-6 hover:scale-[1.02] transition-transform">
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import Button from '../components/ui/Button'
import SectionTitle from '../components/ui/SectionTitle'
import Reveal from '../components/Reveal'
import aboutData from '../data/about.json'
import profileImage from '../assets/images/profile.png'

export default function About() {
  const details = [
    { label: 'Name', value: aboutData.name },
    { label: 'Date of Birth', value: aboutData.dob },
    { label: 'Address', value: aboutData.address },
    { label: 'Email', value: aboutData.email },
    { label: 'Phone', value: aboutData.phone },
  ]

  return (
    <section id="about" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionTitle title="About Me" className="text-center mb-12" />
        </Reveal>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Reveal direction="left">
            <div className="aspect-square">
              <img
                src={profileImage}
                alt="Amarnath - Fullstack Web Developer"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal direction="up" delay={0.2}>
              <p className="text-lg text-white/80 leading-relaxed">
                {aboutData.bio}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {details.map(({ label, value }) => (
                  <div key={label} className="space-y-1">
                    <p className="text-sm text-white/60">{label}</p>
                    <p className="text-white font-medium">{value}</p>
                  </div>
                ))}
                
                <div className="space-y-1">
                  <p className="text-sm text-white/60">Projects Completed</p>
                  <p className="text-2xl font-bold text-primary">{aboutData.projectsCompleted}</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.6}>
              <div className="pt-4">
                <Button text="Download CV" variant="primary" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
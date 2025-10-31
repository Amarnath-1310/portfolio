import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import aboutData from '../data/about.json'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="min-h-[100vh] flex items-center justify-center bg-background px-4 py-20">
      <div className="max-w-6xl w-full mx-auto">
        <SectionTitle title="Get in Touch" className="text-center mb-12" />
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-white/80">
                  <span className="text-primary">📍</span>
                  {aboutData.address}
                </p>
                <p className="flex items-center gap-3 text-white/80">
                  <span className="text-primary">📧</span>
                  <a
                    href={`mailto:${aboutData.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {aboutData.email}
                  </a>
                </p>
                <p className="flex items-center gap-3 text-white/80">
                  <span className="text-primary">📱</span>
                  <a
                    href={`tel:${aboutData.phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {aboutData.phone}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:border-primary focus:outline-none text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:border-primary focus:outline-none text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:border-primary focus:outline-none text-white"
                required
              />
            </div>
            <Button text="Send Message" variant="primary" type="submit" />
          </motion.form>
        </div>
      </div>
    </section>
  )
}
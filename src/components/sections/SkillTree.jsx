import { motion } from 'framer-motion'
import { Server, Database, Code, Terminal, Brain, Cloud } from 'lucide-react'
import { useState } from 'react'

const skills = [
  { id: 'backend', name: 'Backend', icon: Server, color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20', desc: 'Java, Spring Boot, Hibernate, REST APIs, WebSockets' },
  { id: 'db', name: 'Databases', icon: Database, color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20', desc: 'PostgreSQL, MongoDB, Redis' },
  { id: 'languages', name: 'Languages', icon: Code, color: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', desc: 'Java, C++, Python, JavaScript' },
  { id: 'ai', name: 'AI & ML', icon: Brain, color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20', desc: 'Model Deployment, Image Classification' },
  { id: 'devops', name: 'DevOps', icon: Terminal, color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20', desc: 'Docker, Git, GitHub, CI/CD' },
  { id: 'cloud', name: 'Cloud', icon: Cloud, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20', desc: 'Firebase, Cloudinary, Google Maps API' },
]

export default function SkillTree() {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  
  return (
    <section id="skills" className="min-h-screen py-20 px-4 flex flex-col items-center justify-center relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
          <span className="text-red-600">Tech</span> Arsenal
        </h2>
        <p className="text-zinc-500 max-w-xl mx-auto">
          Hover over nodes to inspect weapon capability.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => {
                setHoveredSkill(skill.id)
            }}
            onMouseLeave={() => setHoveredSkill(null)}
            className={`p-6 rounded-2xl border ${skill.border} ${skill.bg} backdrop-blur-sm cursor-crosshair group relative overflow-hidden flex flex-col items-center text-center`}
          >
             <div className="relative z-10 flex flex-col items-center gap-4 w-full">
                <skill.icon className={`w-12 h-12 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="font-bold text-xl text-white">{skill.name}</h3>
                
                {/* Tech Stack List (Visible on Hover) */}
                <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                        height: hoveredSkill === skill.id ? 'auto' : 0,
                        opacity: hoveredSkill === skill.id ? 1 : 0
                    }}
                    className="text-sm text-zinc-300 space-y-1 overflow-hidden"
                >
                    <p>{skill.desc}</p>
                </motion.div>
             </div>

             {/* Hover Glow */}
             <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-${skill.color.split('-')[1]}-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

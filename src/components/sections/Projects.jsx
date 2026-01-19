import { motion, AnimatePresence } from 'framer-motion'
import { Play, Github, X, Code, BookOpen, Layers } from 'lucide-react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import { useState } from 'react'

const projects = [
  { 
    id: 1, 
    title: 'Splitzy', 
    type: 'React Native App', 
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker'],
    desc: 'Backend for shared expense tracking. Features scalable APIs for settlements, JWT authentication, and real-time chat via WebSockets.',
    learnings: 'Mastered WebSocket protocols for real-time communication. Implemented complex database normalization for expense splitting logic.',
    github: 'https://github.com/uditz' 
  },
  { 
    id: 2, 
    title: 'Eco Switch', 
    type: 'React Native App', 
    tech: ['Java', 'Firebase', 'Google Maps API', 'Cloudinary'],
    desc: 'Smart e-waste management app with real-time tracking, location-based complaints, and admin task management panel.',
    learnings: 'Integrated Google Maps API for geolocation features. Managed real-time data sync using Firebase Firestore.',
    github: 'https://github.com/uditz'
  },
  { 
    id: 3, 
    title: 'Redis Cache Impl', 
    type: 'Optimization', 
    tech: ['Redis', 'Spring Boot', 'Performance'],
    desc: 'Implementing advanced caching strategies to optimize API response times for high-load backend systems.',
    learnings: 'Deep dive into caching strategies (Write-Through, Look-Aside). Benchmarked API performance improvements.',
    github: 'https://github.com/uditz'
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="min-h-screen py-20 px-4 flex flex-col items-center justify-center bg-black/40 relative">
       <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
          <span className="text-red-500">Mission</span> Logs
        </h2>
        <p className="text-zinc-500 max-w-xl mx-auto">
          Click on a mission to access classified details.
        </p>
      </div>

      <div className="w-full max-w-5xl space-y-6">
        {projects.map((project, index) => (
            <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => {
                    setSelectedProject(project)
                }}
            >
                <Card className="bg-zinc-900/40 border-red-900/30 hover:border-red-500/50 cursor-pointer group transition-all hover:bg-zinc-900/60 p-6 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-zinc-950 rounded-lg border border-white/5 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                            {project.id === 1 ? '💸' : project.id === 2 ? '♻️' : '🚀'}
                        </div>
                        <div>
                             <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">{project.title}</h3>
                             <p className="text-sm text-zinc-500">{project.type}</p>
                        </div>
                    </div>
                    <div className="hidden md:flex gap-2">
                        {project.tech.slice(0, 3).map(t => (
                            <span key={t} className="text-xs text-zinc-400 bg-white/5 px-2 py-1 rounded border border-white/5">
                                {t}
                            </span>
                        ))}
                        {project.tech.length > 3 && <span className="text-xs text-zinc-500 px-2 py-1">+{project.tech.length - 3}</span>}
                    </div>
                </Card>
            </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedProject(null)}
                    className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                />
                
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative z-10 bg-zinc-900 border border-red-500/30 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl shadow-red-900/20"
                >
                    <div className="h-32 bg-gradient-to-r from-red-600/20 to-orange-600/20 flex items-center justify-center border-b border-white/5 relative">
                        <button 
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/10 rounded-full transition-colors text-white"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <h2 className="text-3xl font-heading font-bold text-white tracking-wider">{selectedProject.title}</h2>
                    </div>
                    
                    <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                        
                        <div className="space-y-2">
                            <h4 className="text-red-400 font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                                <Layers className="w-4 h-4" /> Mission Brief
                            </h4>
                            <p className="text-zinc-300 leading-relaxed">
                                {selectedProject.desc}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-orange-400 font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                                <Code className="w-4 h-4" /> Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tech.map(t => (
                                    <span key={t} className="text-sm text-white bg-zinc-800 px-3 py-1 rounded-full border border-white/10">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                         <div className="space-y-2">
                            <h4 className="text-blue-400 font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                                <BookOpen className="w-4 h-4" /> Key Learnings
                            </h4>
                            <p className="text-zinc-300 leading-relaxed bg-blue-900/10 p-4 rounded-xl border border-blue-500/10">
                                {selectedProject.learnings}
                            </p>
                        </div>

                        <div className="pt-6 flex gap-4">
                            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                                <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white border border-white/10 flex items-center justify-center gap-2">
                                    <Github className="w-4 h-4" /> Authenticate Source
                                </Button>
                            </a>
                        </div>

                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </section>
  )
}

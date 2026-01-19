import { motion } from 'framer-motion'
import { Calendar, Briefcase, Award, GraduationCap } from 'lucide-react'

const milestones = [
  { 
    id: 1, 
    role: 'Summer Intern', 
    company: 'Methd AI', 
    date: 'Aug 2024 - Jan 2025',
    desc: 'Studied Machine Learning fundamentals and trained basic models. Gained exposure to AI-driven web/mobile apps and CI/CD pipelines.',
    type: 'work',
    xp: 2500
  },
  { 
    id: 2, 
    role: 'Bachelors in Computer Application', 
    company: 'JaggaNath University', 
    date: '2022 - 2025',
    desc: 'Maintained 7.5 CGPA. Focused on Computer Science fundamentals, DSA, and System Design.',
    type: 'education',
    xp: 2000
  },
  { 
    id: 3, 
    role: 'Competitive Programming', 
    company: 'Self Mastery', 
    date: 'Ongoing',
    desc: 'Solved 800+ coding challenges across LeetCode, GeeksforGeeks, and CodeForces. Refined algorithmic thinking.',
    type: 'achievement',
    xp: 5000
  },
]

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 px-4 flex flex-col items-center justify-center relative">
       <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
          <span className="text-red-600">Timeline</span> Database
        </h2>
        <p className="text-zinc-500 max-w-xl mx-auto">
          Chronological record of career progression.
        </p>
      </div>

      <div className="max-w-4xl w-full relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-red-900/20 rounded-full" />

        <div className="space-y-12">
            {milestones.map((milestone, index) => (
                <motion.div 
                    key={milestone.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border-4 border-red-600 z-10 shadow-[0_0_15px_rgba(220,38,38,0.5)] flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                    </div>

                    {/* Content Card */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 p-6 bg-zinc-900/40 border border-white/5 rounded-2xl hover:border-red-600/30 transition-colors backdrop-blur-sm ${milestone.type === 'education' ? 'border-l-4 border-l-blue-500' : 'border-l-4 border-l-red-500'}`}>
                        <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                             <h3 className="text-xl font-bold text-white leading-tight">{milestone.role}</h3>
                        </div>
                        <div className="text-zinc-400 font-semibold mb-4 flex items-center gap-2 text-sm">
                            {milestone.type === 'education' ? <GraduationCap className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />} 
                            {milestone.company}
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                            {milestone.desc}
                        </p>
                        <div className="text-xs text-zinc-600 flex items-center gap-1 font-mono">
                            <Calendar className="w-3 h-3" /> {milestone.date}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}

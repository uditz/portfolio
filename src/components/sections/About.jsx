import { motion } from 'framer-motion'
import Card from '../ui/Card'

import { User, MapPin, Code, Database } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4 flex items-center justify-center relative bg-zinc-900/30">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Avatar / Stats Card */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <Card className="max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500 border-red-600/20 bg-black/80">
            <div className="relative mb-6">
              <div className="w-full h-64 bg-zinc-900 rounded-xl overflow-hidden mb-4 border border-white/5 group relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                {/* Avatar Placeholder */}
                <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-6xl grayscale group-hover:grayscale-0 transition-all duration-500">
                    👨‍💻
                </div>
              </div>
              <div className="absolute -bottom-6 w-full flex justify-center z-20">
                <div className="bg-black border border-red-600/50 px-6 py-2 rounded-full text-red-500 font-bold shadow-lg shadow-red-900/20">
                  Software Engineer
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-bold text-center text-white">Udit Narayan</h3>
              <div className="flex justify-between text-sm text-zinc-400 border-t border-white/5 pt-4">
                <div className="flex items-center gap-2">
                   <Code className="w-4 h-4 text-red-400" /> Backend Dev
                </div>
                <div className="flex items-center gap-2">
                   <MapPin className="w-4 h-4 text-red-400" /> Delhi, India
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Bio Text */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            <span className="text-red-600">About</span> The Player
          </h2>
          <p className="text-xl text-zinc-300 leading-relaxed">
            I am a Backend Developer with a strong focus on scalable architectures. 
            From <span className="text-red-400">Spring Boot</span> to <span className="text-red-400">AI-driven apps</span>, 
            I build the engines that power modern digital experiences.
          </p>
          <p className="text-zinc-500 leading-relaxed">
            Gained exposure to AI-driven web/mobile apps and assisted in understanding model deployment and CI/CD pipelines.
            Solid foundation in DSA and System Design.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="p-4 bg-red-900/10 rounded-xl border border-red-500/10">
                <div className="text-2xl font-bold text-red-500 mb-1">800+</div>
                <div className="text-sm text-zinc-400">LeetCode/GFG Problems Solved</div>
            </div>
            <div className="p-4 bg-red-900/10 rounded-xl border border-red-500/10">
                <div className="text-2xl font-bold text-orange-500 mb-1">Internship</div>
                <div className="text-sm text-zinc-400">Methd AI (Summer 2024)</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

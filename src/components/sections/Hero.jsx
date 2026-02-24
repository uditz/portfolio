import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Button from '../ui/Button'


export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative px-4 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(220,38,38,0.15),transparent_50%)]" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        <span className="text-red-400 font-bold tracking-[0.3em] uppercase mb-4 block">Backend Specialist</span>
        <h1 className="text-6xl md:text-8xl font-heading font-black mb-6 leading-tight">
          <span className="text-white">JAVA</span>
          <span className="text-red-600 text-4xl md:text-6xl align-top mx-2">&</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-600 drop-shadow-glow">SPRING BOOT</span>
        </h1>
        
        <p className="text-zinc-400 text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Building scalable, high-performance backend systems. 
          Focusing on <span className="text-white font-semibold">Microservices</span>, <span className="text-white font-semibold">Cloud Architecture</span>, and <span className="text-white font-semibold">AI Integration</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* <a href={resumePDF} download="Udit_Resume_developer.pdf">
            <Button variant="primary">Download CV</Button>
          </a> */}
          <Button variant="outline" className="border-red-600 text-red-500 hover:bg-red-600/10">Contact Me</Button>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  )
}

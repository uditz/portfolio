import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { Send, Mail, Linkedin, Github, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 flex flex-col items-center justify-center relative override-hidden bg-black">
       {/* Boss Battle Background */}
       <div className="absolute inset-0 bg-red-900/10 radial-gradient" />
       
       <div className="relative z-10 max-w-4xl w-full text-center">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <span className="text-red-600 font-bold tracking-[0.5em] uppercase animate-pulse block mb-4">Final Stage</span>
                <h2 className="text-5xl md:text-7xl font-heading font-black text-white mb-6 drop-shadow-lg">
                    RECRUIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">UNIT</span>
                </h2>
                <p className="text-zinc-500 text-xl max-w-2xl mx-auto">
                    Initiate protocol to acquire developer resources.
                </p>
            </motion.div>

            <div className="mt-16 flex justify-center gap-8 flex-wrap">
                <a href="tel:+919582482249" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
                    <Phone className="w-5 h-5 text-red-600 group-hover:animate-bounce" />
                    <span>+91 9582482249</span>
                </a>
                <a href="mailto:uditz2004@gmail.com" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
                    <Mail className="w-5 h-5 text-red-600 group-hover:animate-bounce" />
                    <span>uditz2004@gmail.com</span>
                </a>
                <div className="w-full flex justify-center gap-6 mt-4">
                    <a href="https://www.linkedin.com/in/udit-n-4b02b4239" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-lg border border-red-900/30 hover:bg-linkedin hover:border-linkedin text-zinc-400 hover:text-white transition-all hover:scale-110">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/uditz" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-lg border border-red-900/30 hover:bg-black hover:border-white text-zinc-400 hover:text-white transition-all hover:scale-110">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://leetcode.com/u/The_udit00/" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-lg border border-red-900/30 hover:bg-yellow-600 hover:border-yellow-400 text-zinc-400 hover:text-white transition-all hover:scale-110 flex items-center justify-center font-heading font-bold text-xl">
                        LC
                    </a>
                </div>
            </div>
       </div>
    </section>
  )
}

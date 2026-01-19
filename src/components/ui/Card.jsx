import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

export default function Card({ children, className, ...props }) {
  return (
    <motion.div
      className={cn(
        "bg-slate-900/50 backdrop-blur border border-white/5 rounded-2xl p-6",
        "hover:border-primary/30 transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

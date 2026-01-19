import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

export default function ProgressBar({ value, max, className }) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))

  return (
    <div className={cn("h-4 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800", className)}>
      <motion.div 
        className="h-full bg-gradient-to-r from-red-600 to-orange-600 box-shadow-glow"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
      />
    </div>
  )
}

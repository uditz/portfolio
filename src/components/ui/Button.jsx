import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

export default function Button({ children, onClick, className, variant = 'primary', ...props }) {
  const variants = {
    primary: "bg-primary text-black shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]",
    secondary: "bg-secondary text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
    ghost: "text-slate-400 hover:text-white hover:bg-white/5"
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "px-6 py-3 rounded-xl font-heading font-bold tracking-wide transition-all",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}

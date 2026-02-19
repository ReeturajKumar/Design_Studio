import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Work() {
  const ease = [0.22, 1, 0.36, 1]

  return (
    <section className="relative bg-black pt-15 pb-2 md:pt-18 md:pb-4 lg:pt-18 lg:pb-5 flex flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* Subtle Cinematic Olive Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[#A2B64E]/[0.05] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Heading - Split for Directional Animation */}
        <h2 className="text-white text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-[0.95] mb-6">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease }}
            className="block"
          >
            We innovate,
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.1 }}
            className="text-white/40 block"
          >
            therefore we lead
          </motion.div>
        </h2>

        {/* Subheading - Rise from bottom */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.4 }}
          className="text-white/30 text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase mb-10"
        >
          Transforming ambitious visions into scalable reality
        </motion.p>

        {/* Action Button - Compact Pill */}
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.5 }}
          className="group relative px-8 py-3.5 rounded-full border border-white/20 hover:border-white transition-all duration-500 overflow-hidden"
        >
          <div className="flex items-center gap-3">
            <span className="text-white/80 group-hover:text-white font-semibold text-xs transition-colors">Explore Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </div>
          {/* Subtle button fill on hover */}
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      </div>

    </section>
  )
}

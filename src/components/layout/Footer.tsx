import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const ease = [0.22, 1, 0.36, 1]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.2, ease } 
    }
  }

  return (
    <footer className="bg-black py-6 sm:py-8 md:py-12 px-3 sm:px-6 md:px-12 lg:px-20">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-[1400px] mx-auto relative rounded-[24px] sm:rounded-[40px] md:rounded-[48px] lg:rounded-[56px] overflow-hidden will-change-transform transform-gpu"
      >
        
        {/* Main Footer Gradient Box */}
        <div className="bg-gradient-to-br from-[#77C1B2] via-[#A8E9CF] to-[#5FD2B1] pt-10 pb-6 sm:pt-16 sm:pb-10 md:pt-24 md:pb-12 px-4 sm:px-8 md:px-16 text-center relative flex flex-col items-center">
          
          {/* Top Subheading */}
          <motion.p variants={itemVariants} className="text-[#0F3B32] text-sm sm:text-lg md:text-2xl lg:text-3xl font-medium italic tracking-tight mb-2 sm:mb-3">
            Have a something <span className="font-normal opacity-70">in Mind?</span>
          </motion.p>

          {/* Main Heading - More aggressive scaling */}
          <motion.h2 variants={itemVariants} className="text-[#0F3B32] text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 sm:mb-10 md:mb-16 max-w-[90%] mx-auto">
            Get Connected
          </motion.h2>

          {/* Contact Us Tab Button - Using relative on mobile to prevent overlap */}
          <motion.div variants={itemVariants} className="md:absolute left-1/2 md:-translate-x-1/2 md:bottom-[90px] w-full px-2 sm:px-0 sm:w-auto z-10">
            <button className="group flex items-center justify-center gap-3 bg-[#0F3B32]/10 backdrop-blur-xl w-full sm:w-auto px-6 sm:px-12 py-3.5 md:py-4 rounded-t-[16px] sm:rounded-t-[32px] border-x border-t border-[#0F3B32]/10 transition-all duration-500 hover:bg-[#0F3B32]/20">
              <span className="text-[#0F3B32] font-bold text-xs md:text-sm uppercase tracking-wider">Contact us</span>
              <ArrowRight className="w-3.5 md:w-4 h-3.5 md:h-4 text-[#0F3B32] group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Bottom Navigation Links Bar */}
          <motion.div variants={itemVariants} className="w-full mt-10 sm:mt-16 md:mt-24 pt-6 border-t border-[#0F3B32]/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
            
            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-6">
              {["Twitter", "Instagram", "Linkedin", "Behance", "Dribbble"].map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="text-[#0F3B32] text-[8px] xs:text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-3 text-[#0F3B32] text-[8px] xs:text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-widest opacity-60">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
              <span>|</span>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
              <span>|</span>
              <a href="#" className="hover:opacity-100 transition-opacity">Cookies</a>
              <span>|</span>
              <a href="#" className="hover:opacity-100 transition-opacity">Map</a>
            </div>
          </motion.div>
          
          {/* Subtle Ambient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </footer>
  )
}

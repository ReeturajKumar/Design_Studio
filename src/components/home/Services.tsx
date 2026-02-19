import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import img from "../../assets/service.webp"

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  }

  const rightItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section className="bg-black py-12 px-5 md:px-12 lg:px-20 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-[1400px] mx-auto bg-[#111111] rounded-[40px] md:rounded-[56px] lg:rounded-[64px] p-6 md:p-12 relative overflow-hidden border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
      >
        
        {/* Top Section: Card & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 mb-12 items-center">
          
          {/* Service Card 1: Product Strategy */}
          <motion.div 
            variants={cardVariants}
            className="relative rounded-[32px] md:rounded-[40px] overflow-hidden h-[240px] md:h-[300px] lg:h-[380px] group cursor-pointer border border-white/10 hover:border-white/20 transition-all duration-700 will-change-transform transform-gpu"
          >
            <motion.img 
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              src={img} 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" 
              alt="Art Character" 
            />
            {/* Ultra Glass Overlay */}
            <div className="absolute inset-y-0 left-0 w-[55%] sm:w-[50%] md:w-[45%] bg-black/40 backdrop-blur-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-center rounded-l-[inherit]">
              <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter leading-[1] mb-3 md:mb-5">
                Product <br className="hidden sm:block" /> Strategy
              </h3>
              <p className="text-white/50 text-[10px] sm:text-xs lg:text-sm leading-relaxed font-medium max-w-[220px]">
                Bridging the gap between business goals and elite user needs with data-driven roadmaps.
              </p>
            </div>
            {/* Floating Action Button */}
            <div className="absolute top-5 right-5 sm:top-8 sm:right-8 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:bg-[#A2B64E] group-hover:rotate-45">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-black" />
            </div>
          </motion.div>

          {/* Right Text Content */}
          <motion.div variants={rightItemVariants} className="lg:pl-8">
            <h2 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 md:mb-8 leading-[0.9]">
              Elite <br className="hidden lg:block"/> Solutions
            </h2>
            <p className="text-white/60 text-base md:text-lg lg:text-xl leading-relaxed max-w-[550px] font-medium tracking-tight">
              We are a specialized design agency building the future of digital platforms. 
              We partner with visionaries to craft scalable design systems and 
              high-performance product experiences that redefine industries.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section: Heading & Team Pill */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 md:gap-12">
          
          {/* Section Subheading */}
          <motion.div variants={rightItemVariants} className="max-w-md w-full">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[0.95] uppercase">
              for ambitious {" "}
              <span className="opacity-100 italic font-medium text-white/40">brands!</span>
            </h2>
          </motion.div>

          {/* Modern Team Pill - Highly Responsive */}
          <motion.div 
            variants={cardVariants}
            className="bg-gradient-to-r from-[#69D8B1] to-[#4EB696] rounded-3xl sm:rounded-full p-3 sm:pl-8 flex flex-col sm:flex-row items-center justify-between group cursor-pointer hover:shadow-[0_20px_60px_rgba(78,182,150,0.3)] transition-all duration-700 w-full lg:max-w-fit gap-4 sm:gap-10 will-change-transform transform-gpu"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
              {/* Refined Avatar Stack */}
              <div className="flex -space-x-3.5">
                {[1, 2, 3, 4].map((i) => (
                   <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/20 overflow-hidden bg-[#222]">
                    <img src={`https://i.pravatar.cc/150?u=${i + 45}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center font-bold text-white text-[10px] md:text-xs">
                  50+
                </div>
              </div>
              <p className="text-[#07241E] text-[11px] md:text-sm font-bold italic tracking-tight leading-tight text-center sm:text-left">
                Elite Designers <br /> & Engineers
              </p>
            </div>
            
            <div className="w-full sm:w-10 sm:h-10 md:w-12 md:h-12 py-3 sm:py-0 rounded-2xl sm:rounded-full bg-white flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-[-45deg]">
              <ArrowRight className="w-5 md:w-6 h-5 md:h-6 text-black" />
            </div>
          </motion.div>
        </div>

        {/* Cinematic Lighting Effect */}
        <div className="absolute -bottom-40 -left-20 w-[600px] h-[600px] bg-[#69D8B1]/[0.05] blur-[120px] rounded-full pointer-events-none" />
      </motion.div>
    </section>
  )
}

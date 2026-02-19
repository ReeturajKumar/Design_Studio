import { ArrowRight, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import img from '../../assets/hero.webp'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const bgVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1] // Smooth out-expo easing
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1.4, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  }

  const rightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <section className="relative w-full min-h-[100dvh] md:h-screen bg-[#A2B64E] overflow-hidden font-sans">
      
      {/* Character Image - Centered and Scale for impact */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
      >
         <img 
            src={img} 
            className="w-full h-full object-cover object-center" 
            alt="Hero Character"
         />
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 w-full min-h-[100dvh] md:h-full flex flex-col lg:flex-row px-6 pt-20 pb-10 lg:px-24 lg:pb-16 lg:pt-32"
      >
        {/* Left Side: Heading & Bio/Scroll */}
        <div className="flex-1 flex flex-col justify-between h-auto lg:h-full">
          {/* L-Shaped Notched Heading Container - Final Seamless Geometry */}
          <div className="flex flex-col items-start origin-top-left filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            {/* Top Segment */}
            <motion.div 
              variants={bgVariants}
              className="bg-[#3D441E]/80 backdrop-blur-3xl px-6 md:px-12 py-3 md:py-10 lg:py-6
              rounded-tl-[24px] md:rounded-tl-[48px] lg:rounded-tl-[56px] 
              rounded-tr-[24px] md:rounded-tr-[48px] lg:rounded-tr-[56px] 
              rounded-br-[24px] md:rounded-br-[48px] lg:rounded-br-[56px] 
              rounded-bl-none  relative z-20 w-fit will-change-transform transform-gpu"
            >
               <motion.h1 variants={textVariants} className="text-[#E1EACD] text-4xl sm:text-5xl md:text-6xl lg:text-[7rem] font-bold leading-[0.8] tracking-tighter whitespace-nowrap">
                 Design That
               </motion.h1>
            </motion.div>
            
            {/* Bottom Segment */}
            <div className="relative flex items-start z-10 -mt-[1px]">
              <motion.div 
                variants={bgVariants}
                className="bg-[#3D441E]/80 backdrop-blur-3xl px-6 md:px-12 py-3 md:py-10 lg:py-6 
                rounded-tl-none rounded-tr-none 
                rounded-bl-[24px] md:rounded-bl-[48px] lg:rounded-bl-[56px] 
                rounded-br-[24px] md:rounded-br-[48px] lg:rounded-br-[56px] 
                 relative z-20 will-change-transform transform-gpu"
              >
                 <motion.h1 variants={textVariants} className="text-[#E1EACD] text-4xl sm:text-5xl md:text-6xl lg:text-[7rem] font-bold leading-[0.8] tracking-tighter whitespace-nowrap">
                   Converts
                 </motion.h1>
              </motion.div>
              
              {/* Seamless Concave Integration Helper */}
              <motion.div 
                variants={bgVariants}
                className="absolute top-0 left-full -translate-x-[1px] w-6 h-6 md:w-16 md:h-16 pointer-events-none z-30"
              >
                <div className="w-full h-full bg-[#3D441E]/80 backdrop-blur-3xl relative">
                  <div className="absolute inset-0 bg-[#A2B64E] 
                    rounded-tl-[24px] md:rounded-tl-[48px] lg:rounded-tl-[56px] 
                    border-t border-l border-white/10 -translate-x-[1px] -translate-y-[1px]"></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Lower Left: Inline Scroll & Bio */}
          <motion.div 
            variants={textVariants}
            className="flex flex-col md:flex-row items-center gap-4 md:gap-10 pb-4 lg:pb-8 mt-8 lg:mt-0 order-3 lg:order-none"
          >
             <div className="relative w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-full border border-white/40 flex flex-col items-center justify-center gap-0.5 group cursor-pointer hover:bg-black hover:text-white transition-all duration-500 hover:border-black">
                <span className="text-[6px] md:text-[7px] font-black uppercase tracking-widest leading-none opacity-60">Scroll</span>
                <ArrowDown className="w-3 md:w-3.5 h-3 md:h-3.5 group-hover:animate-bounce mt-1" />
             </div>
             <p className="text-white text-[12px] md:text-[15px] font-medium leading-relaxed max-w-[420px] text-center md:text-left opacity-90 px-2">
                We partner with ambitious startups and global companies to build 
                high-performance digital platforms.
             </p>
          </motion.div>
        </div>

        {/* Right Side: Stats & Project Cards */}
        <div className="flex flex-col justify-between h-auto lg:h-full items-center lg:items-end lg:pr-12 md:pb-15 pt-6 lg:pt-4 w-full lg:w-auto">
          
          {/* Top Right Stats - Responsive Layout */}
          <motion.div 
            variants={rightVariants}
            className="flex items-start justify-between sm:justify-end gap-x-6 gap-y-4 md:gap-10 mb-6 lg:mb-0 w-full sm:w-auto px-4 sm:px-0"
          >
             <div className="group text-left sm:text-right">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1B1B] leading-none tracking-tighter">520+</div>
                <div className="text-[7px] sm:text-[8px] font-black text-white uppercase tracking-[0.3em] mt-2 md:mt-2.5">Global Launches</div>
             </div>
             <div className="group text-left sm:text-right">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1B1B] leading-none tracking-tighter">120+</div>
                <div className="text-[7px] sm:text-[8px] font-black text-white uppercase tracking-[0.3em] mt-2 md:mt-2.5">Ambitious Startups</div>
             </div>
          </motion.div>
 
          {/* Project Card Stack - Hidden on small screens */}
          <motion.div 
            variants={rightVariants}
            className="hidden md:flex flex-col items-center lg:items-end lg:translate-y-20 mb-20 md:mb-12 lg:mb-0"
          >
             <div className="relative w-[260px] md:w-[300px] h-[340px] md:h-[400px] flex items-center justify-center rotate-[5deg]">
                {["01", "02", "03"].map((step, i) => (
                   <motion.div 
                      key={step}
                      initial={{ opacity: 0, x: 30, rotate: 8 + i * 4 }}
                      whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                      transition={{ 
                        delay: 0.4 + i * 0.08, 
                        duration: 1, 
                        ease: [0.22, 1, 0.36, 1] 
                      }}
                      className={`absolute w-full h-full rounded-[40px] md:rounded-[60px] backdrop-blur-3xl border transition-all duration-1000 will-change-transform transform-gpu
                         ${step === "03" ? "bg-[#2D3316] text-white z-30 shadow-[0_40px_100px_rgba(0,0,0,0.3)] border-white/10" : "bg-[#3D441E]/80 z-10 opacity-100 border-white/20"}
                      `}
                      style={{
                         right: `var(--card-offset-x-${i})`,
                         top: `var(--card-offset-y-${i})`,
                         transform: `scale(${0.82 + (i * 0.09)})`,
                         '--card-offset-x-0': '40px', '--card-offset-y-0': '-10px',
                         '--card-offset-x-1': '20px', '--card-offset-y-1': '-5px',
                         '--card-offset-x-2': '0px', '--card-offset-y-2': '0px',
                      } as any}
                   >
                      <style dangerouslySetInnerHTML={{ __html: `
                        @media (min-width: 768px) {
                          div[style*="--card-offset-x-0"] { --card-offset-x-0: 170px !important; --card-offset-y-0: -50px !important; }
                          div[style*="--card-offset-x-1"] { --card-offset-x-1: 85px !important; --card-offset-y-1: -25px !important; }
                        }
                      `}} />
                      <div className="p-8 md:p-12 flex flex-col justify-between h-full -rotate-[8deg]">
                         <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none">{step}</span>
                         {step === "03" && (
                            <div className="flex items-end justify-between">
                               <p className="text-[14px] md:text-[16px] font-medium leading-tight text-white/90">
                                  SaaS Platform <br /> Design
                                </p>
                               <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5 -rotate-45" />
                                </div>
                            </div>
                         )}
                      </div>
                   </motion.div>
                ))}
             </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  )
}

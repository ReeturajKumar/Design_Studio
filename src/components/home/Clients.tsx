import { motion } from "framer-motion"

export default function Clients() {
  const row1 = [
    "SECLOCK", "travelers.", "amazon", "Microsoft", "Google", "Apple"
  ]
  
  const row2 = [
    "COMMVAULT", "Software AG", "aumni", "Oracle", "Meta", "Netflix"
  ]

  const ease = [0.22, 1, 0.36, 1]

  return (
    <section className="bg-black py-10 md:py-16 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 60, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.8, ease }}
        className="max-w-[1400px] mx-auto text-center px-6 mb-8 md:mb-12 will-change-transform transform-gpu"
      >
        <h2 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter italic mb-3">
          Feature Clients
        </h2>
        <p className="text-white/30 text-[10px] sm:text-xs md:text-sm font-medium tracking-widest uppercase">
          Trusted by the 150+ companies
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.4, ease, delay: 0.4 }}
        className="flex flex-col gap-4 md:gap-6"
      >
        {/* Row 1: Left to Right */}
        <div className="flex whitespace-nowrap overflow-hidden group">
          <div className="flex gap-4 md:gap-8 animate-marquee-right shrink-0">
            {[...row1, ...row1, ...row1, ...row1].map((client, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 min-w-[140px] sm:min-w-[200px] md:min-w-[280px] h-14 sm:h-20 md:h-24 rounded-full border border-white/10 flex items-center justify-center px-6 sm:px-10 hover:border-white/30 transition-all duration-500 group-hover:bg-white/5 cursor-pointer"
              >
                <span className="text-white/40 group-hover:text-white text-base sm:text-2xl md:text-3xl font-bold tracking-tight uppercase transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex whitespace-nowrap overflow-hidden group">
          <div className="flex gap-4 md:gap-8 animate-marquee-left shrink-0">
            {[...row2, ...row2, ...row2, ...row2].map((client, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 min-w-[140px] sm:min-w-[200px] md:min-w-[280px] h-14 sm:h-20 md:h-24 rounded-full border border-white/10 flex items-center justify-center px-6 sm:px-10 hover:border-white/30 transition-all duration-500 group-hover:bg-white/5 cursor-pointer"
              >
                <span className="text-white/40 group-hover:text-white text-base sm:text-2xl md:text-3xl font-bold tracking-tight uppercase transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 45s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 45s linear infinite;
        }
        .group:hover .animate-marquee-left,
        .group:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}} />
    </section>
  )
}

import { motion } from "framer-motion"
import feturedImg from "../../assets/Fetured.webp"

export default function FeaturedWork() {
  return (
    <section className="bg-black pt-2 pb-2 md:pt-4 md:pb-4 lg:pt-6 lg:pb-6 px-0 md:px-12 lg:px-32 relative">
      <div className="max-w-[1100px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 100, scale: 0.7, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ 
            duration: 2, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="relative rounded-[0px] xs:rounded-[24px] md:rounded-[48px] lg:rounded-[64px] overflow-hidden shadow-2xl will-change-transform transform-gpu"
        >
          <img 
            src={feturedImg} 
            className="w-full h-auto block" 
            alt="Featured Design Showcase" 
          />
        </motion.div>
      </div>
    </section>
  )
}

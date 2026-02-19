import { motion } from "framer-motion"
import feturedImg from "../../assets/Fetured.webp"

export default function FeaturedWork() {
  return (
    <section className="bg-black pt-2 pb-2 md:pt-4 md:pb-4 lg:pt-6 lg:pb-6 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 200, scale: 0.8, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ 
            duration: 1.8, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="relative rounded-[32px] md:rounded-[48px] lg:rounded-[64px] overflow-hidden will-change-transform transform-gpu"
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

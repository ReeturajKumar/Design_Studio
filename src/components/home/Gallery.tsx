import { ArrowLeft, ArrowRight } from "lucide-react"
import { useRef } from "react"
import { motion } from "framer-motion"
import img1 from "../../assets/Gal1.webp"
import img2 from "../../assets/Gal2.webp"
import img3 from "../../assets/Gal3.webp"
import img4 from "../../assets/Gal4.webp"
import img5 from "../../assets/Gal5.webp"
import img6 from "../../assets/Gal6.webp"

const galleryItems = [
  { id: 1, color: "#D1E983", aspect: "aspect-[3/4]", img: img1 },
  { id: 2, color: "#E5C1D8", aspect: "aspect-square", img: img2 },
  { id: 3, color: "#FF9CEE", aspect: "aspect-[3/4]", img: img3 },
  { id: 4, color: "#D1E983", aspect: "aspect-[3/4]", img: img4 },
  { id: 5, color: "#FFB088", aspect: "aspect-[3/4]", img: img5 },
  { id: 6, color: "#A2B64E", aspect: "aspect-square", img: img6 },
]

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null)
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

  const headerVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.2, ease } 
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -100, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 1.4, ease } 
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-black py-12 md:py-16 overflow-hidden relative group/gallery uppercase">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-10 mb-8 md:mb-10"
      >
        <div className="flex items-center justify-between">
          <motion.h2 variants={headerVariants} className="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter italic">
            Our Gallery
          </motion.h2>
          
          <motion.div variants={headerVariants} className="flex items-center gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-white hover:text-white transition-all duration-500"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-white hover:text-white transition-all duration-500"
            >
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Gallery Carousel Container */}
      <div className="relative">
        <motion.div 
          ref={scrollRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
          className="flex gap-5 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 md:px-8 lg:px-[calc((100vw-1500px)/2+80px)] pb-8"
        >
          {galleryItems.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              className={`flex-shrink-0 ${item.aspect} h-[280px] md:h-[380px] lg:h-[450px] rounded-[32px] md:rounded-[48px] overflow-hidden snap-center transition-transform duration-700 hover:scale-[1.01] cursor-grab active:cursor-grabbing shadow-lg will-change-transform transform-gpu`}
              style={{ backgroundColor: item.color }}
            >
              <img 
                src={item.img} 
                className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-1000 hover:scale-110" 
                alt="Gallery Item"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  )
}

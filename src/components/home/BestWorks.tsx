import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import img1 from "../../assets/Work1.webp"
import img2 from "../../assets/Work2.webp"
import img3 from "../../assets/Work3.webp"
import img4 from "../../assets/Work4.webp"

const projects = [
  {
    id: 1,
    title: "Cybernetic Branding",
    worksCount: "14 Case Studies",
    image: img1,
    color: "#8FA3FF"
  },
  {
    id: 2,
    title: "Fintech Experience",
    worksCount: "22 Case Studies",
    image: img2,
    color: "#B4E197"
  },
  {
    id: 3,
    title: "Holographic Systems",
    worksCount: "09 Case Studies",
    image: img3,
    color: "#FFD966"
  },
  {
    id: 4,
    title: "SaaS Motion Art",
    worksCount: "11 Case Studies",
    image: img4,
    color: "#F4BEEE"
  }
]

export default function BestWorks() {
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
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.2, ease } 
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 1.2, ease }
    }
  }

  return (
    <section className="bg-black pt-4 pb-20 px-5 md:px-12 lg:px-20 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-[1400px] mx-auto"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 md:mb-12 px-2">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter italic">
            Our Best Works
          </h2>
          
          <button className="group flex items-center gap-3 w-fit px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-white/20 hover:border-white transition-all duration-500">
            <span className="text-white/80 group-hover:text-white font-medium text-xs sm:text-sm">View All</span>
            <ArrowRight className="w-4 h-4 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </button>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={cardVariants}
              className="group cursor-pointer will-change-transform transform-gpu"
            >
              {/* Image Container with precise adaptive rounding */}
              <div 
                className="relative aspect-[4/5] rounded-[32px] sm:rounded-[40px] lg:rounded-[48px] overflow-hidden mb-4 sm:mb-6 transition-transform duration-700 group-hover:scale-[0.98]"
                style={{ backgroundColor: project.color }}
              >
                <img 
                  src={project.image} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt={project.title} 
                />
              </div>

              {/* Text Meta Content */}
              <motion.div variants={itemVariants} className="px-3 sm:px-4">
                <div className="flex items-center justify-between group/title mb-0.5 sm:mb-1">
                  <h3 className="text-white text-base sm:text-lg lg:text-xl font-medium tracking-tight group-hover/title:text-white/70 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/60 group-hover/title:translate-x-1 group-hover/title:text-white transition-all" />
                </div>
                <p className="text-white/40 text-[11px] sm:text-sm font-medium uppercase tracking-wider">
                  {project.worksCount}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

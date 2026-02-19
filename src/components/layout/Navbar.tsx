import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const ease = [0.22, 1, 0.36, 1]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav 
      style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
      className={`fixed z-50 transition-all duration-400 left-1/2 -translate-x-1/2 flex items-center justify-center ${
      isScrolled 
        ? "top-6 w-[92%] xl:w-fit max-w-6xl bg-white/20 backdrop-blur-3xl rounded-full border border-white/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] py-1.5" 
        : "top-0 w-full py-0 bg-transparent border-transparent"
    }`}>
      <div 
        style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
        className={`w-full flex items-center justify-between transition-all duration-400 ${
        isScrolled ? "px-6 md:px-10 h-14 md:h-16 gap-10 md:gap-16" : "max-w-[1500px] px-6 md:px-12 h-20 md:h-24"
      }`}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.1 }}
          className="flex items-center gap-4 md:gap-8"
        >
          {/* Studio Branding */}
          <div className={`flex items-center gap-1 font-bold tracking-tighter text-[#1B1B1B] transition-all duration-500 ${
            isScrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
          }`}>
            Studio
          </div>

          {/* Left-Aligned Navigation Pill - Desktop */}
          <nav className={`hidden lg:flex items-center rounded-full px-1.5 py-1.5 gap-1 transition-all duration-500 ${
            isScrolled ? "bg-transparent" : "bg-black/5 backdrop-blur-md border border-black/5"
          }`}>
            <Button variant="ghost" className={`rounded-full px-6 md:px-8 h-10 md:h-12 font-bold transition-all ${
              isScrolled ? "text-[#1B1B1B]/70 hover:text-[#1B1B1B]" : "bg-[#3D441E] text-white hover:bg-[#3D441E]/90"
            }`}>Home</Button>
            <Button variant="ghost" className="rounded-full px-6 md:px-8 h-10 md:h-12 text-[#1B1B1B]/60 hover:text-[#1B1B1B] font-bold">Products</Button>
            <Button variant="ghost" className="rounded-full px-6 md:px-8 h-10 md:h-12 text-[#1B1B1B]/60 hover:text-[#1B1B1B] font-bold">About us</Button>
            <Button variant="ghost" className="rounded-full px-6 md:px-8 h-10 md:h-12 text-[#1B1B1B]/60 hover:text-[#1B1B1B] font-bold">Portfolio</Button>
          </nav>
        </motion.div>

        {/* Action Buttons - Desktop */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.1 }}
          className="hidden md:flex items-center gap-3 md:gap-4"
        >
          <Button variant="outline" className={`hidden lg:flex rounded-full border-[#1B1B1B] text-[#1B1B1B] font-bold transition-all duration-500 ${
            isScrolled ? "px-6 h-10 border-[#1B1B1B]/30 text-white" : "px-8 md:px-10 h-12 md:h-14 bg-transparent hover:bg-[#1B1B1B] hover:text-white"
          }`}>
            Account
          </Button>
          <Button className={`rounded-full bg-[#3D441E] text-white hover:bg-[#3D441E]/90 font-bold shadow-xl transition-all duration-500 ${
            isScrolled ? "px-6 h-10 text-xs shadow-none" : "px-8 md:px-10 h-12 md:h-14 shadow-[#3D441E]/20"
          }`}>
            Contact Us
          </Button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#1B1B1B] hover:bg-black/5 rounded-full transition-all"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-8 h-8 md:w-6 md:h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#A2B64E] z-[60] transition-transform duration-500 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full bg-[#E1EACD]">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-1 font-bold text-3xl tracking-tighter text-[#1B1B1B]">
              Studio<span className="w-2.5 h-2.5 rounded-full bg-[#A2B64E] inline-block mb-1" />
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-[#1B1B1B] hover:bg-black/5 rounded-full transition-all"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          
          <div className="flex flex-col gap-5">
            {['Home', 'Products', 'About us', 'Portfolio'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-3xl md:text-4xl font-bold text-[#1B1B1B] tracking-tighter hover:text-[#3D441E] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <Button variant="outline" className="w-full rounded-full border-[#1B1B1B] h-14 text-[#1B1B1B] font-bold bg-transparent hover:bg-[#1B1B1B] hover:text-white transition-all text-lg">
              Account
            </Button>
            <Button className="w-full rounded-full bg-[#3D441E] text-white hover:bg-[#3D441E]/90 font-bold h-14 shadow-xl shadow-[#3D441E]/20 transition-all text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const ease = [0.22, 1, 0.36, 1]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'About us', href: '#' },
    { name: 'Portfolio', href: '#' }
  ]

  return (
    <>
      <nav 
        style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
        className={`fixed z-50 transition-all duration-500 left-1/2 -translate-x-1/2 flex items-center justify-center ${
        isScrolled 
          ? "top-6 w-[92%] xl:w-fit max-w-6xl bg-white/30 backdrop-blur-3xl rounded-full border border-white/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] py-1.5" 
          : "top-0 w-full py-0 bg-transparent border-transparent"
      }`}>
        <div 
          className={`w-full flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "px-6 md:px-10 h-14 md:h-16 gap-10 md:gap-16" : "max-w-[1500px] px-6 md:px-12 h-20 md:h-24"
        }`}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease }}
            className="flex items-center gap-4 md:gap-8"
          >
            {/* Studio Branding */}
            <div className={`flex items-center gap-1 font-bold tracking-tighter text-[#1B1B1B] transition-all duration-500 ${
              isScrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
            }`}>
              Studio<span className="w-1.5 h-1.5 rounded-full bg-[#3D441E] inline-block" />
            </div>

            {/* Left Desktop Nav */}
            <nav className={`hidden lg:flex items-center rounded-full px-1.5 py-1.5 gap-1 transition-all duration-500 ${
              isScrolled ? "bg-transparent" : "bg-black/5 backdrop-blur-md border border-black/5"
            }`}>
              {menuItems.map((item) => (
                <Button key={item.name} variant="ghost" className={`rounded-full px-6 md:px-8 h-10 md:h-12 font-bold transition-all ${
                  item.name === 'Home' && !isScrolled ? "bg-[#3D441E] text-white hover:bg-[#3D441E]/90" : "text-[#1B1B1B]/70 hover:text-[#1B1B1B] hover:bg-black/5"
                }`}>
                  {item.name}
                </Button>
              ))}
            </nav>
          </motion.div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 md:gap-4">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease }}
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
              transition={{ duration: 0.5, ease }}
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 text-[#1B1B1B] hover:bg-black/5 rounded-full transition-all"
            >
              <Menu className="w-8 h-8" />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#A2B64E] z-[70] lg:hidden flex flex-col"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 sm:p-8">
              <div className="flex items-center gap-1 font-bold text-3xl tracking-tighter text-white">
                Studio<span className="w-2.5 h-2.5 rounded-full bg-white inline-block mb-1" />
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-3 text-white bg-black/10 rounded-full active:scale-95 transition-all"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            {/* Centered Menu Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-4 px-8">
              {menuItems.map((item, i) => (
                <motion.a 
                  key={item.name} 
                  href={item.href} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease }}
                  className="text-4xl sm:text-5xl font-bold text-white tracking-tighter hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Bottom Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="p-8 pb-10 flex flex-col gap-3"
            >
              <Button variant="outline" className="w-full rounded-full border-white text-white h-14 bg-transparent hover:bg-white hover:text-[#A2B64E] transition-all text-lg font-bold">
                Account
              </Button>
              <Button className="w-full rounded-full bg-black text-white hover:bg-black/80 h-14 shadow-2xl transition-all text-lg font-bold">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

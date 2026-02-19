import Navbar from "./components/layout/Navbar"
import Hero from "./components/home/Hero"
import Services from "./components/home/Services"
import Work from "./components/home/Work"
import FeaturedWork from "./components/home/FeaturedWork"
import BoneShowcase from "./components/home/BoneShowcase"
import BestWorks from "./components/home/BestWorks"
import Gallery from "./components/home/Gallery"
import Clients from "./components/home/Clients"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <main className="min-h-screen selection:bg-primary selection:text-black bg-black">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <FeaturedWork />
      <BoneShowcase />
      <BestWorks />
      <Gallery />
      <Clients />
      <Footer />
    </main>
  )
}

export default App

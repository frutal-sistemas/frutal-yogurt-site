
import { motion } from "framer-motion"
import Image from "next/image"
import HeroBg from "/public/hero-yogurt.jpg"
import { LucideIceCream, LucidePhone, LucideMapPin } from "lucide-react"

export default function Home() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      <header className="relative h-screen">
        <Image src={HeroBg} layout="fill" objectFit="cover" alt="Frutal Yogurt Hero" priority />
        <div className="absolute inset-0 bg-pink-900 bg-opacity-60 flex flex-col items-center justify-center text-white text-center px-6">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-extrabold drop-shadow-lg">Frutal Yogurt</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 text-xl">Donde la fruta se vuelve felicidad 🍓🍦</motion.p>
        </div>
      </header>

      <section className="py-16 px-6 bg-yellow-50 text-center">
        <h2 className="text-4xl font-bold text-pink-700 mb-8">Nuestros Productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {['Nieve de Yogurt', 'Smoothies', 'Cono', 'Elote'].map((item, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <LucideIceCream className="text-pink-600 w-10 h-10 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-pink-700">{item}</h3>
              <p className="text-sm text-gray-500 mt-2">Sabor auténtico que te hará sonreír.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-pink-800 mb-6">Visítanos</h2>
        <div className="max-w-2xl mx-auto space-y-4 text-lg">
          <div className="flex items-center justify-center gap-3 text-pink-700">
            <LucidePhone className="w-6 h-6" />
            <span>20-89-52-85 | 81-33-27-72</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-pink-700">
            <LucideMapPin className="w-6 h-6" />
            <span>Monte Olimpo #1106, Col. Balcones de las Puentes, San Nicolás de los Garza, N.L.</span>
          </div>
        </div>
      </section>

      <footer className="bg-pink-900 text-white py-6 text-center">
        <p>&copy; 2025 Frutal Yogurt. Todos los derechos reservados.</p>
      </footer>
    </main>
  )
}

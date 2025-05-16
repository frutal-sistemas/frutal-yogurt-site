
import { motion } from "framer-motion"
import Image from "next/image"
import YogurtHero from "/public/hero-yogurt.jpg"

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-pink-50 to-yellow-50 font-sans text-gray-800">
      <header className="relative h-[70vh] w-full overflow-hidden">
        <Image src={YogurtHero} layout="fill" objectFit="cover" alt="Frutal Yogurt" priority />
        <div className="absolute inset-0 bg-pink-900 bg-opacity-50 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">Frutal Yogurt</h1>
            <p className="mt-4 text-xl md:text-2xl">Delicias frutales para toda la familia 🍓🍦</p>
          </motion.div>
        </div>
      </header>

      <section className="p-8 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold text-pink-800 mb-6"
        >
          Nuestros Productos Estrella
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Nieve de Yogurt", "Smoothies", "Elote", "Cono", "Ricco Frutal", "Remolino", "Yogurt Mix", "Frappe"].map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-lg font-medium text-pink-700">{p}</h3>
              <p className="text-sm text-gray-500 mt-2">¡Pruébalo y querrás más!</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-pink-50 py-12 px-8">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-center text-pink-800 mb-6">Sobre Nosotros</h2>
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <p><strong>Misión:</strong> Crear momentos de felicidad con productos de la más alta calidad y un servicio excepcional.</p>
            <p><strong>Visión:</strong> Ser una franquicia reconocida a nivel nacional por nuestra innovación y calidad.</p>
            <p><strong>Valores:</strong> Compromiso, Servicio, Honestidad, Calidad, Respeto, Trabajo en equipo, Asertividad.</p>
          </div>
        </motion.div>
      </section>

      <section className="p-8 text-center bg-yellow-50">
        <h2 className="text-3xl font-semibold text-pink-800 mb-4">Próximos Eventos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-white shadow rounded transition">
            <h3 className="font-bold text-lg text-pink-700">Septiembre</h3>
            <p>Ven y disfruta de nuestras promociones en las fiestas patrias.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-white shadow rounded transition">
            <h3 className="font-bold text-lg text-pink-700">Octubre</h3>
            <p>Descubre nuevos sabores como Cristóbal Colón descubrió América.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-white shadow rounded transition">
            <h3 className="font-bold text-lg text-pink-700">Noviembre</h3>
            <p>¡Con nuestras promociones hasta los muertos revivirán!</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-pink-100 py-12 text-center">
        <h2 className="text-3xl font-semibold text-pink-900 mb-4">Contáctanos</h2>
        <p>📞 20-89-52-85 | 81-33-27-72</p>
        <p>📍 Monte Olimpo #1106, Col. Balcones de las Puentes, San Nicolás de los Garza, N.L.</p>
      </section>

      <footer className="bg-pink-900 text-white py-4 text-center">
        <p>&copy; 2025 Frutal Yogurt. Todos los derechos reservados.</p>
      </footer>
    </main>
  )
}

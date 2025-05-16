
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-100 text-gray-800 font-sans">
      <header className="text-center p-12 bg-pink-200 shadow-md">
        <h1 className="text-5xl font-bold text-pink-900">Frutal Yogurt</h1>
        <p className="mt-4 text-xl text-pink-800">Delicias frutales para toda la familia 🍓🍦</p>
      </header>

      <section className="p-8 text-center">
        <h2 className="text-3xl font-semibold text-pink-800 mb-6">Nuestros Productos Estrella</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Nieve de Yogurt", "Smoothies", "Elote", "Cono", "Ricco Frutal", "Remolino", "Yogurt Mix", "Frappe"].map((p) => (
            <div key={p} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-medium text-pink-700">{p}</h3>
              <p className="text-sm text-gray-500 mt-2">¡Pruébalo y querrás más!</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-pink-50 py-12 px-8">
        <h2 className="text-3xl font-semibold text-center text-pink-800 mb-6">Sobre Nosotros</h2>
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <p><strong>Misión:</strong> Crear momentos de felicidad con productos de la más alta calidad y un servicio excepcional.</p>
          <p><strong>Visión:</strong> Ser una franquicia reconocida a nivel nacional por nuestra innovación y calidad.</p>
          <p><strong>Valores:</strong> Compromiso, Servicio, Honestidad, Calidad, Respeto, Trabajo en equipo, Asertividad.</p>
        </div>
      </section>

      <section className="p-8 text-center bg-yellow-50">
        <h2 className="text-3xl font-semibold text-pink-800 mb-4">Próximos Eventos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white shadow rounded">
            <h3 className="font-bold text-lg text-pink-700">Septiembre</h3>
            <p>Ven y disfruta de nuestras promociones en las fiestas patrias.</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h3 className="font-bold text-lg text-pink-700">Octubre</h3>
            <p>Descubre nuevos sabores como Cristóbal Colón descubrió América.</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h3 className="font-bold text-lg text-pink-700">Noviembre</h3>
            <p>¡Con nuestras promociones hasta los muertos revivirán!</p>
          </div>
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

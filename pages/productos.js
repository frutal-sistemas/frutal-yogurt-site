import Layout from '../components/Layout'

export default function Productos() {
  return (
    <Layout>
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-700 mb-6">Nuestros Productos</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Nieve de Yogurt', 'Smoothies', 'Elote', 'Cono', 'Yogurt Mix', 'Waffles'].map((item, i) => (
            <li key={i} className="bg-pink-50 p-4 rounded-xl shadow text-center text-pink-800 font-medium">{item}</li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
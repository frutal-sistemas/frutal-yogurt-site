import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-pink-100 to-white py-16 text-center">
        <h1 className="text-4xl font-bold text-pink-700">Bienvenido a Frutal Yogurt</h1>
        <p className="mt-4 text-lg text-pink-600">Deliciosos momentos con fruta, yogurt y sonrisas</p>
      </section>
    </Layout>
  )
}
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <nav className="bg-pink-600 text-white p-4 shadow-md">
        <ul className="flex gap-6 justify-center text-lg font-medium">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/nosotros">Nosotros</Link></li>
          <li><Link href="/productos">Productos</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer className="bg-pink-100 text-center text-sm text-pink-700 p-4 mt-16">© {new Date().getFullYear()} Frutal Yogurt</footer>
    </div>
  )
}
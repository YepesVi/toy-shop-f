import Link from "next/link"
import { LogIn } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="p-8">
            <header className="text-center mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Prueba Tecnica</h1>
              <p className="text-xl text-gray-600">Andrés Yepes</p>
            </header>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sobre mí</h2>
              <p className="text-gray-700">
              Soy un estudiante de ingeniería informática proactivo y altamente adaptable, con una sólida capacidad para resolver problemas tanto de forma individual como en equipo. Actualmente, busco mi primera experiencia laboral para aplicar y expandir mis conocimientos en un entorno profesional, aportando mi disposición para aprender y crecer continuamente.
              </p>
            </section>

            <div className="text-center">
              <Link href="/products">
                <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
                  <div className="flex justify-center  gap-2">
                  <LogIn></LogIn>
                  CRUD
                  </div>
                  
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


import React from 'react'
import { productos } from '../data/products'

const Confectionery = () => {

  return (
    <div>
      <section className="bg-orange-50 py-16" id='confectionery'>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-800 mb-4">Nuestros Dulces</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-orange-600 max-w-2xl mx-auto">
              Deléitate con nuestra selección de dulces artesanales, elaborados con amor y los mejores ingredientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Aquí puedes agregar tus productos de repostería */}
            {productos.filter(producto => producto.category === "repostería").map((producto, index) => (
              <div
                key={index}
                className="flex flex-row items-center bg-white border-gray-200 rounded-xl overflow-hidden shadow-sm md:max-w-xl hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden h-60 w-60 flex-shrink-0">
                  <img
                    src={producto.image}
                    alt={producto.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-orange-900 mb-2">{producto.name}</h3>
                  <p className="text-orange-700 mb-4">{producto.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Confectionery
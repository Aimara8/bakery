import React from 'react';

const breads = [
  {
    name: "Baguette",
    description: "Clásica baguette de masa madre con corteza crujiente y miga esponjosa.",
    image: "src/assets/baguette.webp"
  },
  {
    name: "Pan de Huevo",
    description: "Delicioso pan enriquecido con huevo, suave y aromático.",
    image: "src/assets/pan_de_huevo.jpg"
  },
  {
    name: "Barra Artesana",
    description: "Elaborada con harinas ecológicas y fermentación lenta.",
    image: "src/assets/barra_artesana.jpg"
  },
  {
    name: "Chapata",
    description: "Pan italiano con alveolos grandes y corteza dorada.",
    image: "src/assets/chapata.jpg"
  },
  {
    name: "Pan de Millo",
    description: "Tradicional gallego con harina de maíz, textura densa y sabrosa.",
    image: "src/assets/pan_de_millo.webp"
  }
];

const Bread = () => {
  return (
    <section className="bg-orange-50 py-16" id='bread'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-800 mb-4">Nuestros Panes</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-orange-600 max-w-2xl mx-auto">
            Descubre el auténtico sabor del pan artesano, elaborado con ingredientes naturales y procesos tradicionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {breads.map((bread, index) => (
            <div 
              key={index}
              className="flex flex-row items-center bg-white border-gray-200 rounded-xl overflow-hidden shadow-sm md:max-w-xl hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden h-60 w-60 flex-shrink-0">
                <img 
                  src={bread.image} 
                  alt={bread.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-orange-900 mb-2">{bread.name}</h3>
                <p className="text-orange-700 mb-4">{bread.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bread;
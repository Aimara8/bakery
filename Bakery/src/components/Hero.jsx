import React from 'react';
import ExportPDF from './ExportPDF';

const Hero = () => {
  // Función para exportar el PDF
  const generarPDF = ExportPDF();

  return (
    <section className="relative bg-gradient-to-br from-orange-700 via-amber-600 to-orange-50 text-white min-h-[calc(100vh-4.5rem)] flex items-center justify-center overflow-hidden" id='home'>
      {/* Overlay sutil para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      
      {/* Contenido principal con animación */}
      <div className="text-center px-6 z-10 animate-fadeInUp">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
          <span className="block text-orange-50 mb-2">Artisan</span>
          <span className="text-amber-200">Bakery & Café</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-orange-50 font-light">
          Elaborado con pasión desde 1985. Cada bocado cuenta una historia de tradición e ingredientes de calidad.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#" 
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full py-3 px-8 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30 active:scale-95"
          >
            Pedir Ahora
          </a>
          <a 
            href="#"
            onClick={generarPDF}
            className="border-2 border-white hover:bg-white/20 text-white font-semibold rounded-full py-3 px-8 transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            Nuestros Productos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
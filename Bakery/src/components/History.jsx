import bg from '../assets/background_history.webp'

const History = () => {
  return (
    <div>
      <section
        id="history"
        className="relative bg-cover bg-center bg-no-repeat text-white py-28 md:py-36 lg:py-44"
        style={{ 
          backgroundImage: `linear-gradient(rgba(251, 146, 60, 0.8), rgba(251, 146, 60, 0.8)), url(${bg})`,
          backgroundAttachment: 'fixed' // Efecto parallax opcional
        }}
      >
        <div className="relative container mx-auto px-4 max-w-4xl">
          {/* Título con énfasis */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-serif tracking-wide">
            <span className="border-b-4 border-white pb-2">Nuestra Historia</span>
          </h2>
          
          {/* Contenido con mejor jerarquía */}
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="text-center opacity-95">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus harum consectetur eos corrupti quas delectus? Ipsum officiis tempore sunt, repellat eaque magnam eligendi!
            </p>
            
            {/* Separador visual */}
            <div className="flex justify-center py-4">
              <div className="w-24 h-1 bg-white bg-opacity-50 rounded-full"></div>
            </div>
            
            <p className="text-center opacity-95">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo omnis animi sequi repellendus architecto eum voluptate quidem maxime perferendis, maiores quibusdam autem nostrum quo nam ea temporibus rem doloribus!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default History
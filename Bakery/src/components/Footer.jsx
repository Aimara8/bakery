import {React, ref} from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div>
        <footer className="bg-orange-50 py-8 mt-16">
            <div className="container mx-auto px-4 text-center">
            <p className="text-orange-600 text-lg mb-2">© {currentYear} Panadería Artesanal. Todos los derechos reservados.</p>
            <p className="text-orange-500">Diseñado por [Aimara Rodríguez Gómez]</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
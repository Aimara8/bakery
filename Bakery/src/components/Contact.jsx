import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className="bg-gradient-to-b from-orange-50 to-white py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-orange-600 mb-4">Contáctanos</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        ¿Tienes preguntas o deseas realizar un pedido? Estamos aquí para ayudarte.
                    </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="md:flex">
                        {/* Contact Information Section */}
                        <div className="bg-gradient-to-b from-orange-500 to-orange-600 text-white p-8 md:w-2/5">
                            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold">Teléfono</h4>
                                        <p>+1 (123) 456-7890</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        <p>contacto@tudominio.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div>
                                        <h4 className="font-semibold">Dirección</h4>
                                        <p>Calle Principal 123, Ciudad</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8">
                                <h4 className="font-semibold mb-4">Horario de atención</h4>
                                <p>Lunes a Viernes: 9:00 - 18:00</p>
                                <p>Sábados: 10:00 - 14:00</p>
                            </div>
                        </div>
                        
                        {/* Contact Form Section */}
                        <div className="p-8 md:w-3/5">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                            placeholder="Tu nombre"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                            placeholder="tu@email.com"
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                                    <input 
                                        type="text" 
                                        id="subject" 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                        placeholder="¿Cómo podemos ayudarte?"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                                    <textarea 
                                        id="message" 
                                        rows="5" 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                        placeholder="Escribe tu mensaje aquí..."
                                        required
                                    ></textarea>
                                </div>
                                
                                <div>
                                    <button 
                                        type="submit" 
                                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                    >
                                        Enviar Mensaje
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
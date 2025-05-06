import React, { useEffect, useState } from 'react';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <nav className='bg-orange-800 text-white p-5 flex justify-between items-center sticky top-0 z-50 shadow-lg'>
            <div>
                <h1 className='text-2xl font-bold'>Bakery</h1>
            </div>

            {/* Menú Desktop - Enlaces mejorados */}
            <div className='hidden md:flex flex-wrap justify-center gap-2 md:gap-4' id="navbar-default">
                <ul className='flex flex-wrap justify-center gap-2 md:gap-4'>
                    <li>
                        <a href="#home" className="hover:bg-white/10 text-white/90 hover:text-white rounded-full py-2 px-4 transition-all duration-300 ease-in-out font-medium">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#bread" className="hover:bg-white/10 text-white/90 hover:text-white rounded-full py-2 px-4 transition-all duration-300 ease-in-out font-medium">
                            Panes
                        </a>
                    </li>
                    <li>
                        <a href="#confectionery" className="hover:bg-white/10 text-white/90 hover:text-white rounded-full py-2 px-4 transition-all duration-300 ease-in-out font-medium">
                            Repostería
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:bg-white/10 text-white/90 hover:text-white rounded-full py-2 px-4 transition-all duration-300 ease-in-out font-medium">
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>

            <div className='flex gap-2 md:gap-4'>
            </div>

            {/* Botón móvil */}
            <button className='md:hidden p-1 rounded-md hover:bg-white/10 transition-colors duration-200'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={toggleMenu}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            {/* Menú móvil - Enlaces mejorados */}
            {showMenu && 
                <div className='absolute top-16 right-0 bg-orange-800 text-white p-5 rounded-lg shadow-lg md:hidden w-48'>
                    <ul className='flex flex-col gap-3'>
                        <li>
                            <a href="#home" className="block hover:bg-white/10 text-white/90 hover:text-white rounded-md py-2 px-4 transition-colors duration-200 font-medium">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="#bread" className="block hover:bg-white/10 text-white/90 hover:text-white rounded-md py-2 px-4 transition-colors duration-200 font-medium">
                                Panes
                            </a>
                        </li>
                        <li>
                            <a href="#confectionery" className="block hover:bg-white/10 text-white/90 hover:text-white rounded-md py-2 px-4 transition-colors duration-200 font-medium">
                                Repostería
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="block hover:bg-white/10 text-white/90 hover:text-white rounded-md py-2 px-4 transition-colors duration-200 font-medium">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            }
        </nav>
    );
};

export default NavBar;
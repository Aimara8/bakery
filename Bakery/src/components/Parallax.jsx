import React, { useRef } from 'react';
import { useScroll, motion, useTransform } from "framer-motion";
import Panadero from '../assets/panadero.png';
import Masa from '../assets/masa.png';


const Parallax = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section className="relative bg-gradient-to-br from-orange-50 via-amber-600 to-orange-700 h-48 overflow-hidden">
            <div className="relative flex flex-col items-center justify-center h-full" ref={containerRef}>
                <Slider left="-12%" progress={scrollYProgress} direcction="left" />
                <Slider left="5%" progress={scrollYProgress} direcction="right" />
                <Slider left="-6%" progress={scrollYProgress} direcction="left" />
            </div>
        </section>
    );
};

const Slider = ({ left, progress, direcction }) => {

    const dir = direcction === "left" ? -1 : 1;

    const x = useTransform(progress, [0, 1], [150 * dir, -250 * dir]);

    return (
        <motion.div className="relative flex whitespace-nowrap gap-6" style={{ left, x }}>
            <div className="flex items-center space-x-2 min-w-max flex-shrink-0">
                <p className="text-white text-2xl font-bold">Panes recién horneados cada mañana</p>
                <img src={Panadero} alt="Panadero" className="w-8 h-8 object-contain" loading="lazy" />
            </div>
            <div className="flex items-center space-x-2 min-w-max flex-shrink-0">
                <p className="text-white text-2xl font-bold">Croissants artesanales y mantecosos</p>
                <img src={Masa} alt="Masa" className="w-8 h-8 object-contain" loading="lazy" />
            </div>
            <div className="flex items-center space-x-2 min-w-max flex-shrink-0">
                <p className="text-white text-2xl font-bold">Dulces para todos los gustos</p>
                <img src={Panadero} alt="Panadero" className="w-8 h-8 object-contain" loading="lazy" />
            </div>
            <div className="flex items-center space-x-2 min-w-max flex-shrink-0">
                <p className="text-white text-2xl font-bold">El aroma de la tradición</p>
                <img src={Masa} alt="Masa" className="w-8 h-8 object-contain" loading="lazy" />
            </div>
            <div className="flex items-center space-x-2 min-w-max flex-shrink-0">
                <p className="text-white text-2xl font-bold">Tartas y pasteles hechos con amor</p>
                <img src={Panadero} alt="Panadero" className="w-8 h-8 object-contain" loading="lazy" />
            </div>
        </motion.div>


    );
};

export default Parallax;

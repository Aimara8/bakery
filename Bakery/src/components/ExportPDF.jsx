import jsPDF from "jspdf";
import { productos } from "../data/products";
import { useState } from "react";

const ExportPDF = () => {
    const [generando, setGenerando] = useState(false);
    const [error, setError] = useState(null);

    const currentYear = new Date().getFullYear();

    const toBase64 = async (url) => {
        try {
            if (!url || typeof url !== 'string') {
                throw new Error('URL de imagen no válida');
            }

            const response = await fetch(url);
            if (!response.ok) throw new Error(`Error al cargar imagen: ${response.status}`);

            const blob = await response.blob();
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = () => reject(new Error('Error al leer el blob'));
                reader.readAsDataURL(blob);
            });
        } catch (err) {
            console.error('Error en toBase64:', err);
            return null;
        }
    };

    const exportarPDF = async () => {
        setGenerando(true);
        setError(null);

        try {
            const doc = new jsPDF({
                orientation: "portrait",
                unit: "mm",
                format: "a4"
            });

            // Configuración global
            doc.setFont("helvetica", "normal");
            doc.setTextColor(60, 60, 60);

            // --- PORTADA ---
            doc.setFontSize(28);
            doc.setTextColor(139, 69, 19); // Marrón
            doc.text("Catálogo de Productos", 105, 50, { align: "center" });
            
            // Logo o imagen decorativa (opcional)
            // doc.addImage(logoData, 'JPEG', 60, 70, 90, 60);
            
            doc.setFontSize(16);
            doc.setTextColor(100, 100, 100);
            doc.text("Tu empresa - Todos los productos disponibles", 105, 80, { align: "center" });
            
            doc.setFontSize(12);
            doc.text(`Generado el ${new Date().toLocaleDateString()}`, 105, 280, { align: "center" });

            // --- CONTENIDO ---
            const categorias = [...new Set(productos.map(p => p.category))];
            const colors = {
                primary: [139, 69, 19],    // Marrón
                secondary: [218, 165, 32], // Dorado
                accent: [255, 165, 0],     // Naranja
                lightBg: [250, 245, 240],  // Fondo claro
                text: [80, 80, 80],        // Texto principal
                lightText: [150, 150, 150] // Texto secundario
            };

            for (const categoria of categorias) {
                doc.addPage();
                let y = 20;

                // Encabezado de categoría
                doc.setFillColor(...colors.primary);
                doc.rect(20, y, 170, 10, 'F');
                doc.setFontSize(14);
                doc.setTextColor(255, 255, 255);
                doc.text(categoria.toUpperCase(), 105, y + 7, { align: "center" });
                y += 20;

                // Productos de esta categoría
                const productosCategoria = productos.filter(p => p.category === categoria);
                const imgWidth = 30;
                const imgHeight = 30;
                const cardHeight = 40;

                for (const producto of productosCategoria) {
                    // Verificar espacio en página
                    if (y + cardHeight > 270) {
                        doc.addPage();
                        y = 20;
                    }

                    // Convertir imagen a base64
                    let imgData = null;
                    try {
                        if (producto.image) {
                            imgData = await toBase64(producto.image);
                        }
                    } catch (err) {
                        console.error(`Error al procesar imagen de ${producto.name}:`, err);
                    }

                    // Tarjeta de producto con sombra sutil
                    doc.setDrawColor(200, 200, 200);
                    doc.setFillColor(...colors.lightBg);
                    doc.roundedRect(
                        20, y - 5, 
                        170, cardHeight,
                        3, 3, 
                        'FD' // Relleno y borde
                    );

                    // Imagen del producto
                    if (imgData) {
                        try {
                            doc.addImage(
                                imgData,
                                "JPEG",
                                25, y,
                                imgWidth, imgHeight,
                                undefined, "FAST"
                            );
                        } catch (err) {
                            console.error('Error al agregar imagen:', err);
                        }
                    } else {
                        doc.setFontSize(10);
                        doc.setTextColor(...colors.lightText);
                        doc.text("Sin imagen", 25 + imgWidth/2, y + imgHeight/2, { align: "center" });
                    }

                    // Información del producto
                    const textStart = 25 + imgWidth + 10;
                    
                    // Nombre
                    doc.setFontSize(12);
                    doc.setFont("helvetica", "bold");
                    doc.setTextColor(...colors.text);
                    doc.text(producto.name, textStart, y + 5);

                    // Descripción (recortada si es muy larga)
                    const maxDescLength = 75;
                    const description = producto.description.length > maxDescLength 
                        ? producto.description.substring(0, maxDescLength) + "\n" + producto.description.substring(maxDescLength, producto.description.length)
                        : producto.description;
                    
                    doc.setFont("helvetica", "normal");
                    doc.setFontSize(10);
                    doc.text(description, textStart, y + 12);

                    // Precio y detalles adicionales
                    doc.setFontSize(11);
                    doc.setFont("helvetica", "bold");
                    doc.setTextColor(...colors.accent);
                    doc.text(`€${producto.price.toFixed(2)}`, textStart, y + 25);

                    y += cardHeight + 5;
                }
            }

            // --- PIE DE PÁGINA EN TODAS LAS PÁGINAS ---
            const pageCount = doc.internal.getNumberOfPages();
            for (let i = 1; i <= pageCount; i++) {
                doc.setPage(i);
                
                // Línea decorativa
                doc.setDrawColor(...colors.secondary);
                doc.setLineWidth(0.3);
                doc.line(20, 285, 190, 285);
                
                // Número de página
                doc.setFontSize(10);
                doc.setTextColor(...colors.lightText);
                doc.text(`Página ${i} de ${pageCount}`, 105, 290, { align: "center" });
                
                // Logo o información de empresa
                doc.text(`© TuEmpresa - ${currentYear}`, 190, 290, { align: "right" });
            }

            // Guardar PDF
            doc.save("catalogo_productos.pdf");

        } catch (err) {
            console.error('Error al generar PDF:', err);
            setError('Ocurrió un error al generar el PDF. Por favor intenta nuevamente.');
        } finally {
            setGenerando(false);
        }
    };

    return exportarPDF;
};

export default ExportPDF;
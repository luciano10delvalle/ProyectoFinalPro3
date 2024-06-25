import React from 'react';
import '../estilos/TarjetasHoras.css'; // Asegúrate de tener un archivo CSS para los estilos de este componente

function TarjetasHoras() {
    return (
        <div className="tarjetas-horas">
            <h2>
                <center>
                    Comprar <span>Horas</span>
                </center>
            </h2>
            <div className="tarjetas-container">
                <div className="tarjeta">
                    <p className='categoríaTarjeta'>I</p>
                    <h3>1 Hora</h3>
                    <p><strong>Precio:</strong> $100</p>
                    <a href="#" className="enlace">Comprar</a>
                </div>
                <div className="tarjeta">
                    <p>II</p>
                    <h3>5 Horas</h3>
                    <p><strong>Precio:</strong> $450</p>
                    <a href="#" className="enlace">Comprar</a>
                </div>
                <div className="tarjeta">
                    <p>III</p>
                    <h3>10 Horas</h3>
                    <p><strong>Precio:</strong> $800</p>
                    <a href="#" className="enlace">Comprar</a>
                </div>
                <div className="tarjeta">
                    <p>IV</p>
                    <h3>24 Horas</h3>
                    <p><strong>Precio:</strong>$1500</p>
                    <a href="#" className="enlace">Comprar</a>
                </div>
            </div>
        </div>
    );
}

export default TarjetasHoras;
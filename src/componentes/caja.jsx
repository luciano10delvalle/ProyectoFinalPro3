import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../estilos/caja.css'; // Importar el CSS
import TarjetasHoras from './tarjetas.jsx';
import Consultas from './consultas.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FormularioLogin } from './FormularioLogin.jsx'; // Ruta corregida

function Caja() {
    const [showGames, setShowGames] = useState(true);
    const [showCards, setShowCards] = useState(false);
    const [showLogin, setShowLogin] = useState(false); // Estado para mostrar el formulario de inicio de sesión/registro
    const [searchTerm, setSearchTerm] = useState('');
    const [ImagenActual, setImagenActual] = useState(0);

    const imagenes = [
        require('../imagenes/gta.jpg'),
        require('../imagenes/Multiversus.jpg'),
        require('../imagenes/GK.jpg')
    ];

    const siguiente = () => {
        setImagenActual((anterior) => (anterior + 1) % imagenes.length);
    };

    const anterior = () => {
        setImagenActual((anterior) => (anterior - 1 + imagenes.length) % imagenes.length);
    };

    const handleHoras = () => {
        setShowCards(true);
        setShowGames(false);
        setShowLogin(false);
    };

    const handleJuegos = () => {
        setShowCards(false);
        setShowGames(true);
        setShowLogin(false);
    };

    const handleConsulta = () => {
        setShowCards(false);
        setShowGames(false);
        setShowLogin(false);
    };

    const handleLoginClick = () => {
        setShowCards(false);
        setShowGames(false);
        setShowLogin(true);
    };

    const handleLogin = () => {
        setShowLogin(false);
        setShowGames(true); // Mostrar juegos después de iniciar sesión o registrar
    };

    const filteredGames = [
        { name: "CyberPunk 2077", image: require("../imagenes/CyberPunk2077.jpg"), points: 1000 },
        { name: "Assasin Creed", image: require("../imagenes/assasin.jpg"), points: 1000 },
        { name: "Gotham Knight", image: require("../imagenes/GK.jpg"), points: 1000 },
        { name: "God of War", image: require("../imagenes/God.jpg"), points: 1000 },
        { name: "Grand Thief Auto VI", image: require("../imagenes/gta.jpg"), points: 1000 },
        { name: "Mortal Kombat 1", image: require("../imagenes/MK1.jpg"), points: 1000 },
        { name: "Multiversus", image: require("../imagenes/Multiversus.jpg"), points: 1000 },
        { name: "Poppy Play Time", image: require("../imagenes/Poppy.jpg"), points: 1000 }
    ].filter(game => game.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>
            <header className='header'>
                <div className="logo">
                    <img className="icon" src={require("../imagenes/iconos/computadora.png")} alt="" />
                </div>
                <nav className='links'>
                    <ul>
                        <li><a href="#" onClick={handleHoras}>Comprar horas</a></li>
                        <li><a href="#" onClick={handleJuegos}>Juegos</a></li>
                        <li><a href="#" onClick={handleConsulta}>Consulta</a></li>
                    </ul>
                </nav>
                <a href="#" className='btn'><button onClick={handleLoginClick}>Usuario</button></a>
            </header>
            <body className='BodyA'>
                {showLogin ? (
                    <FormularioLogin onLogin={handleLogin} />
                ) : (
                    showGames ? (
                        <main className="games">
                            <div className='Carrusel'>
                                <button className='buttonI' onClick={anterior}>
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                                <img src={imagenes[ImagenActual]} alt="carousel" />
                                <button className='buttonD' onClick={siguiente}>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                            <h2>
                                <center>
                                    Todos los <span>Juegos</span>
                                </center>
                                <form className='search-form'>
                                    <div className='input-field'>
                                        <input 
                                            type="text" 
                                            placeholder="Buscar juegos..." 
                                            value={searchTerm} 
                                            onChange={(e) => setSearchTerm(e.target.value)} 
                                        />
                                    </div>
                                </form>
                            </h2>
                            <div className="productos">
                                {filteredGames.map((game, index) => (
                                    <div className="producto1" key={index}>
                                        <img src={game.image} alt="" />
                                        <div className="producto-txt">
                                            <h3>{game.name}</h3>
                                            <div className="precio">
                                                <p><strong>Puntos:</strong> {game.points}</p>
                                                <a href="#" className="enlace">comprar</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </main>
                    ) : (showCards ?
                        <TarjetasHoras /> :
                        <Consultas />
                    )
                )}
            </body>
            <footer>
                <div className="footeeer">
                    <div className="box">
                        <h2>Sobre nosotros</h2>
                        <p>Somos un grupo de estudiantes programadores, que quiere seguir avanzando en este ámbito para mejorar:</p>
                    </div>
                    <div className="box">
                        <div className="redes">
                            <a href=""><img className="icon" src={require("../imagenes/iconos/facebook.png")} alt="" /></a>
                            <a href=""> <img className="icon" src={require("../imagenes/iconos/X.png")} alt="" /></a>
                            <a href=""><img className="icon" src={require("../imagenes/iconos/youtube.png")} alt="" /></a>
                            <a href=""> <img className="icon" src={require("../imagenes/iconos/instagram.png")} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="box2">
                    <small>© 2023 <b>###</b> - Todos los derechos Reservados</small>
                </div>
            </footer>
        </>
    );
}

export default Caja;

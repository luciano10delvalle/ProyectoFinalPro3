import React, { useEffect, useState } from "react";
import "../estilos/estilosPreg.css";

const Consultas = () => {
  const [categoriaActiva, setCategoriaActiva] = useState("metodos-pago");
  const [preguntasActivas, setPreguntasActivas] = useState({});

  useEffect(() => {
    const categorias = document.querySelectorAll("#categorias .categoria");

    categorias.forEach((categoria) => {
      categoria.addEventListener("click", (e) => {
        categorias.forEach((elemento) => {
          elemento.classList.remove("activa");
        });

        e.currentTarget.classList.toggle("activa");
        setCategoriaActiva(categoria.dataset.categoria);
      });
    });

    return () => {
      categorias.forEach((categoria) => {
        categoria.removeEventListener("click", () => {});
      });
    };
  }, []);

  const togglePreguntaActiva = (index) => {
    setPreguntasActivas((prevPreguntasActivas) => ({
      ...prevPreguntasActivas,
      [index]: !prevPreguntasActivas[index],
    }));
  };

  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Preguntas Frecuentes</title>
      </head>
      <body>
        <main className="Pas">
          <h1 className="titulo">Preguntas Frecuentes</h1>
          <div className="categorias" id="categorias">
            <div className="categoria activa" data-categoria="metodos-pago">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M21.19 7h2.81v15h-21v-5h-2.81v-15h21v5zm1.81 1h-19v13h19v-13zm-9.5 1c3.036 0 5.5 2.464 5.5 5.5s-2.464 5.5-5.5 5.5-5.5-2.464-5.5-5.5 2.464-5.5 5.5-5.5zm0 1c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm.5 8h-1v-.804c-.767-.16-1.478-.689-1.478-1.704h1.022c0 .591.326.886.978.886.817 0 1.327-.915-.167-1.439-.768-.27-1.68-.676-1.68-1.693 0-.796.573-1.297 1.325-1.448v-.798h1v.806c.704.161 1.313.673 1.313 1.598h-1.018c0-.788-.727-.776-.815-.776-.55 0-.787.291-.787.622 0 .247.134.497.957.768 1.056.344 1.663.845 1.663 1.746 0 .651-.376 1.288-1.313 1.448v.788zm6.19-11v-4h-19v13h1.81v-9h17.19z" />
              </svg>
              <p>Métodos de pago</p>
            </div>

            <div className="categoria" data-categoria="seguridad">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M12 0c-3.371 2.866-5.484 3-9 3v11.535c0 4.603 3.203 5.804 9 9.465 5.797-3.661 9-4.862 9-9.465v-11.535c-3.516 0-5.629-.134-9-3zm0 1.292c2.942 2.31 5.12 2.655 8 2.701v10.542c0 3.891-2.638 4.943-8 8.284-5.375-3.35-8-4.414-8-8.284v-10.542c2.88-.046 5.058-.391 8-2.701zm5 7.739l-5.992 6.623-3.672-3.931.701-.683 3.008 3.184 5.227-5.878.728.685z" />
              </svg>
              <p>Seguridad</p>
            </div>

            <div className="categoria" data-categoria="Funcionamiento">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M9.484 15.696l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm0-5l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm0-5l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm10.516 11.304h-8v1h8v-1zm0-5h-8v1h8v-1zm0-5h-8v1h8v-1zm4-5h-24v20h24v-20zm-1 19h-22v-18h22v18z" />
              </svg>
              <p>Funcionamiento</p>
            </div>
          </div>

          <div className="preguntas">
            <div className={`contenedor-preguntas ${categoriaActiva === 'metodos-pago' ? 'activo' : ''}`} data-categoria="metodos-pago">
              <div className="contenedor-pregunta" onClick={() => togglePreguntaActiva('metodos-pago-1')}>
                <p className="pregunta">
                  ¿Qué métodos de pago disponibles tienen? <img src="../iconsP/suma.svg" alt="Abrir Respuesta" />
                </p>
                <p className="respuesta" style={{ maxHeight: preguntasActivas['metodos-pago-1'] ? '1000px' : '0' }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Voluptatum laborum porro voluptates, sequi aliquam mollitia! Nostrum eius iure
                  sapiente, voluptates soluta adipisci, perferendis voluptatibus eligendi vel saepe harum.
                  Consectetur, doloribus.adipisicing elit.
                </p>
              </div>
              <div className="contenedor-pregunta" onClick={() => togglePreguntaActiva('metodos-pago-2')}>
                <p className="pregunta">
                  ¿Tienen plazo de pago? <img src="./imagenes/iconsP/suma.svg" alt="Abrir Respuesta" />
                </p>
                <p className="respuesta" style={{ maxHeight: preguntasActivas['metodos-pago-2'] ? '1000px' : '0' }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laborum porro voluptates, sequi
                  aliquam mollitia! Nostrum eius iure sapiente, voluptates soluta adipisci, perferendis voluptatibus
                  eligendi vel saepe harum. Consectetur, doloribus.adipisicing elit. Voluptatum laborum porro
                  voluptates, sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates soluta adipisci,
                  perferendis voluptatibus eligendi vel saepe harum. Consectetur, doloribus.
                </p>
              </div>
            </div>

            <div className={`contenedor-preguntas ${categoriaActiva === 'seguridad' ? 'activo' : ''}`} data-categoria="seguridad">
              <div className="contenedor-pregunta" onClick={() => togglePreguntaActiva('seguridad-1')}>
                <p className="pregunta">
                  ¿Cómo puedo saber si son confiables? <img src=".../imagenes/iconsP/suma.svg" alt="Abrir Respuesta" />
                </p>
                <p className="respuesta" style={{ maxHeight: preguntasActivas['seguridad-1'] ? '1000px' : '0' }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laborum porro voluptates, sequi
                  aliquam mollitia! Nostrum eius iure sapiente, voluptates soluta adipisci, perferendis voluptatibus
                  eligendi vel saepe harum. Consectetur, doloribus.adipisicing elit. Voluptatum laborum porro
                  voluptates, sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates soluta adipisci,
                  perferendis voluptatibus eligendi vel saepe harum. Consectetur, doloribus.adipisicing elit.
                  Voluptatum laborum porro voluptates, sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates
                  soluta adipisci, perferendis voluptatibus eligendi vel saepe harum. Consectetur, doloribus.
                </p>
              </div>
              <div className="contenedor-pregunta" onClick={() => togglePreguntaActiva('seguridad-2')}>
                <p className="pregunta">
                  ¿Qué pasa con mis datos personales? <img src="./imagenes/iconsP/suma.svg" alt="Abrir Respuesta" />
                </p>
                <p className="respuesta" style={{ maxHeight: preguntasActivas['seguridad-2'] ? '1000px' : '0' }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laborum porro voluptates, sequi
                  aliquam mollitia! Nostrum eius iure sapiente, voluptates soluta adipisci, perferendis voluptatibus
                  eligendi vel saepe harum. Consectetur, doloribus.adipisicing elit. Voluptatum laborum porro
                  voluptates, sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates soluta adipisci,
                  perferendis voluptatibus eligendi vel saepe harum. Consectetur, doloribus.
                </p>
              </div>
            </div>

            <div className={`contenedor-preguntas ${categoriaActiva === 'Funcionamiento' ? 'activo' : ''}`} data-categoria="Funcionamiento">
              <div className="contenedor-pregunta" onClick={() => togglePreguntaActiva('Funcionamiento-1')}>
                <p className="pregunta">
                  ¿Cómo funciona esta forma de compra? <img src="./imagenes/iconsP/suma.svg" alt="Abrir Respuesta" />
                </p>
                <p className="respuesta" style={{ maxHeight: preguntasActivas['Funcionamiento-1'] ? '1000px' : '0' }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laborum porro voluptates, sequi
                  aliquam mollitia! Nostrum eius iure sapiente, voluptates soluta adipisci, perferendis voluptatibus
                  eligendi vel saepe harum. Consectetur, doloribus.adipisicing elit. Voluptatum laborum porro
                  voluptates, sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates soluta adipisci,
                  perferendis voluptatibus eligendi vel saepe harum. Consectetur, doloribus.adipisicing elit.
                  Voluptatum laborum porro voluptates, sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates
                  soluta adipisci, perferendis voluptatibus eligendi vel saepe harum. Consectetur, doloribus.
                </p>
              </div>
              <div className="contenedor-pregunta" onClick={() => togglePreguntaActiva('Funcionamiento-2')}>
                <p className="pregunta">
                  ¿Cómo funciona el juego? <img src="./imagenes/iconsP/suma.svg" alt="Abrir Respuesta" />
                </p>
                <p className="respuesta" style={{ maxHeight: preguntasActivas['Funcionamiento-2'] ? '1000px' : '0' }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laborum porro voluptates, sequi
                  aliquam mollitia! Nostrum eius iure sapiente, voluptates soluta adipisci, perferendis voluptatibus
                  eligendi vel saepe harum. Consectetur, doloribus.adipisicing elit. Voluptatum laborum porro
                  voluptates, sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates soluta adipisci,
                  perferendis voluptatibus eligendi vel saepe harum. Consectetur, doloribus.
                </p>
              </div>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
};

export default Consultas;
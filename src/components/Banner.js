// Importar los módulos y componentes necesarios
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

// Crear y exportar el componente "Banner"
export const Banner = () => {
  // Definir los estados iniciales
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [" Ingeniero Informático", " Programador Web"];
  const period = 2000;

  // Definir el efecto para animar el texto rotativo
  useEffect(() => {
    // Crear un intervalo para llamar a la función "tick" cada "delta" milisegundos
    let ticker = setInterval(() => {
      tick();
    }, delta);

    // Limpiar el intervalo cuando el texto cambia
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  // Definir la función "tick" para cambiar el texto rotativo
  const tick = () => {
    // Obtener el índice del elemento actual en el arreglo "toRotate"
    let i = loopNum % toRotate.length;
    // Obtener el texto completo del elemento actual
    let fullText = toRotate[i];
    // Obtener el texto actualizado (agregar o quitar caracteres)
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    // Actualizar el estado del texto
    setText(updatedText);

    // Reducir "delta" a la mitad cuando se está eliminando texto
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    // Cambiar a eliminar texto cuando se alcanza el texto completo
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    }
    // Cambiar a agregar texto cuando se alcanza el texto vacío
    else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    }
    // Aumentar el índice cuando se está agregando o eliminando texto
    else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Renderizar el componente "Banner"
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          {/* Columna izquierda */}
          <Col xs={12} md={6} xl={7}>
            {/* Componente TrackVisibility para detectar si el elemento es visible en la pantalla */}
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  {/* Etiqueta span para mostrar un mensaje de bienvenida */}
                  <span className="tagline">Bienvenido/a a mi portafolio</span>
                  {/* Etiqueta h1 para mostrar el nombre del propietario del sitio */}
                  <h1>
                    {`Hola soy Pablo Inzunza `}
                    {/* Componente TextRotator para rotar el texto con diferentes roles */}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Programador Web", "Web Designer", "UI/UX Designer" ]'
                    >
                      {/* El texto a rotar se encuentra dentro de la etiqueta span con la clase 'wrap' */}
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  {/* Párrafo de texto introductorio */}
                  <p>
                    Cuento con experiencia en proyectos gubernamentales y
                    empresariales, busco aplicar mis habilidades para ayudar a
                    empresas a desarrollar soluciones tecnológicas eficientes y
                    escalables. Soy una persona proactiva, comprometida y
                    siempre en busca de oportunidades para crecer
                    profesionalmente.
                  </p>
                  {/* Botón para conectarse */}
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect
                    {/* Icono de flecha hacia la derecha */}
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          {/* Columna derecha */}
          <Col xs={12} md={6} xl={5}>
            {/* Componente TrackVisibility para detectar si el elemento es visible en la pantalla */}
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  {/* Imagen de encabezado */}
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

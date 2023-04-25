import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../assets/img/logo-web.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

// Componente de barra de navegación
export const NavBar = () => {

  // Estado local para almacenar la ruta activa de navegación y determinar si la barra de navegación se ha desplazado
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Hook useEffect para escuchar los eventos de desplazamiento de la ventana del navegador y actualizar el estado de "scrolled"
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    // Función de limpieza para eliminar el listener de scroll cuando el componente se desmonte
    return()=> window.removeEventListener("scroll",onScroll)
  }, []);

  // Función para actualizar la ruta activa de navegación
  const onUpdateActiveLink = (value)=> {
    setActiveLink(value);
  }

  // Retorno del componente de barra de navegación
  return (
    <Navbar expand="lg" className={scrolled?"scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
          <Nav className="me-auto">
            <Nav.Link href="#home"    className={activeLink ==='home'?     'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>    Inicio</Nav.Link>
            <Nav.Link href="#skills"  className={activeLink ==='skills'?   'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>  Habilidades</Nav.Link>
            <Nav.Link href="#projects"className={activeLink ==='projects'? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="" />
              </a>
            </div>

            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

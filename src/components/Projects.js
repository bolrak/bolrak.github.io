import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";

/********Jobs***********/
import jobsImg1 from "../assets/jobs/imsajob.png";
/*********Personal***********/
import persImg1 from "../assets/personal/discbot.png";
/*********Courses************/
import coursImg1 from "../assets/courses/ingles.jpg";
import coursImg2 from "../assets/courses/simpleday.jpg";
import coursImg3 from "../assets/courses/firmagob.jpg";
import coursImg4 from "../assets/courses/sql.jpg";
/********/
import TrackVisibility from "react-on-screen";
import "animate.css";
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');


export const Projects = () => {
  const projects = [

    {
      title: "Solución para IMSA",
      description: "Conexión de la plataforma SIMPLE con base de datos interna.",
      imgUrl: jobsImg1,
    },
   
  ];
  const personal = [

    {
      title: "Bot de discord en Python",
      description: "Bot capaz de realizar ciertas interacciones como banear palabras y borrar comentarios",
      imgUrl: persImg1,
    },
  ];
  const courses = [
    {
      title: "Curso Inglés B1",
      description: "Curso realizado en Udemy",
      imgUrl: coursImg1,
    },
    {
      title: "Simple day",
      description: "Curso realizado en Udemy",
      imgUrl: coursImg2,
    },
    {
      title: "Curso Inglés B1",
      description: "Curso realizado en Udemy",
      imgUrl: coursImg3,
    },
    {
      title: "Curso Inglés B1",
      description: "Curso realizado en Udemy",
      imgUrl: coursImg4,
    },

  ];
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>

                  <div className="text-center">
                    <h2>Proyectos y Capacitaciones</h2>
                    <p>
                    En esta sección, encontrarás algunos de los proyectos personales y profesionales en los que he trabajado y que puedo compartir públicamente.
                    También podrás ver los certificados obtenidos por los cursos y capacitaciones que he completado para mantenerme actualizado en mi campo
                    </p>
                  </div>
                </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Empleo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Personales</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Cursos</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {personal.map((personal, index) => {
                      return <ProjectCard key={index} {...personal} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {courses.map((courses, index) => {
                      return <ProjectCard key={index} {...courses} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

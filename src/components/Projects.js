import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import coursImg1 from "../assets/courses/ingles.jpg";
import coursImg2 from "../assets/courses/simpleday.jpg";
import coursImg3 from "../assets/courses/firmagob.jpg";
import coursImg4 from "../assets/courses/sql.jpg";
import TrackVisibility from "react-on-screen";
import "animate.css";
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');


export const Projects = () => {
  const projects = [

    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
  ];
  const personal = [

    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
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
                      A continuación, podrás ver algunos de los trabajos realizados, tanto proyectos personales
                      como aquellos en los que he participado, así como los certificados obtenidos por los cursos realizados.
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

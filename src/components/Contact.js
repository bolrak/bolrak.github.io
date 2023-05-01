import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";


export const Contact = () => {
  const buttonText = "Acceder al Formulario de contacto";
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contactame" />
          </Col>
          <Col md={6}>
            <h2>Ponerse en Contacto</h2>
            <form >
              <Row>
                <Col>
                  <a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdjk1Bq-aH20DY0ea1OkOK0CHzx0Xu3HnVWgSFWYKoNmGGAMw/viewform?usp=sf_link"><button type="button"><span>{buttonText}</span></button>
                  </a>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

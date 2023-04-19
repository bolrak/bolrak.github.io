import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setformDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Acceder al Formulario de contacto");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setformDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit=()=>{
    
  }
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contactame" />
          </Col>
          <Col md={6}>
            <h2>Ponerse en Contacto</h2>
            <form onSubmit={handleSubmit}>
              <Row>
        <Col>
                <a target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdjk1Bq-aH20DY0ea1OkOK0CHzx0Xu3HnVWgSFWYKoNmGGAMw/viewform?usp=sf_link"><button type="button"><span>{buttonText}</span></button>
                </a></Col>
                {
                  status.message &&
                  <Col>
                  <p className={status.success === false? "danger":"success"}>{status.message}</p>
                    </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

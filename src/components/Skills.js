import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import CircularProgressBar from './ProgressBar';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Habilidades</h2>
              <p>
               Lenguajes y Frameworks con los que he trabajado.<br></br>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                <CircularProgressBar progress={72} />
                  <h5> Javascript</h5>
                </div>
                <div className="item">
                <CircularProgressBar progress={36} />
                  <h5> Python</h5>
                </div>
                <div className="item">
                <CircularProgressBar progress={52} />
                  <h5> PHP</h5>
                </div>
                <div className="item">
                <CircularProgressBar progress={58} />
                  <h5> React</h5>
                </div>
                <div className="item">
                <CircularProgressBar progress={22} />
                  <h5> Laravel</h5>
                </div>
                <div className="item">
                <CircularProgressBar progress={42} />
                  <h5> Symfony</h5>
                </div>
                <div className="item">
                <CircularProgressBar progress={32} />
                  <h5> Django</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp}></img>
    </section>
  );
};

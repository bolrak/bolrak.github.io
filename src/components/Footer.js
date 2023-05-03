import { Container } from "react-bootstrap"
import logo from "../assets/img/logo-web.svg"
import { Row, Col } from "react-bootstrap"
import linkedinLogo from '../assets/img/nav-icon1.svg';
import githubLogo from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
            <br/>
            <br/>
                <Row className="align-items-center justify-content-xl-between">

                    <Col sm={6}>
                        <img src={logo} alt="logo"  id="logo-footer" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
          
                        <div className="social-icon">
                        <a href="https://www.linkedin.com/in/pablo-inzunza-morales-b9599a150"  target="_blank">
                <img src={linkedinLogo} alt="Linkedin" />
              </a>
              <a href="https://github.com/bolrak" target="_blank">
                <img src={githubLogo} alt="Github" />
              </a>
                        </div>
                        <p>Copyright 2023. All rights reserved. Pablo Inzunza.</p>
                        <p>v1.06</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
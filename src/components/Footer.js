import { Container } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import { Row, Col } from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center justify-content-xl-between">

                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <br/>
                        <div className="social-icon">
                            <a href="#home"><img src={navIcon1} /></a>
                            <a href="#home"><img src={navIcon2} /></a>
                            <a href="#home"><img src={navIcon3} /></a>

                        </div>
                        <p>CopyRight 2023. All right reserved. Pablo Inzunza.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
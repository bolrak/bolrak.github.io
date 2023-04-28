import { Col } from "react-bootstrap";
import Modal from "react-modal";
import {useState} from 'react';

export const ProjectCard = ({ title, description, imgUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx" onClick={() => setIsModalOpen(true)}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4> {title}</h4>
          <span> {description}</span>
        </div>
        <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
          <img src={imgUrl} />
          <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
        </Modal>
      </div>
    </Col>
  );
};
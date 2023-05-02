import { Col } from "react-bootstrap";
import Modal from "react-modal";
import { useState } from 'react';

export const ProjectCard = ({ title, description, imgUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleOpenModal}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4> {title}</h4>
          <span> {description}</span>
        </div>
      </div>
      <Modal
        scrollable={true}
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        className="my-modal"
        overlayClassName="my-modal-overlay"
      >
        <div className="modal-content">
          <img src={imgUrl} />

        </div>
      </Modal>
    </Col>
  );
};

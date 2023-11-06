import { useState } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -40%)",
    borderRadius: "5px",
    padding: "40px",
  },
};
const ModalItem = ({isOpen,setIsOpen, children}) => {
  let subtitle;

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal SubTask"
      >
        {children}
      </Modal>
  );
};

export default ModalItem;

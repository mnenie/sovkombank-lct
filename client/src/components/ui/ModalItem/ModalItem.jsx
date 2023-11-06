import { useState } from "react";
import Modal from "react-modal";
// import styles from './modal.module.scss'
const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -40%)",
    // boxShadow: "0 2px 15px 0 rgba(52,82,112,.09)",
    borderRadius: "5px",
    padding: "40px",
  },
};
const ModalItem = () => {
  let subtitle;
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal SubTask"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
};

export default ModalItem;

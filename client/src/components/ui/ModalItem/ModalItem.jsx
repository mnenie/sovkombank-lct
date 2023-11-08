import Modal from "react-modal";

const ModalItem = ({ isOpen, setIsOpen, children, width }) => {
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
      width: `${width}px`,
    },
  };
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal SubTask"
    >
      {children}
    </Modal>
  );
};

export default ModalItem;

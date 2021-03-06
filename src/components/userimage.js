import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const userImageStyles = {
  image: {
    alignItems: "center",
    justifyContent: "center",
    height: "75px",
    width: "75px",
    radius: "50px",
    border: "5px solid rgba(0, 0, 0, 0.5)",
    borderRadius: "50px",
    marginRight: "5px",
    overflow: "hidden",
    backgroundImage: `url(require("../../public/img/man.png"))`,
  },
};

export const UserImage = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div style={userImageStyles.image}>
        <img
          styles={userImageStyles.image}
          onClick={openModal}
          width="75px"
          height="75px"
          borderRadius="20px"
          src="img/man.png"
          alt="userImage"
        />
      </div>
    </div>
  );
};

export default UserImage;

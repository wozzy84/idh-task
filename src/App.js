import React from "react";
import MeetOurTeam from "./components/MeetOurTeam/MeetOurTeam";
import Slider from "./components/Slider/Slider";
import Modal from "react-modal";
import { useSelector } from "react-redux";

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

const App = () => {
  const modalIsOpen = useSelector((state) => state.isModalOpen);
  Modal.setAppElement("#root");

  return (
    <>
      <MeetOurTeam />
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <Slider />
      </Modal>
    </>
  );
};

export default App;

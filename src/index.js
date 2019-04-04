import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import Modal from "./modal";
import "./styles.css";

function App() {
  const [showModal, setModalState] = useState(false);
  const handleShow = () => {
    setModalState(true);
  };

  const handleHide = () => {
    setModalState(false);
  };

  return (
    <React.Fragment>
      <div onClick={handleShow}>Modal</div>
      {showModal ? (
        <Modal handleHide={handleHide}>
          <div>Modal children</div>
        </Modal>
      ) : null}
    </React.Fragment>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import "./styles.css";

function Modal(props) {
  let refernceNode;
  const handleClick = e => {
    if (refernceNode.contains(e.target)) {
      return;
    }
    props.handleHide();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false);
    return () => {
      document.removeEventListener("mousedown", handleClick, false);
    };
  });

  return ReactDOM.createPortal(
    <div className="overlay">
      <div ref={node => (refernceNode = node)} className="modal">
        <div className="close-button" onClick={props.handleHide}>
          X
        </div>
        {props.children}
      </div>
    </div>,
    // A DOM element
    document.body
  );
}

export default Modal;

import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = (props) => {
	return (
        ReactDOM.createPortal( <div className="modal-overlay">
                <h1>I am the modal!</h1>
            </div>,
                document.getElementById("modal"))
        ); 
};

export default Modal;
           
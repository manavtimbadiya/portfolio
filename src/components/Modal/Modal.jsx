import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = (props) => {
	return (
        ReactDOM.createPortal( 
        <div className="modal-overlay">
            <div className="modal-container">
                 <div className='upper-section'>
                    <h1>Huge Annoucement!</h1>
                    <p  className='close'>
                        &times;
                    </p>
                </div>
             <div className='middle-section'>
                    <h3>React Mega Tutorial is LIVE!</h3>
                    <p>Do you wish to learn React?</p>
                    <p>
                        I've published a completely FREE react projects, check
                        it out today!
                    </p>
                    
                </div>
                 <div className='lower-section'>
                    <a  className='modal-btn btn-red'>
                        Close
                    </a>
                    <a
                        href='http://theleanprogrammer.com/aam/'
                        target='_blank'
                        rel='noreferrer'
                        className='modal-btn btn-green'
                    >
                        Start tutorial
                    </a>
                </div> 
            </div>
        </div>,
                document.getElementById("modal"))
        ); 
};

export default Modal;
           
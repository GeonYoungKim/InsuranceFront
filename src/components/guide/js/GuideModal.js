import React, { Component } from 'react';
import Modal from 'react-modal';

class GuideModal extends Component {
    render() {

        let serverAccess = "http://localhost:8080/";
        const customStyles = {
            content: {
                left: '20%',
                top: '10%',
                height: '80%',
                width: '50%',
            }
        };

        return (
            <Modal
                isOpen='true'
                style={customStyles}
            >
                <div style={{ textAlign: "center" }}>
                    <img
                        src={serverAccess + this.props.preview}
                        style={{ width: "70%", height: "100%" }}
                    />
                </div>
                <button style={{ width: "100%" }} onClick={() => this.props.modalClose()}>close</button>

            </Modal>
        );
    }
}

export default GuideModal;

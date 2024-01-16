import { Modal, Button } from "react-bootstrap";
import "../../sass/skill-modal.scss"

export default function SkillModal({ selectedSkill, showModal, handleClose }) {
    // for newline
    const paragraphs = selectedSkill?.skillDesc.split('\n').map((paragraph, index) => (
        <p className="modal-desc my-4" key={index}>{paragraph}</p>
    ));

    return (
        <Modal className="custom-modal" show={showModal} onHide={handleClose} centered>
            <Modal.Body className="d-flex text-center flex-column text-align-center p-4">
                <div className="mb-3">
                    <h4>{selectedSkill?.skillHeadline}</h4>
                    {paragraphs}
                </div>
                <div>
                    <Button onClick={handleClose}>Close</Button>
                </div>
            </Modal.Body>

        </Modal>

    );
}
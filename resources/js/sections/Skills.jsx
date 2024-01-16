import { useState } from "react"

import { Container, Row, Modal } from "react-bootstrap"
import IconRenderer from "../components/IconRenderer"
import SkillModal from "../components/SkillModal"
import '../../sass/skills.scss'

// import iconsData from '../data/skills-icon.json';
import skillData from '../data/skills-data.json'

function Skills({ className }) {
    const handleOnMouseMove = e => {
        for (const card of document.getElementsByClassName("skill-card")) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        };
    }
    const [showModal, setShowModal] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleCardClick = (skill) => {
        setShowModal(true);
        setSelectedSkill(skill);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedSkill(null);
    };
    return (
        <div className={`${className} Skills`}>
            <h1 className="">Skills</h1>
            <p className="my-3 mx-5 text-center"> Drawing from my four years in college, hands-on internship, and continuous learning through online courses, my skill overview reflects a robust foundation in developing applications, blending academic knowledge with practical experience.
                <span className="accent-color"> Click the cards for more information.</span>
            </p>
            <div onClick={e => e.stopPropagation()}>
                <SkillModal showModal={showModal}
                    handleClose={handleCloseModal}
                    selectedSkill={selectedSkill} />
            </div>
            <div className="skill-cards-container" >
                <div className="row gx-1 gy-2 mb-2 row-custom " onMouseMove={handleOnMouseMove} >
                    {
                        skillData.map((skill, index) => (
                            <div className="col-4" key={index}>
                                <div className="skill-card" onClick={() => handleCardClick(skill)} > {/*  add oncllick for modal*/}
                                    <div className="card-content">
                                        <div className="icon-background">
                                            <IconRenderer skill={skill.skillHeadline} />
                                        </div>
                                        <h6 className="align-self-center">{skill.skillHeadline}</h6>
                                        <ul className="my-auto">
                                            {skill.skillList.map((item, index) => (
                                                <li className="fs-5" key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills;

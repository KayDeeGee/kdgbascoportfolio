import { Container } from 'react-bootstrap'
import { useState } from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import '../../sass/menu.scss'

function Menu() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [clickedIndex, setClickedIndex] = useState(0);

    const handleMouseOver = (index) => {
        setActiveIndex(index);
    };

    const handleOnClick = (index) => {
        setClickedIndex(index)
    }

    return (
        <>
            <div className={`menu-active-${activeIndex}`} id="Menu">
                <div id="menu-items">
                    <div className={`menu-item ${clickedIndex === 0 ? 'active' : ''}`} onMouseOver={() => handleMouseOver(0)} onClick={() => handleOnClick(0)}>About Me</div>
                    <div className={`menu-item ${clickedIndex === 1 ? 'active' : ''}`} onMouseOver={() => handleMouseOver(1)} onClick={() => handleOnClick(1)}>Skills</div>
                    <div className={`menu-item ${clickedIndex === 2 ? 'active' : ''}`} onMouseOver={() => handleMouseOver(2)} onClick={() => handleOnClick(2)}>Projects</div>
                </div>
                <div id="container-bg">
                    <div className="section-content">
                        {clickedIndex === 0 && <AboutMe className={clickedIndex === 0 ? 'active' : ''} />}
                        {clickedIndex === 1 && <Skills className={clickedIndex === 1 ? 'active' : ''} />}
                        {clickedIndex === 2 && <Projects className={clickedIndex === 2 ? 'active' : ''} />}
                        {clickedIndex === 3 && <Contacts className={clickedIndex === 3 ? 'active' : ''} />}
                    </div>
                </div>
                <div id="menu-background-pattern"></div>
                <div id="menu-background-image"></div>

            </div>
        </>
    )
}

export default Menu
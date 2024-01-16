import { useState } from "react";
import textCaptions from "../data/about-me-caps.json"
import "../../sass/menu.scss"
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";


function AboutMeCarousel() {
    const [currentText, setCurrentText] = useState(0);

    const nextText = () => {
        setCurrentText((currentText + 1) % textCaptions.length);
    };

    const prevText = () => {
        setCurrentText(currentText === 0 ? textCaptions.length - 1 : currentText - 1);
    };

    return (
        <div className="text-slider">
            {textCaptions.map((caption, index) => (
                <div key={index} className={`slider-text ${currentText === index ? 'active' : ''}`}>
                    <h4>{caption.textHeadline}</h4>
                    <p className="secondary-color">{caption.textString}</p>
                </div>
            ))
            }
            <button className="btn-sliders btn-prev" onClick={prevText}><BsChevronLeft /></button>
            <button className="btn-sliders btn-next" onClick={nextText}><BsChevronRight /></button>
        </div >
    )
}

export default AboutMeCarousel
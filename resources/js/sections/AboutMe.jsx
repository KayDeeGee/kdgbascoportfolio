import { Container } from 'react-bootstrap'
import AboutMeCarousel from '../components/AboutMeCarousel'
import "../../sass/menu.scss"
import { useState, useEffect } from 'react'

function AboutMe({ className }) {

    const roles = ["Web Developer", "Software Developer", "UI/UX Designer", "Programmer", "Frontend Developer", "Backend Developer", "Android Developer"]

    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentRole((prevIndex) => (prevIndex + 1) % roles.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={`${className} d-flex flex-column h-100`}>
            <div className="d-flex flex-column align-items-center h-100">
                <div className="my-img"></div>
                <h1>Kyle Bryan Basco</h1>
                {roles.map((role, index) => (
                    <h2 key={index} className={`slider-text ${currentRole === index ? 'active' : ''} accent-color`}>
                        {role}
                    </h2>
                ))}
                <AboutMeCarousel />
            </div>
            <div className="mt-auto mb-3 text-center">
                <h6>Contacts</h6>
                <p>0992-350-5430</p>
                <p>
                    bascokylebryan@gmail.com
                </p>
            </div>
        </div>
    )
}

export default AboutMe
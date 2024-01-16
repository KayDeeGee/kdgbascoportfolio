import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom";


function Navbar() {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <NavbarBs sticky='top' className='mb-3 bg-white shadow-sm'>
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to='/' onClick={() => scrollToSection('about')}>
                        About me
                    </Nav.Link>
                    <Nav.Link to='/' onClick={() => scrollToSection('skills')}>
                        Skills
                    </Nav.Link>
                    <Nav.Link to='/' onClick={() => scrollToSection('projects')}>
                        Projects
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}

export default Navbar
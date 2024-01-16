import { FaLaptopCode, FaMobileAlt, FaDesktop  } from 'react-icons/fa';
import { RiPsychotherapyLine } from "react-icons/ri";
import { BsDatabase, BsThreeDots  } from "react-icons/bs";

export default function IconRenderer({ skill }) {
    const iconMap = {
        "Frontend Development": <FaLaptopCode className="icon-center" style={{ fontSize: "150px", color: "#B2AC8842", }} />,
        "Backend Development": <BsDatabase className="icon-center" style={{ fontSize: "150px", color: "#B2AC8842", }} />,
        "Mobile Development": <FaMobileAlt className="icon-center" style={{ fontSize: "150px", color: "#B2AC8842", }} />,
        "Desktop Development": <FaDesktop  className="icon-center" style={{ fontSize: "150px", color: "#B2AC8842", }} />,
        "Soft Skills": <RiPsychotherapyLine   className="icon-center" style={{ fontSize: "150px", color: "#B2AC8842", }} />,
        "Others": <BsThreeDots  className="icon-center" style={{ fontSize: "150px", color: "#B2AC8842", }} />,
    };

    return (
        iconMap[skill]
    )
}
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const Footer: React.FC = () => (
    <footer className="absolute bottom-5 flex gap-6 flex-wrap justify-center items-end">
        <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/in/jaime360/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaLinkedinIn />
            Linkedin
        </a>
        {/* <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/in/jaime360/"
            target="_blank"
            rel="noopener noreferrer"
        >
            Developer
            <IoIosArrowRoundForward />
        </a> */}
    </footer>
)

export default Footer;
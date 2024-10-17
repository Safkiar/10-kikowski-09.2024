import './Curtain.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

function Curtain() {
  return (
    <ul className="curtain">
      <li>
        <a href="https://github.com/Safkiar">
          <FaGithub className="icon" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/micha%C5%82-kikowski-6bab9720b/">
          <FaLinkedin className="icon" />
        </a>
      </li>
      <li>
        <a href="https://www.codewars.com/users/MrKikowski">
          <SiCodewars className="icon" />
        </a>
      </li>
    </ul>
  );
}

export default Curtain;
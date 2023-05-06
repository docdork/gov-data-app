import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

import githubLogo from '../assets/github-mark-white.png'

const Footer = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
          <Link className={classes.link} to="https://github.com/docdork">
            <img src={githubLogo} alt='GitHub Link' className={classes.githubLogo}/>
          </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Footer;

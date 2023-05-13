import PageContent from "../components/PageContent";
import { NavLink } from "react-router-dom";
import classes from "./Home.module.css";

function Home() {
  return (
    <PageContent title={"Pick an Info Page"}>
      <ul className={classes.list}>
        <li>
          <NavLink to="/floods">Floods</NavLink>
        </li>
        <li>
          <NavLink to="/police">Police</NavLink>
        </li>
        <li>
          <NavLink to="/mps">MPs</NavLink>
        </li>
      </ul>
    </PageContent>
  );
}

export default Home;

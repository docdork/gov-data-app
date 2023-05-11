import PageContent from "../components/PageContent";
import {NavLink } from "react-router-dom";
import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.content}>
      <PageContent title={"Pick an Info Page"}>
        <ul className={classes.list}>
          <li>
            <div className={classes.link}>
              <NavLink to="/floods">Floods</NavLink>
            </div>
          </li>
          {/* <li>
            <div className={classes.link}>
              <NavLink to="/police">Police</NavLink>
            </div>
          </li> */}
        </ul>
      </PageContent>
    </div>
  );
}

export default Home;

import PageContent from "../components/PageContent";
import { NavLink, Link } from "react-router-dom";
import classes from "./Home.module.css";

function Home() {
  return (
    <div>
      <PageContent title={"Pick an Info Page"}>
        <ul>
          <li>
            <NavLink to="/floods">Floods</NavLink>
          </li>
          <li>
            <NavLink to="/police">Police</NavLink>
          </li>
          <li>
            <Link to='/mps'>
            
              MPs
            </Link>
          </li>
        </ul>
      </PageContent>
    </div>
  );
}

export default Home;

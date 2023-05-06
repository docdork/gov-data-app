import PageContent from "../components/PageContent";
import { Link } from "react-router-dom";
import classes from './Home.module.css';

function Home() {
  return (
    <PageContent title={"Pick an Info Page"} >
      <div className={classes.content}>
        
          <Link className={classes.link} to="/floods">
            Floods
          </Link>
          <Link className={classes.link} to="/police">
            Police
          </Link>
      </div>
    </PageContent>
  );
}

export default Home;

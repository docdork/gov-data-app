import classes from "./Police.module.css";
import { useEffect, useState } from "react";

import PageContent from "../components/PageContent";
import PoliceDetailModal from "../components/PoliceDetailModal";

const Police = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [fetchedForces, setFetchedForces] = useState();
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch(`https://data.police.uk/api/forces`);

      if (!response.ok) {
        setError("Fetching forces failed.");
      } else {
        const resData = await response.json();
        setFetchedForces(resData);
      }
      setIsLoading(false);
    }
    fetchEvents();
  }, []);

  // console.log(fetchedForces)
  const detailClickHandler = (event) => {
    setShowDetail(true);

    // const id = event.target.parentNode.getAttribute("data-id");
    // const message = event.target.parentNode.getAttribute("data-message");
    // const area = event.target.parentNode.getAttribute("data-area");
    // const desc = event.target.parentNode.getAttribute("data-description");

    // setFloodMessage(message);
    // setFloodId(id);
    // setFloodDesc(desc);
    // setFloodArea(area);
  };

  const detailCloseHandler = () => {
    setShowDetail(false);
  };

  return (
    <PageContent title={"Police"}>
      <PoliceDetailModal
        onClose={detailCloseHandler}
        show={showDetail}

      />

      <div className={classes.container}>
        <ul className={classes.policeList}>
          {fetchedForces &&
            fetchedForces.map(({ id, name }) => (
              <li key={id} className={classes.policeInfo}>
                <h2>{name}</h2>
                <button onClick={detailClickHandler}>Details</button>
              </li>
            ))}
        </ul>
      </div>
    </PageContent>
  );
};

export default Police;

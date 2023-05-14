import classes from "./Police.module.css";
import { useEffect, useState } from "react";

import PageContent from "../components/PageContent";
import PoliceDetailModal from "../components/PoliceDetailModal";

const Police = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [fetchedForces, setFetchedForces] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [filteredForces, setFilteredForces] = useState([]);
  const [forceDetails, setForceDetails] = useState([]);
  const [detailForceID, setDetailForceID] = useState("cumbria");

  useEffect(() => {
    async function fetchForceDetails() {
      const response = await fetch(
        `https://data.police.uk/api/forces/${detailForceID}`
      );

      if (!response.ok) {
        setError("Fetching Force Details Failed!!!");
      } else {
        const resData = await response.json();
        setForceDetails(resData);
      }
      setIsLoading(false);
    }
    fetchForceDetails();
  }, [detailForceID]);

  const detailCloseHandler = () => {
    setShowDetail(false);
  };

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch(`https://data.police.uk/api/forces`);

      if (!response.ok) {
        console.log('fetching forces failed');
        setError("Fetching Forces failed.");
      } else {
        const resData = await response.json();
        setFetchedForces(resData);
        setFilteredForces(resData);
      }
      setIsLoading(false);
    }
    fetchEvents();
  }, []);

  const detailClickHandler = (event) => {
    setShowDetail(true);

    const id = event.target.parentNode.getAttribute("data-id");

    setDetailForceID(id);
  };

  const filterChangeHandler = (event) => {
    setFilteredForces(
      fetchedForces.filter((force) => {
        return (
          force.name.toLowerCase().indexOf(event.target.value.toLowerCase()) >
          -1
        );
      })
    );
  };

  return (
    <PageContent title={"Police"}>
      <form>
        <input
          id="forces-filter"
          placeholder="Filter by Force"
          onChange={filterChangeHandler}
        />
      </form>

      {fetchedForces === 0 && <h2>Nothing to Show</h2>}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <PoliceDetailModal
        onClose={detailCloseHandler}
        show={showDetail}
        forceDetails={forceDetails}
      />

      <div className={classes.container}>
        <ul className={classes.policeList}>
          {filteredForces &&
            filteredForces.map(({ id, name }) => (
              <li key={id} className={classes.policeInfo} data-id={id}>
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

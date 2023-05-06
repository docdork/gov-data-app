import React from "react";
import PageContent from "../components/PageContent";
import { useState, useEffect } from "react";
import classes from "./Floods.module.css";
import FloodForm from "../components/FloodForm";

function Floods() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedFloods, setFetchedFloods] = useState();
  const [error, setError] = useState("");

  const [minSeverity, setMinSeverity] = useState(4);

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch(
        `https://environment.data.gov.uk/flood-monitoring/id/floods?min-severity=${minSeverity}`
      );

      if (!response.ok) {
        setError("Fetching floods failed.");
      } else {
        const resData = await response.json();
        // console.log(resData.items);
        setFetchedFloods(resData.items);
      }
      setIsLoading(false);
    }
    fetchEvents();
  }, []);

  return (
    <PageContent title={"Floods"}>
        
        <FloodForm/>
        
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className={classes.container}>
        <ul className={classes.floodList}>
          {fetchedFloods &&
            fetchedFloods.map(
              ({
                floodAreaID,
                description,
                eaAreaName,
                severityLevel,
                message,
              }) => (
                <li key={floodAreaID} className={classes.floodInfo}>
                  <h2>{description}</h2>
                  <h3>{eaAreaName}</h3>
                  <h4>Severity = {severityLevel}</h4>
                  <p>{message}</p>
                </li>
              )
            )}
        </ul>
      </div>
    </PageContent>
  );
}

export default Floods;

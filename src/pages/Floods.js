import React from "react";
import PageContent from "../components/PageContent";
import { useState, useEffect } from "react";
import classes from "./Floods.module.css";
import FloodDetailModal from "../components/FloodDetailModal";

function Floods(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedFloods, setFetchedFloods] = useState([]);
  const [error, setError] = useState("");
  const [floodValue, setFloodValue] = useState(4);
  const severityChangeHandler = (event) => {
    setFloodValue(event.target.value);
  };
  const [showFilter, setShowFilter] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [floodMessage, setFloodMessage] = useState("None");
  const [floodId, setFloodId] = useState();
  const [floodDesc, setFloodDesc] = useState();
  const [floodArea, setFloodArea] = useState();

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch(
        `https://environment.data.gov.uk/flood-monitoring/id/floods?min-severity=${floodValue}`
      );

      if (!response.ok) {
        setError("Fetching floods failed.");
      } else {
        const resData = await response.json();
        setFetchedFloods(resData.items);
      }
      setIsLoading(false);
    }
    fetchEvents();
  }, [floodValue]);

  const detailClickHandler = (event) => {
    setShowDetail(true);

    const id = event.target.parentNode.getAttribute("data-id");
    const message = event.target.parentNode.getAttribute("data-message");
    const area = event.target.parentNode.getAttribute("data-area");
    const desc = event.target.parentNode.getAttribute("data-description");

    setFloodMessage(message);
    setFloodId(id);
    setFloodDesc(desc);
    setFloodArea(area);
  };

  const detailCloseHandler = () => {
    setShowDetail(false);
    setFloodMessage("None");
  };

  const filterClickHandler = (event) => {
    event.preventDefault();
    console.log("filter button clicked");
    setShowFilter(true);
  };

  return (
    <>
      <PageContent title={"Floods"}>
      <form>
          <label htmlFor="number-input">
            What Severity do you want to see?
          </label>
          <input
            id="number-input"
            type="number"
            value={floodValue}
            onChange={severityChangeHandler}
            min="1"
            max="4"
          />
        </form>

        <FloodDetailModal
          onClose={detailCloseHandler}
          show={showDetail}
          floodDesc={floodDesc}
          floodID={floodId}
          floodMessage={floodMessage}
          floodArea={floodArea}
        />

        <p>Flood Severity {floodValue} and worse.</p>
        {fetchedFloods.length === 0 && <h2>Nothing to Show</h2>}
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div>
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
                  <li
                    key={floodAreaID}
                    className={classes.floodInfo}
                    data-id={floodAreaID}
                    data-message={message}
                    data-description={description}
                    data-area={eaAreaName}
                  >
                    <h2>{description}</h2>
                    <h3>{eaAreaName}</h3>
                    <h4>Severity = {severityLevel}</h4>
                    <button onClick={detailClickHandler}>Details</button>
                  </li>
                )
              )}
          </ul>
        </div>
      </PageContent>
    </>
  );
}

export default Floods;

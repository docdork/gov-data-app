import classes from "./MPs.module.css";
import PageContent from "../components/PageContent";
import { useState, useEffect } from "react";

import MPDetail from "../components/MPDetail";

const MPs = () => {
  const [mpList, setMpList] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [mpDetails, setMpDetails] = useState({});
  const [detailMpId, setDetailMpId] = useState(3898);
  const [detailConstituency, setDetailConstituency] = useState("");
  const [detailParty, setDetailParty] = useState('');

  //Fetch MP Details
  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch(
        `https://members-api.parliament.uk/api/Members/${detailMpId}`
      );

      if (!response.ok) {
        setError("Fetching floods failed.");
      } else {
        const resData = await response.json();
        setMpDetails(resData.value);
        setDetailConstituency( resData.value.latestHouseMembership.membershipFrom)
        setDetailParty( resData.value.latestParty.name)
      }
      setIsLoading(false);
    }
    fetchEvents();
  }, [detailMpId]);

  //Fetch a list of MPs
  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch(
        `https://members-api.parliament.uk/api/Members/search`
      );

      if (!response.ok) {
        setError("Fetching MPs failed.");
      } else {
        const resData = await response.json();
        setMpList(resData.items);
      }
      setIsLoading(false);
    }
    fetchEvents();
  }, []);

  const detailCloseHandler = () => {
    setShowDetail(false);
    setDetailMpId(172);
  };

  const detailClickHandler = (event) => {
    const id = event.target.parentNode.getAttribute("data-id");
    setDetailMpId(id);
    setShowDetail(true);
  };
  const optionChangeHandler = (event) => {
    const id = document.getElementById("mpSelector").value;
    setDetailMpId(id);
    setShowDetail(true);
  };

  return (
    <PageContent title={"MPs"}>
      {mpList === 0 && <h2>Nothing to Show</h2>}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <select
        className={classes.selector}
        id="mpSelector"
        onChange={optionChangeHandler}
      >
        {mpList &&
          mpList.map(({ value }) => (
            <option key={value.id} value={value.id}>
              {value.nameFullTitle}
            </option>
          ))}
      </select>

      <ul>
        {mpList &&
          mpList.map(({ value }) => (
            <li
              key={value.id}
              mpname={value.nameFullTitle}
              className={classes.mpInfo}
              data-id={value.id}
            >
              <h2>{value.nameFullTitle}</h2>
              <button onClick={detailClickHandler}>Details</button>
            </li>
          ))}
      </ul>

      <MPDetail
        key={mpDetails.id}
        onClose={detailCloseHandler}
        show={showDetail}
        mpId={mpDetails.id}
        mpName={mpDetails.nameFullTitle}
        pic={mpDetails.thumbnailUrl}
        constituency={detailConstituency}
        party={detailParty}
      />
    </PageContent>
  );
};

export default MPs;

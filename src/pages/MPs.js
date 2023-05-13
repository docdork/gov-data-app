import classes from "./MPs.module.css";
import PageContent from "../components/PageContent";
import { useState, useEffect } from "react";

const MPs = () => {
  const [mpList, setMpList] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch(
        `https://members-api.parliament.uk/api/Members/search`
      );

      if (!response.ok) {
        setError("Fetching floods failed.");
      } else {
        const resData = await response.json();
        setMpList(resData.items);
      }
      setIsLoading(false);
    }

    fetchEvents();
  }, []);

  return (
    <PageContent title={"MPs"}>
      <ul>
        {mpList &&
          mpList.map(({ value }) => (
            <li
              key={value.id}
              mpname={value.nameFullTitle}
              className={classes.mpInfo}
            >
                <h2>{value.nameFullTitle}</h2>
                <p>{value.id}</p>
              <button >Details</button>
            </li>
          ))}
      </ul>
    </PageContent>
  );
};

export default MPs;

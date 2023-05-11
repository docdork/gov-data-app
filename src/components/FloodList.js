import classes from "./FloodList.module.css";

const Floodlist = (props) => {
  return (
    <div className={classes.container}>
      <ul className={classes.floodList}>
        {props.fetchedFloods &&
          props.fetchedFloods.map(
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
                onClick={props.detailClick}
              >
                <h2>{description}</h2>
                <h3>{eaAreaName}</h3>
                <h4>Severity = {severityLevel}</h4>
                <p>{message}</p>
              </li>
            )
          )}
      </ul>
    </div>
  );
};

export default Floodlist;

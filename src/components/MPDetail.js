import classes from "./DetailModal.module.css";
// import { Link } from "react-router-dom";
const MPDetail = (props) => {
  if (!props.show) {
    return null;
  }

  if (props.isLoading) {
    return (<h1>Loading...</h1>)
  }

  return (
    <div className={classes.modal} onClick={props.onClose}>
      <div className={classes.modalContent}>
        <div className={classes.modalHeader}>
          <h4 className={classes.modalTitle}>MP Details</h4>
        </div>
        <div className={classes.modalBody}>
          <ul>
            <li>
              <h2>{props.mpName}</h2>
            </li>
            <li>
              <h3>{props.constituency}</h3>
            </li>
            <li>
              <h4>{props.party}</h4>
            </li>
            <li>
              <img
                src={`https://members-api.parliament.uk/api/Members/${props.mpId}/Thumbnail`}
                alt={props.mpName}
              />
            </li>
          </ul>
        </div>
        <div className={classes.modalFooter}>
          <button onClick={props.onClose} className={classes.button}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MPDetail;

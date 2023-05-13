import classes from "./PoliceDetailModal.module.css";
import { Link } from "react-router-dom";

const PoliceDetailModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.modalHeader}>
          <h4 className={classes.modalTitle}>Force Details</h4>
        </div>
        <div className={classes.modalBody}>
          <ul>
            <li>
              {props.forceDetails.description &&
                props.forceDetails.description.replace(/<\/?[^>]+>/gi, "")}
            </li>
            {!props.forceDetails.description && <li>No Description</li>}
            {props.forceDetails.url && (
              <li>
                <Link className={classes.url} to={props.forceDetails.url}>
                  {props.forceDetails.url}
                </Link>
              </li>
            )}
            {!props.forceDetails.url && <li>No URL</li>}
            {props.forceDetails.telephone && (
              <li>Telephone: {props.forceDetails.telephone}</li>
            )}
            {!props.forceDetails.telephone && <li>No Telephone Number</li>}
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

export default PoliceDetailModal;

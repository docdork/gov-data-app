import classes from "./FloodDetailModal.module.css";

const FloodDetailModal = (props) => {

  if (!props.show) {
    return null;
  }


  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.modalHeader}>
          <h4 className={classes.modalTitle}>Flood Details</h4>
        </div>
        <div className={classes.modalBody}>
          <h3> {props.floodDesc}</h3>
          <h4>{props.floodArea}</h4>
          <h4>Flood ID: {props.floodID}</h4>
          <p><b>Warning Description:</b> {props.floodMessage}</p>
        </div>
        <div className={classes.modalFooter}>
          <button onClick={props.onClose} className={classes.button}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default FloodDetailModal;

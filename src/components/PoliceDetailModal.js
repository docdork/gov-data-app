import classes from "./PoliceDetailModal.module.css";

const PoliceDetailModal = (props) => {

  if (!props.show) {
    return null;
  }


  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.modalHeader}>
          <h4 className={classes.modalTitle}>Police Details</h4>
        </div>
        <div className={classes.modalBody}>
          <h2>Constabulary Details Here</h2>
        </div>
        <div className={classes.modalFooter}>
          <button onClick={props.onClose} className={classes.button}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default PoliceDetailModal;

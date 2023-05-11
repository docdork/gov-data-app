import classes from "./FloodFilterModal.module.css";

const FloodFilterModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.modalHeader}>
          <h4 className={classes.modalTitle}>Flood Filter Settings</h4>
        </div>
        <form>
          <label htmlFor="number-input">
            What Severity do you want to see?
          </label>
          <input
            id="number-input"
            type="number"
            value={props.floodValue}
            onChange={props.formChange}
            min="1"
            max="4"
          />
        </form>

        <button onClick={props.onClose} className={classes.button}>
          Close
        </button>
      </div>
    </div>
  );
};

export default FloodFilterModal;

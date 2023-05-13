import classes from "./ForceFilterModal.module.css";

const ForceFilterModal = (props) => {
  return (
    <>
      <div className={classes.modal}>
        <input
          id="forces-filter"
          placeholder="Filter by Force"
          onChange={props.changer}
          className={classes.modalInput}
        />
      </div>
    </>
  );
};

export default ForceFilterModal;

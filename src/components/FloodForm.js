import classes from "./FloodForm.module.css";
// import { useState } from "react";

const FloodForm = (props) => {
  

  

  return (
    <div className={classes.all}>
      <form>
        <label htmlFor="number-input">What Severity do you want to see?</label>
        <input
          id="number-input"
          type="number"
          value={props.floodValue}
          onChange={props.formChange}
          min="1"
          max="4"
        />
        
      </form>
    </div>
  );
};

export default FloodForm;

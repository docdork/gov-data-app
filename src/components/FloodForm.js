import classes from "./FloodForm.module.css";
import { useState } from "react";

const FloodForm = () => {
  const [floodValue, setFloodValue] = useState(4);

  const changeHandler = event => {
    setFloodValue(event.target.value);
  };

  return (
    <div className={classes.all}>
      <form>
        <label for="number-input">What Severity do you want to see?</label>
        <input
          id="number-input"
          type="number"
          value={floodValue}
          onChange={changeHandler}
          min="1"
          max="4"
        />
        <p>{floodValue}</p>
      </form>
    </div>
  );
};

export default FloodForm;

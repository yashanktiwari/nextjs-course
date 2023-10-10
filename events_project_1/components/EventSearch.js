import Button from "./ui/Button";
import classes from "./EventSearch.module.css";
import { useRef } from "react";

const EventSearch = (props) => {
  const year = useRef();
  const month = useRef();
  function submitHandler(e) {
    e.preventDefault();

    props.onSearch(year.current.value, month.current.value);
  }

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="year">Year</label>
            <select name="" id="year" ref={year}>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>

          <div className={classes.control}>
            <label htmlFor="month">Month</label>
            <select id="month" ref={month}>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
        </div>
        <Button>Find Events</Button>
      </form>
    </>
  );
};

export default EventSearch;

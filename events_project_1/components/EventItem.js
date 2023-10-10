import classes from "./EventItem.module.css";
import Button from "./ui/Button";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  return (
    <>
      <li className={classes.item}>
        <img src={"/" + image} alt={title} srcSet="" />
        <div className={classes.content}>
          <div className={classes.summary}>
            <h2>{title}</h2>
            <div className={classes.date}>
              <time>{humanReadableDate}</time>
            </div>
            <div className={classes.address}>
              <address>{formattedAddress}</address>
            </div>
          </div>

          <div className={classes.actions}>
            <Button link={`/events/${id}`}>Explore Event</Button>
          </div>
        </div>
      </li>
    </>
  );
};

export default EventItem;

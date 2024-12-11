import Button from "../../UI/Button";
import classes from "./ErrorPage.module.css";

export default function ErrorPage({ error, onConfirm }) {
  return (
    <div className={classes.error}>
      <h2>An error ocurred!</h2>
      <p>{error.message}</p>
      <Button onSubmit={onConfirm}>Ok</Button>
    </div>
  );
}

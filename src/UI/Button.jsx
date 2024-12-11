import classes from "./Button.module.css";

export default function Button({ type, onSubmit, children }) {
  return (
    <button
      className={classes["custom-button"]}
      type={type || null}
      onClick={onSubmit || null}
    >
      {children}
    </button>
  );
}

import classes from "./UserForm.module.css";
import { useState, useContext } from "react";
import { UserContext } from "../../store/github-user-context";
import Button from "../../UI/Button";
import { validateUserName } from "../../utils/validation";

export default function UserForm() {
  const [inputName, setInputName] = useState("");

  const { getUserInfo, resetUserData } = useContext(UserContext);

  function handleInputName(e) {
    setInputName(e.target.value);
  }

  function handleSubmitName(e) {
    e.preventDefault();
    resetUserData();

    const userNameError = validateUserName(inputName);

    if (userNameError) {
      console.log(userNameError.message);
      return;
    }

    const userData = getUserInfo(inputName);
    setInputName("");
  }

  function handleResetInputName() {
    setInputName("");
  }

  return (
    <form onSubmit={handleSubmitName}>
      <label className={classes["user-label"]} htmlFor="username">
        USERNAME
      </label>
      <input
        className={classes["user-input"]}
        type="text"
        id="username"
        name="username"
        value={inputName}
        onChange={handleInputName}
      />
      <div>
        <Button type="reset" onSubmit={handleResetInputName}>
          Reset
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}

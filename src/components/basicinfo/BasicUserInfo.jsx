import { useContext } from "react";
import classes from "./BasicUserInfo.module.css";
import { UserContext } from "../../store/github-user-context";

export default function BasicInfo() {
  const { userInfo } = useContext(UserContext);
  const { user } = userInfo;

  if (Object.keys(user).length === 0) {
    return;
  }

  return (
    <div className={classes["user-info"]}>
      <img
        className={classes["profile-image"]}
        src={user["avatar_url"]}
        alt="user-picture"
      />
      <p>
        Followers: <span>{user.followers}</span>
      </p>
      <p>
        <a href={user["html_url"]}>{user.login}</a> from{" "}
        {user.location || "undefined"}
      </p>
      <p>{user.bio}</p>
      <p>Public Repositories {user["public_repos"]}</p>
    </div>
  );
}

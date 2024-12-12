import { useContext } from "react";
import classes from "./BasicUserInfo.module.css";
import { UserContext } from "../../store/github-user-context";

export default function BasicInfo() {
  const { userInfo } = useContext(UserContext);

  if (Object.keys(userInfo).length === 0) {
    return;
  }

  return (
    <div className={classes["user-info"]}>
      <img
        className={classes["profile-image"]}
        src={userInfo["avatar_url"]}
        alt="user-picture"
      />
      <p>
        Followers: <span>{userInfo.followers}</span>
      </p>
      <p>
        <a href={userInfo["html_url"]}>{userInfo.login}</a> from{" "}
        {userInfo.location || "undefined"}
      </p>
      <p>{userInfo.bio}</p>
      <p>Public Repositories {userInfo["public_repos"]}</p>
    </div>
  );
}

import { useContext } from "react";
import classes from "./UserRepos.module.css";
import { UserContext } from "../../store/github-user-context";
import RepoItem from "./RepoItem";

export default function UserRepos() {
  const { userRepos } = useContext(UserContext);

  if (userRepos.length === 0) {
    return;
  }

  return (
    <div className={classes["user-repos"]}>
      <div className={classes.title}>
        <h2>{userRepos.login} Repositories</h2>
      </div>
      <div>
        <ul>
          {userRepos.map((repo) => (
            <RepoItem key={repo.id} repoData={repo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

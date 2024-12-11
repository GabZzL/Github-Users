import { useContext } from "react";
import classes from "./UserRepos.module.css";
import { UserContext } from "../../store/github-user-context";
import RepoItem from "./RepoItem";

export default function UserRepos() {
  const { userInfo } = useContext(UserContext);
  const { user, repos } = userInfo;

  console.log(repos);

  if (repos.length === 0) {
    return;
  }

  return (
    <div className={classes["user-repos"]}>
      <div className={classes.title}>
        <h2>{user.login} Repositories</h2>
      </div>
      <div>
        <ul>
          {repos.map((repo) => (
            <RepoItem key={repo.id} repoData={repo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

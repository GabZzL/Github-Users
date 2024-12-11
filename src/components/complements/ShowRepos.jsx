import { useContext } from "react";
import { UserContext } from "../../store/github-user-context";
import Button from "../../UI/Button";

export default function ShowRepos() {
  const { userInfo, getUserRepos } = useContext(UserContext);
  const { user } = userInfo;

  if (Object.keys(user).length === 0) {
    return;
  }

  return (
    <Button onSubmit={() => getUserRepos(user.login)}>Show Repositories</Button>
  );
}

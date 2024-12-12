import { useContext } from "react";
import { UserContext } from "../../store/github-user-context";
import Button from "../../UI/Button";

export default function ShowRepos() {
  const { userInfo, getUserRepos } = useContext(UserContext);

  if (Object.keys(userInfo).length === 0) {
    return;
  }

  return (
    <Button onSubmit={() => getUserRepos(userInfo.login)}>
      Show Repositories
    </Button>
  );
}

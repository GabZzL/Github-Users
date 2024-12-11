import { useContext } from "react";
import { UserContext } from "./store/github-user-context";
import classes from "./App.module.css";
import Header from "./components/complements/Header";
import UserForm from "./components/userform/UserForm";
import BasicInfo from "./components/basicinfo/BasicUserInfo";
import UserRepos from "./components/repositories/UserRepos";
import ShowRepos from "./components/complements/ShowRepos";
import Modal from "./UI/Modal";
import ErrorPage from "./components/complements/ErrorPage";
import Loading from "./components/complements/Loading";

function App() {
  const { error, isLoading, resetError } = useContext(UserContext);

  return (
    <div className={classes.container}>
      <Modal open={error} onClose={resetError}>
        {error && <ErrorPage error={error} onConfirm={resetError} />}
      </Modal>
      <Header title="Git Hub Users Octoverse" />
      {!error && (
        <main className={classes.profile}>
          <UserForm />
          {isLoading && <Loading />}
          <BasicInfo />
          <ShowRepos />
          <UserRepos />
        </main>
      )}
    </div>
  );
}

export default App;

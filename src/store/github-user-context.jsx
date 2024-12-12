import { useState, createContext, useMemo, useReducer } from "react";
import { getGitHubUserData, getGitHubUserRepos } from "../utils/http";

export const UserContext = createContext({
  userInfo: {},
  userRepos: [],
  error: undefined,
  isLoading: undefined,
  resetError: () => {},
  resetUserData: () => {},
  getUserInfo: () => {},
  getUserRepos: () => {},
});

function userReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload, isLoading: false };
    case "SET_REPOS":
      return { ...state, repos: action.payload, isLoading: false };
    case "SET_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    case "RESET_USER":
      return { ...state, user: {}, repos: [] };
    case "RESET_ERROR":
      return { ...state, error: false };
    case "SET_LOADING":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

export default function UserContextProvider({ children }) {
  const [userData, userDataDispatch] = useReducer(userReducer, {
    user: {},
    repos: [],
    error: false,
    isLoading: false,
  });
  // const [userData, setUserData] = useState({ user: {}, repos: [] });
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  function handleResetUserData() {
    // setUserData({ user: {}, repos: [] });
    userDataDispatch({ type: "RESET_USER" });
  }

  function handleResetError() {
    userDataDispatch({ type: "RESET_ERROR" });
  }

  async function handleGetUserInfo(userName) {
    userDataDispatch({ type: "SET_LOADING" });

    try {
      const basicUserData = await getGitHubUserData(userName);
      userDataDispatch({ type: "SET_USER", payload: basicUserData });
      // setUserData((prevData) => {
      //   return { ...prevData, user: basicUserData };
      // });
    } catch (error) {
      userDataDispatch({
        type: "SET_ERROR",
        payload: error.message || "Failed to fetch user data",
      });
      // setError({ message: error.message || "Failed to fetch user data" });
    }
  }

  async function handleGetUserRepos(userName) {
    userDataDispatch({ type: "SET_LOADING" });

    try {
      const userRepos = await getGitHubUserRepos(userName);
      userDataDispatch({ type: "SET_REPOS", payload: userRepos });
      // setUserData((prevData) => {
      //   return { ...prevData, repos: userRepos };
      // });
    } catch (error) {
      userDataDispatch({
        type: "SET_ERROR",
        payload: error.message || "Failed to fetch user repositories",
      });
      // setError({
      //   message: error.message || "Failed to fetch user repositories",
      // });
    }
  }

  const ctxValue = useMemo(
    () => ({
      userInfo: userData.user,
      userRepos: userData.repos,
      error: userData.error,
      isLoading: userData.isLoading,
      resetError: handleResetError,
      resetUserData: handleResetUserData,
      getUserInfo: handleGetUserInfo,
      getUserRepos: handleGetUserRepos,
    }),
    [userData]
  );

  return (
    <UserContext.Provider value={ctxValue}>{children}</UserContext.Provider>
  );
}

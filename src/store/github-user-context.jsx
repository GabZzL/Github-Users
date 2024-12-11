import { useState, createContext, useEffect } from "react";
import { getGitHubUserData, getGitHubUserRepos } from "../utils/http";

export const UserContext = createContext({
  userInfo: {},
  error: undefined,
  isLoading: undefined,
  resetError: () => {},
  resetUserData: () => {},
  getUserInfo: () => {},
  getUserRepos: () => {},
});

export default function UserContextProvider({ children }) {
  const [userData, setUserData] = useState({ user: {}, repos: [] });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleResetUserData() {
    setUserData({ user: {}, repos: [] });
  }

  function handleResetError() {
    setError(null);
  }

  async function handleGetUserInfo(userName) {
    setIsLoading(true);

    try {
      const basicUserData = await getGitHubUserData(userName);
      setUserData((prevData) => {
        return { ...prevData, user: basicUserData };
      });
    } catch (error) {
      setError({ message: error.message || "Failed to fetch user data" });
    }

    setIsLoading(false);
  }

  async function handleGetUserRepos(userName) {
    setIsLoading(true);

    try {
      const userRepos = await getGitHubUserRepos(userName);
      setUserData((prevData) => {
        return { ...prevData, repos: userRepos };
      });
    } catch (error) {
      setError({
        message: error.message || "Failed to fetch user repositories",
      });
    }

    setIsLoading(false);
  }

  const ctxValue = {
    userInfo: userData,
    error: error,
    isLoading: isLoading,
    resetError: handleResetError,
    resetUserData: handleResetUserData,
    getUserInfo: handleGetUserInfo,
    getUserRepos: handleGetUserRepos,
  };

  return (
    <UserContext.Provider value={ctxValue}>{children}</UserContext.Provider>
  );
}

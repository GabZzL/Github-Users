function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getGitHubUserData(userName) {
  await delay(2000);

  const res = await fetch(`https://api.github.com/users/${userName}`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }

  return data;
}

export async function getGitHubUserRepos(userName) {
  await delay(2000);

  const res = await fetch(`https://api.github.com/users/${userName}/repos`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch user repositories");
  }

  const repos = data.slice(0, 3);

  return repos;
}

import classes from "./RepoItem.module.css";

export default function RepoItem({ repoData }) {
  const dateArr = repoData["created_at"].split("");
  const date = dateArr.slice(0, 10).join("");

  return (
    <li>
      <div className={classes.repository}>
        <a className={classes["repository-title"]} href={repoData["html_url"]}>
          {repoData.name}
        </a>
        <p className={classes["repository-details"]}>
          {repoData.description || "undefined"} <br />
          Lenguage: {repoData.language || "undefined"} <br />
          Created at: {date || "undefined"}
        </p>
      </div>
    </li>
  );
}

import classes from './Header.module.css'
import gitHubLogo from '../../assets/github-logo.png'

export default function Header({ title }) {
  return (
    <header>
      <img src={gitHubLogo} alt="github-logo" />
      <h1>{title}</h1>
    </header>
  );
}

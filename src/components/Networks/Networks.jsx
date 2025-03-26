import './Networks.scss';
import CV from '../../datas/Besancon-JBaptiste-CV.pdf';
import { Link } from 'react-router';

function Networks() {
  return (
    <div className="networks">
      <ul>
        <li>
          <Link to={CV} target="_blank">
            <img src="./images/cv.svg" alt="Logo Githhub"></img>
          </Link>
        </li>
        <li>
          <Link to={'https://github.com/JBB777'} target="_blank">
            <img src="./images/github-mark-white.svg" alt="Logo Githhub"></img>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Networks;

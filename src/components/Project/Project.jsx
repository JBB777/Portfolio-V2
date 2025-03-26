import './Project.scss';
import Tag from '../Tag/Tag';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Project({ img, txtAlt, title, link, description, technos }) {
  return (
    <div className="project">
      <img src={img} alt={txtAlt} />
      <div>
        {link ? (
          <h4>
            <Link to={link} target="_blank">
              {title}
              <FontAwesomeIcon
                className="project__icon"
                icon={faArrowUpRightFromSquare}
              />
            </Link>
          </h4>
        ) : (
          <h4>{title}</h4>
        )}

        <p>{description}</p>
        <div className="project__tags">
          {technos.map((name, index) => {
            return <Tag name={name} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;

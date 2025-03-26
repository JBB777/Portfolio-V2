import './Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#about">
            <span className="styledList"></span>
            <span>A propos</span>
          </a>
        </li>
        <li>
          <a href="#projets">
            <span className="styledList"></span>
            <span>Projets</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

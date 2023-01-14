import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaCog, FaMicrophone, FaAngleLeft } from 'react-icons/fa';
import './style.css';

const Header = ({ title, className, page }) => (
  <header className="header">
    <nav className="navbar">
      <div className={className}>
        <Link to={page} className="link flex justify-center align-center">
          <FaAngleLeft />
        </Link>
      </div>
      <div>
        <h3>{title}</h3>
      </div>
      <ul>
        <li><FaMicrophone /></li>
        <li><FaCog /></li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
  page: PropTypes.string,
  className: PropTypes.string,
};

Header.defaultProps = {
  title: null,
  page: null,
  className: null,
};

export default Header;

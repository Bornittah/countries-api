import PropTypes from 'prop-types';
import './style.css';

const HomeScreen = ({ title, count, units }) => (
  <div className="home-section">
    <h2>
      {title}
    </h2>
    <p>
      {count}
      {units}
    </p>
  </div>
);

HomeScreen.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  units: PropTypes.string,
};

HomeScreen.defaultProps = {
  title: null,
  count: null,
  units: null,
};

export default HomeScreen;

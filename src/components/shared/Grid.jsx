import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Grid = ({ title, number }) => (
  <Link to={`/continent/${title}`} className="link">
    <div className="grid">
      <FaArrowAltCircleRight />
      <div className="data-title">
        <h3>{title}</h3>
        <p>
          <span>{number}</span>
          <span>Countries</span>
        </p>
      </div>
    </div>
  </Link>
);

Grid.defaultProps = {
  title: null,
  number: null,
};

Grid.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
};

export default Grid;

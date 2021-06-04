import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterItem({ id, name, status }) {
  return (
    <Link to={`detail/${id}`}>
      <div className="character-item">
        <h5>{name}</h5>
        <p>{status}</p>
      </div>
    </Link>
  );
}

CharacterItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default CharacterItem;

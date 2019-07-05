import React from "react";
import { Button, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
import "./index.css";

const ButtonHighlights = ({ icon, highlights, color }) => {
  return (
    <span>
      {highlights.map(highlight => (
        <Button
          key={highlight}
          className="highlight-button"
          color={color}
          size="small"
        >
          <strong>
            <Icon name={icon} />
            {highlight}
          </strong>
        </Button>
      ))}
    </span>
  );
};

ButtonHighlights.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  highlights: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ButtonHighlights;

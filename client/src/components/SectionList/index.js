import React from "react";
import { Segment } from "semantic-ui-react";
import PropTypes from "prop-types";

import "./index.css";

const SectionList = ({ title, subtitle, text, highlights }) => {
  return (
    <div className="section-line">
      {title && <Segment vertical>{title}</Segment>}
      {subtitle && <Segment vertical>{subtitle}</Segment>}
      {text && <Segment vertical>{text}</Segment>}
      {highlights && <Segment vertical>{highlights}</Segment>}
    </div>
  );
};

SectionList.defaultProps = {
  title: undefined,
  subtitle: undefined,
  text: undefined,
  highlights: undefined
};

SectionList.propTypes = {
  title: PropTypes.element,
  subtitle: PropTypes.element,
  text: PropTypes.element,
  highlights: PropTypes.element
};

export default SectionList;

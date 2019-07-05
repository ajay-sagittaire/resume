import { Icon } from "semantic-ui-react";
import React from "react";
import ReactMarkdown from "react-markdown";

import SectionList from "../../components/SectionList";
import { awardsType } from "../../api/resume";

const Awards = ({ awards }) => {
  return (
    <div>
      {awards.map(award => (
        <SectionList
          key={award.title}
          title={
            <span className="title">
              <Icon name="star" />
              {award.title}
            </span>
          }
          subtitle={
            <span className="subtitle">
              <Icon name="thumbs up" />
              {award.awarder}
              <Icon className="ml-50" name="calendar" />
              {award.date}
            </span>
          }
          text={
            <span className="section-text">
              <ReactMarkdown source={award.summary} />
            </span>
          }
        />
      ))}
    </div>
  );
};

Awards.defaultProps = {
  awards: []
};

Awards.propTypes = awardsType;

export default Awards;

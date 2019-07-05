import { Icon } from "semantic-ui-react";
import React from "react";
import ReactMarkdown from "react-markdown";

import { publicationsType } from "../../api/resume";
import SectionList from "../../components/SectionList";
import ExternalLink from "../../components/ExternalLink";

const Publications = ({ publications }) => {
  return (
    <div>
      {publications.map(publication => (
        <SectionList
          key={publication.name}
          title={
            <span className="title">
              <Icon name="newspaper" />
              <ExternalLink
                href={publication.website}
                text={publication.name}
                color="#0E6EB8"
              />
            </span>
          }
          subtitle={
            <span className="subtitle">
              <Icon name="calendar" />
              {publication.releasedate}
              <Icon className="ml-50" name="pencil" />
              {`${publication.publisher}`}
            </span>
          }
          text={
            <span className="section-text">
              <ReactMarkdown source={publication.summary} />
            </span>
          }
        />
      ))}
    </div>
  );
};

Publications.defaultProps = {
  publications: []
};

Publications.propTypes = publicationsType;

export default Publications;

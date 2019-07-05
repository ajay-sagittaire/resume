import { Card, Icon, Flag } from "semantic-ui-react";
import PropTypes from "prop-types";
import React from "react";
import ReactMarkdown from "react-markdown";

import { interestsType } from "../../api/resume";
import SectionList from "../../components/SectionList";

const Interests = ({ interests }) => {
  return (
    <div>
      {interests.map(interest => (
        <SectionList
          key={interest.name}
          title={
            <span className="title">
              <Icon
                name={
                  interest.name.split(":")[1]
                    ? interest.name.split(":")[1]
                    : "user circle outline"
                }
              />
              {interest.name.split(":")[0]}
            </span>
          }
          text={
            <InterestKeywords
              interest={interest.name.split(":")[0].toLowerCase()}
              keywords={interest.keywords}
            />
          }
        />
      ))}
    </div>
  );
};

Interests.defaultProps = {
  interests: []
};

Interests.propTypes = interestsType;

export default Interests;

const InterestKeywords = ({ keywords }) => {
  return (
    <div>
      {keywords.map(keyword => (
        <Card fluid key={keyword.split(":")[0]}>
          <Card.Content
            header={
              <span className="header-interest">
                {keyword.split(":")[3] && "flag" === keyword.split(":")[3] ? (
                  <Flag name={keyword.split(":")[2]} />
                ) : (
                  <Icon
                    name={
                      keyword.split(":")[2]
                        ? keyword.split(":")[2]
                        : "thumbs up outline"
                    }
                  />
                )}
                {keyword.split(":")[0]}
              </span>
            }
          />
          <Card.Content
            description={<ReactMarkdown source={keyword.split(":")[1]} />}
          />
        </Card>
      ))}
    </div>
  );
};

InterestKeywords.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired
};

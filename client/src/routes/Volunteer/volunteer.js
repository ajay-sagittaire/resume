import { Icon } from 'semantic-ui-react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import SectionList from '../../components/SectionList';
import ExternalLink from '../../components/ExternalLink';
import ButtonHighlights from '../../components/ButtonHighlights';

import { volunteerType } from '../../api/resume';


const Volunteer = ({ volunteer }) => {
  return (
    <div>
      {volunteer.map(volunteerLine => (
        <SectionList
          key={volunteerLine.organization}
          title={
            <span className="title">
              <Icon name="building outline" />
              {volunteerLine.website
                ? <ExternalLink
                  href={volunteerLine.website}
                  text={volunteerLine.organization}
                  color="#0E6EB8"
                />
                : volunteerLine.organization}
              
            </span>
          }
          subtitle={
            <span className="subtitle">
              <Icon name="male" />{volunteerLine.position}
              <Icon className="ml-50" name="calendar" margin="10" />
              {`( ${volunteerLine.startdate} - ${volunteerLine.enddate} )`}
            </span>
          }
          text={
            <span className="section-text">
              <ReactMarkdown source={volunteerLine.summary} />
            </span>
          }
          highlights={
            <ButtonHighlights
              icon="check"
              highlights={volunteerLine.highlights}
              color="green"
            />
          }
        />
      ))}
    </div>
  );
};

Volunteer.defaultProps = {
  volunteer: [],
};

Volunteer.propTypes = volunteerType;

export default Volunteer;
import { Icon } from 'semantic-ui-react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import ExternalLink from '../../components/ExternalLink';
import SectionList from '../../components/SectionList';
import ButtonHighlights from '../../components/ButtonHighlights';
import { workType } from '../../api/resume';

import "./index.css"

const Work = ({ work }) => {
  return (
    <div>
      {work.map(job => (
        <SectionList
          key={job.company}
          title={
            <span className="title">
              <Icon name="building outline" margin="10" />
              {job.website
                ? <ExternalLink
                  href={job.website}
                  text={job.company}
                  color="#0E6EB8"
                />
                : job.company}
            </span>
          }
          subtitle={
            <span className="subtitle">
              <Icon name="user outline" />{job.position}
              <Icon className="ml-50" name="calendar" />
              {`( ${job.startdate} - ${job.enddate} )`}
            </span>
          }
          text={
            <span className="section-text">
              <ReactMarkdown source={job.summary} />
            </span>
          }
          highlights={
            <ButtonHighlights
              icon="check"
              highlights={job.highlights}
              color="green"
            />
          }
        />
      ))}
    </div>
  );
};

Work.defaultProps = {
  work: [],
};

Work.propTypes = {
  work: workType,
};

export default Work;
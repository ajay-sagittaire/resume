import { Grid, Icon } from 'semantic-ui-react';
import React from 'react';
import SectionList from '../../components/SectionList';
import ButtonHighlights from '../../components/ButtonHighlights';
import { educationType } from '../../api/resume';



const Education = ({ education }) => {
  return (
    <div>
      {education.map(educationLine => (
        <SectionList
          key={educationLine.area}
          title={
            <span className="title">
              <Icon name={educationLine.institution.split(':')[1] ? educationLine.institution.split(':')[1] : "student"} />
              {`${educationLine.institution.split(':')[0]}: ${educationLine.area}`}
            </span>
          }
          subtitle={
            <div className="subtitle">
              <Grid columns="equal">
                <Grid.Column textAlign="left">
                  <Icon name="certificate" />
                  {`${educationLine.studytype}`}
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <Icon name="calendar" />
                  {`${educationLine.startdate} - ${educationLine.enddate} `}
                </Grid.Column>
                <Grid.Column textAlign="right">
                  <Icon name="star" />{educationLine.gpa && `GPA: ${educationLine.gpa}`}
                </Grid.Column>
              </Grid>
            </div>
          }
          highlights={
            <ButtonHighlights
              icon="graduation"
              highlights={educationLine.courses}
              color="green"
            />
          }
        />
      ))}
    </div>
  );
};

Education.defaultProps = {
  education: [],
};

Education.propTypes = educationType;

export default Education;
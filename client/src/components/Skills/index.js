import React from "react";
import ReactMarkDown from "react-markdown";
import { Grid, List, Popup, Progress } from "semantic-ui-react";
import PropTypes from "prop-types";

import { skillsType } from "../../api/resume";

const ProgressBarColor = level => {
  switch (true) {
    case level >= 70:
      return "green";
    case level >= 50:
      return "blue";
    case level >= 30:
      return "yellow";
    case level >= 10:
      return "orange";
    case level >= 0:
      return "red";
    default:
      return "black";
  }
};

const Skill = ({ name, level, keywords }) => {
  return (
    <Grid.Column width={3}>
      <Popup
        trigger={
          <div style={{ textAlign: "center" }}>
            <span className="skill-name">{name}</span>
            <Progress
              percent={level}
              active
              color={ProgressBarColor(parseInt(level, 10))}
              size="small"
            />
          </div>
        }
        hoverable
      >
        <Popup.Content>
          <List divided relaxed>
            {keywords.map(keyword => (
              <List.Item key={keyword.split(":")[0]}>
                <List.Icon size="big" name="check circle" verticalAlign="top" />
                <List.Content>
                  <List.Header style={{ marginTop: "7px" }}>
                    {keyword.split(":")[0]}
                  </List.Header>
                  <List.Description>
                    <ReactMarkDown source={keyword.split(":")[1] || ""} />
                  </List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </Popup.Content>
      </Popup>
    </Grid.Column>
  );
};

Skill.defaultProps = {
  keywords: []
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string)
};

const Skills = ({ skills }) => {
  return (
    <Grid.Row style={{ marginTop: "50px" }}>
      {skills.map(skill => (
        <Skill
          key={skill.name}
          name={skill.name}
          level={skill.level}
          keywords={skill.keywords}
        />
      ))}
    </Grid.Row>
  );
};

Skills.defaultProps = {
  skills: []
};

Skills.propTypes = skillsType;

export default Skills;

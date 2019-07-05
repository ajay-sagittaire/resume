import { Icon } from "semantic-ui-react";
import React from "react";
import SectionList from "../../components/SectionList";
import { languagesType } from "../../api/resume";

const Languages = ({ languages }) => {
  console.log(languages);
  return (
    <div>
      {languages.map(l => (
        <SectionList
          key={l.language}
          title={
            <span className="title">
              <Icon name="globe" />
              {l.language}
            </span>
          }
          subtitle={
            <span className="subtitle">
              <Icon name="users" />
              {l.fluency}
            </span>
          }
        />
      ))}
    </div>
  );
};

Languages.defaultProps = {
  languages: []
};

Languages.propTypes = languagesType;

export default Languages;

import { Icon } from "semantic-ui-react";
import React from "react";

import { referencesType } from "../../api/resume";
import SectionList from "../../components/SectionList";

const References = ({ references }) => {
  return (
    <div>
      {references.map(reference => (
        <SectionList
          key={reference.name}
          subtitle={
            <span className="subtitle">
              <Icon name="quote left" size="large" />
              {`... ${reference.reference}`}
            </span>
          }
          text={<span className="section-text">{` - ${reference.name}`}</span>}
        />
      ))}
    </div>
  );
};

References.defaultProps = {
  references: []
};

References.propTypes = referencesType;

export default References;

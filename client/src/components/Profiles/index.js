import { Container, Icon } from 'semantic-ui-react';
import React from 'react';

import ExternalLink from '../ExternalLink';
import { profileType } from '../../api/resume';

import "./index.css";

const Profiles = ({ profiles }) => {
  return (
    <Container className="profile" textAlign="center">
      {profiles.map(profile => (
        <ExternalLink
          key={profile.network.toLowerCase()}
          href={profile.url}
          text={<Icon name={profile.network.toLowerCase()} size="huge"  link />}
          color="#0E6EB8"
        />
      ))}
    </Container>
  );
};

Profiles.defaultProps = {
  profiles: [],
};

Profiles.propTypes = profileType;

export default Profiles;
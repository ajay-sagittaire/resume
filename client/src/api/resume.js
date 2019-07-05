import PropTypes from "prop-types";
import { gql } from "apollo-boost";

export const query = gql`
  query CV($userid: String, $lang: String) {
    getCV(userid: $userid, lang: $lang) {
      userid
      lang
      basics {
        name
        label
        picture
        email
        phone
        website
        summary
        location {
          address
          postalcode
          city
          countrycode
          region
        }
        profiles {
          network
          url
        }
      }
      work {
        company
        position
        website
        startdate
        enddate
        summary
        highlights
      }
      volunteer {
        organization
        position
        website
        startdate
        enddate
        summary
        highlights
      }
      education {
        institution
        area
        studytype
        startdate
        enddate
        gpa
        courses
      }
      awards {
        title
        date
        awarder
        summary
      }
      publications {
        name
        publisher
        releasedate
        website
        summary
      }
      skills {
        name
        level
        keywords
      }
      languages {
        language
        fluency
      }
      interests {
        name
        keywords
      }
      references {
        name
        reference
      }
    }
  }
`;
export const variables = { userid: "mounir.khebbaza-33615314697", lang: "uk" };

export const locationType = PropTypes.shape({
  address: PropTypes.string,
  postalcode: PropTypes.string,
  city: PropTypes.string,
  countrycode: PropTypes.string,
  region: PropTypes.string
}).isRequired;

export const profileType = PropTypes.shape({
  network: PropTypes.string,
  username: PropTypes.string,
  url: PropTypes.string
}).isRequired;

export const basicsType = PropTypes.shape({
  name: PropTypes.string,
  label: PropTypes.string,
  picture: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
  summary: PropTypes.string,
  location: PropTypes.shape(locationType),
  profiles: PropTypes.arrayOf(profileType)
}).isRequired;

export const workType = PropTypes.arrayOf(
  PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    website: PropTypes.string,
    startdate: PropTypes.string,
    enddate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string)
  })
).isRequired;

export const volunteerType = PropTypes.arrayOf(
  PropTypes.shape({
    organization: PropTypes.string,
    position: PropTypes.string,
    website: PropTypes.string,
    startdate: PropTypes.string,
    enddate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string)
  })
).isRequired;

export const educationType = PropTypes.arrayOf(
  PropTypes.shape({
    institution: PropTypes.string,
    area: PropTypes.string,
    studytype: PropTypes.string,
    startdate: PropTypes.string,
    enddate: PropTypes.string,
    gpa: PropTypes.string,
    courses: PropTypes.arrayOf(PropTypes.string)
  })
).isRequired;

export const awardsType = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    awarder: PropTypes.string,
    summary: PropTypes.string
  })
).isRequired;

export const publicationsType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    publisher: PropTypes.string,
    releasedate: PropTypes.string,
    website: PropTypes.string,
    summary: PropTypes.string
  })
).isRequired;

export const skillsType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string)
  })
).isRequired;

export const languagesType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.string
  })
).isRequired;

export const interestsType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string)
  })
).isRequired;

export const referencesType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    reference: PropTypes.string
  })
).isRequired;

export const resumeType = PropTypes.shape({
  basics: basicsType,
  work: workType,
  volunteer: volunteerType,
  education: educationType,
  awards: awardsType,
  publications: publicationsType,
  skills: skillsType,
  languages: languagesType,
  interests: interestsType,
  references: referencesType
});

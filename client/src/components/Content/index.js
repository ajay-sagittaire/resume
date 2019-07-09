import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import Home from "../../routes/Home";
import Work from "../../routes/Work";
import Education from "../../routes/Education";
import Volunteer from "../../routes/Volunteer";
import Publications from "../../routes/Publications";
import References from "../../routes/References";
import Awards from "../../routes/Awards";
import Languages from "../../routes/Languages";
import Interests from "../../routes/Interests";
import NotFound from "../../routes/NotFound";
import PropTypes from "prop-types";
import { resumeType } from "../../api/resume";

import "./index.css";

export default class Content extends Component {
  static propTypes = {
    resume: resumeType.isRequired,
    refreshData: PropTypes.func,
    variables: PropTypes.shape({
      userid: PropTypes.string,
      lang: PropTypes.string
    }).isRequired
  };
  constructor(props) {
    super(props);
    this.basicsAndSkills = Object.assign({}, this.props.resume.basics, {
      skills: this.props.resume.skills
    });
  }
  render() {
    return (
      <Container className="main-content">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home basics={this.basicsAndSkills} />}
          />
          <Route
            exact
            path="/work"
            render={() => <Work work={this.props.resume.work} />}
          />
          <Route
            exact
            path="/education"
            render={() => <Education education={this.props.resume.education} />}
          />
          <Route
            exact
            path="/volunteer"
            render={() => <Volunteer volunteer={this.props.resume.volunteer} />}
          />
          <Route
            exact
            path="/publications"
            render={() => (
              <Publications publications={this.props.resume.publications} />
            )}
          />
          <Route
            exact
            path="/references"
            render={() => (
              <References references={this.props.resume.references} />
            )}
          />
          <Route
            exact
            path="/awards"
            render={() => <Awards awards={this.props.resume.awards} />}
          />
          <Route
            exact
            path="/languages"
            render={() => <Languages languages={this.props.resume.languages} />}
          />
          <Route
            exact
            path="/interests"
            render={() => <Interests interests={this.props.resume.interests} />}
          />
          <Route
            exact
            path={require(`../../assets/resumes/resume_${
              this.props.variables.lang
            }.pdf`)}
          />
          <Route exact component={NotFound} />
        </Switch>
      </Container>
    );
  }
}

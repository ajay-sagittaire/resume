import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { resumeType } from "../api/resume";
import PropTypes from "prop-types";

class AppRouter extends React.Component {
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
    this.picture = this.props.resume.basics.picture;
  }
  render() {
    return (
      <Router>
        <Header {...this.props} picture={this.picture} />
        <Content {...this.props} />
        {/* <Footer lang={this.props.variables.lang} /> */}
      </Router>
    );
  }
}
export default AppRouter;

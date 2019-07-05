import { Grid, Header, Image } from "semantic-ui-react";
import Profiles from "../../components/Profiles";
import Contact from "../../components/Contact"
import Skills from "../../components/Skills"
import React from "react";
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid centered stackable>
        <Grid.Row>
          <Grid.Column width={5}>
            <Image
              src={require(`../../assets/images/${this.props.basics.picture}`)}
              circular
              centered
              fluid
              style={{ border: "10px solid rgba(0,0,0,.05)" }}
            />
          </Grid.Column>
          <Grid.Column textAlign="center" width={8}>
            <Header style={{ fontSize: "50px" }}>
              {this.props.basics.name}
            </Header>
            <Profiles profiles={this.props.basics.profiles} />
            <Header color="grey" size="large">
              {this.props.basics.label}
            </Header>
            <Header textAlign="justified" color="grey" style={{ marginTop: "0px" }} size="small">
              {this.props.basics.summary}
            </Header>
            <Contact
              phone={this.props.basics.phone}
              email={this.props.basics.email}
              website={this.props.basics.website}
            />
          </Grid.Column>
        </Grid.Row>
        <Skills skills={this.props.basics.skills} />
      </Grid>
    );
  }
}

export default Home;

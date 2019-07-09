import React, { Component } from "react";
import { Menu, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Menu as MenuTranslation } from "../../translations/menu";
import Lang from "./lang";
import PropTypes from "prop-types";
import { resumeType } from "../../api/resume";

export default class Header extends Component {
  static propTypes = {
    resume: resumeType.isRequired,
    refreshData: PropTypes.func,
    variables: PropTypes.shape({
      userid: PropTypes.string,
      lang: PropTypes.string
    }).isRequired
  };

  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  menuIsVisible = (menuName) =>
    menuName === "basics" || this.props.resume[menuName].length > 0;

  render() {
    const { activeItem } = this.state;
    const MenuItems = [
      {
        name: "basics",
        element: (
          <Image
            src={require(`../../assets/images/${this.props.resume.basics.picture}`)}
            size="mini"
            circular
            centered
          />
        ),
        to: "/"
      },
      {
        name: "work",
        element: "Work",
        to: "/work"
      },
      {
        name: "education",
        element: "Education",
        to: "/education"
      },
      {
        name: "volunteer",
        element: "Volunteer",
        to: "/volunteer"
      },
      {
        name: "publications",
        element: "Publications",
        to: "/publications"
      },
      {
        name: "references",
        element: "References",
        to: "/references"
      },
      {
        name: "awards",
        element: "Awards",
        to: "/awards"
      },
      {
        name: "languages",
        element: "Languages",
        to: "/languages"
      },
      {
        name: "interests",
        element: "Interests",
        to: "/interests"
      }
    ];
    return (
      <Menu color="blue" inverted fluid widths={11} fixed="top" stackable>
        {MenuItems.map(
          menu =>
            // if basics => OK, if array is empty, do not render the menu component
            this.menuIsVisible(menu.name) && (
              <Menu.Item
                as={Link}
                to={menu.to}
                name={menu.name}
                active={activeItem === menu.name}
                onClick={this.handleItemClick}
                key={menu.name}
              >
                {MenuTranslation[this.props.variables.lang] &&
                MenuTranslation[this.props.variables.lang][menu.name]
                  ? MenuTranslation[this.props.variables.lang][menu.name]
                  : menu.element}
              </Menu.Item>
            )
        )}
        <Menu.Item
          as="a"
          href={require(`../../assets/resumes/resume_${
            this.props.variables.lang
          }.pdf`)}
          download={`resume_${this.props.variables.lang}.pdf`}
        >
          {MenuTranslation[this.props.variables.lang] &&
          MenuTranslation[this.props.variables.lang]["download"]
            ? MenuTranslation[this.props.variables.lang]["download"]
            : "Download Resume"}
        </Menu.Item>
        <Menu.Item>
          <Lang
            variables={this.props.variables}
            refetchData={this.props.refetchData}
          />
        </Menu.Item>
      </Menu>
    );
  }
}

import React, { Component } from "react";
import { Menu, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Menu as MenuTranslation } from "../../translations/menu";
import Lang from "./lang";

export default class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const MenuItems = [
      {
        name: "basics",
        element: (
          <Image
            src={require(`../../assets/images/${this.props.picture}`)}
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
            (menu.name === "basics" ||
              this.props.resume[menu.name].length > 0) && (
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
          <Lang {...this.props} />
        </Menu.Item>
      </Menu>
    );
  }
}

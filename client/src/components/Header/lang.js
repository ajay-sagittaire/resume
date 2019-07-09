import React from "react";
import { Dropdown, Flag } from "semantic-ui-react";
import "./lang.css";
import PropTypes from "prop-types";
import { LangOptions } from "../../translations/menu";

const countryOptions = [
  { key: "uk", value: "uk", flag: "uk", text: "English" },
  { key: "fr", value: "fr", flag: "fr", text: "French" }
];
class Lang extends React.Component {
  static propTypes = {
    refreshData: PropTypes.func,
    variables: PropTypes.shape({
      userid: PropTypes.string,
      lang: PropTypes.string
    }).isRequired
  };
  constructor(props) {
    super(props);
  }

  changeLanguage = (e, { name }) => {
    this.props.variables.lang = name;
    this.props.refetchData(this.props.variables);
  };

  render() {
    const trigger = (
      <span>
        <Flag name={this.props.variables.lang} />
      </span>
    );
    return (
      <Dropdown className="dropdown-lang" item trigger={trigger}>
        <Dropdown.Menu>
          {countryOptions.map(option => (
            <Dropdown.Item
              key={option.key}
              name={option.value}
              onClick={this.changeLanguage}
            >
              <Flag name={option.key} />
              {LangOptions[this.props.variables.lang][option.key]
                ? LangOptions[this.props.variables.lang][option.key]
                : option.text}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default Lang;

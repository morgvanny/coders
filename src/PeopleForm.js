import React from "react";

export default class PeopleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      language: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addPerson({
      name: this.state.name,
      language: this.state.language
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.id]:
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>{" "}
        <input
          id="name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <br />
        <label htmlFor="name">Language: </label>{" "}
        <input
          id="language"
          value={this.state.language}
          onChange={this.handleInputChange}
        />
        <br />
        <input type="submit" />
      </form>
    );
  }
}

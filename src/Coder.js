import React from "react";

class Coder extends React.Component {
  render() {
    return (
      <p>
        {this.props.name} codes in this: {this.props.language}
      </p>
    );
  }
}

export default Coder;

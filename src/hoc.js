import React, { Component } from "react";
export default function OurFirstStore(WrappedComponent) {
  return class extends Component {
    state = {
      username: "Sai"
    };

    render() {
      return (
        <WrappedComponent username={this.state.username} {...this.props} />
      );
    }
  };
}

class DisplayHello extends Component {
  render() {
    return <p>Hello {this.props.username} !</p>;
  }
}

let newfunc = OurFirstStore(DisplayHello);
console.log(newfunc);

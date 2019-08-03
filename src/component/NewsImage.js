import React, { Component } from "react";

export default class NewsImage extends Component {
  render() {
      console.log("image",this.props)
    return (
      <div
        style={{
          backgroundImage: `url(${this.props.src})`,
          backgroundSize: this.props.size,
          width: "100%",
          height: "100%"
        }}
      />
    );
  }
}

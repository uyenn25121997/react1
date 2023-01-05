import React, { Component } from "react";

export default class Products extends Component {
  render() {
    return (
          <div className="col-4 mt-5">
            <div className="card bg-light border-0">
              <i class={this.props.icon}></i>
              <h2 className="font-weight-normal mt-4">{this.props.title}</h2>
              <p>{this.props.desc}</p>
            </div>
          </div>
    );
  }
}
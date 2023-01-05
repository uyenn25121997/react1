import React, { Component } from 'react'

export default class Carousel extends Component {
  render() {
    return (
        <div className="container jumbotron mt-5 text-center">
        <h1 className="display-4 font-weight-bold">A warm welcome!</h1>
        <p className="lead">
          Bootstrap utility classes are used to create this jumbotron since
          the old component has been removed from the framework. Why create
          custom CSS when you can use utilities?
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Call to action
        </a>
      </div>
    )
  }
}
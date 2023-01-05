import React, { Component } from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";

export default class ReactComponent extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Carousel/>
        <div className="container text-center">
        <div className="row">
        <Products icon="fa-regular fa-folder" title="Fresh new layout" desc="With Bootstrap 5, we've created a fresh new layout for this template!"/>
        <Products icon="fa-solid fa-download" title="Free to download" desc="As always, Start Bootstrap has a powerful collectin of free templates."/>
        <Products icon="fa-solid fa-book" title="Jumbotron hero header" desc="The heroic part of this template is the jumbotron hero header!"/>
        <Products icon="fa-regular fa-b" title="Feature boxes" desc="We've created some custom feature boxes using Bootstrap icons!"/>
        <Products icon="fa-solid fa-code" title="Simple clean code" desc="We keep our dependencies up to date and squash bugs as they come!"/>
        <Products icon="fa-regular fa-circle-check" title="A name you trust" desc="Start Bootstrap has been the leader in free Bootstrap templates since 2013!"/>
        </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
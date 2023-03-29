import React, { Component } from "react";
import "./App.css";
import Header from "./MyComponents/Headers";
import { Footer } from "./MyComponents/Footer";
import { Todo } from "./MyComponents/Todo";
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Todo />
        <Footer />
      </>
    );
  }
}

export default App;

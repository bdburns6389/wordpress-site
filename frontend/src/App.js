import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Books from "./components/Books.js";
import BookPage from "./components/BookPage.js";

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Books} />
        <Route exact path="/book/:id" component={BookPage} />
      </Fragment>
    </Router>
  );
}

export default App;

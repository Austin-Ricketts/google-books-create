import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/Books/Search";
// import Saved from "./Saved";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Jumbotron>
          <h1>Search Google Books</h1>
          <h3>and save them for later</h3>
        </Jumbotron>
        <Route exact path="/" component={Search} />
        {/* <Route exact path="/saved" component={Saved} /> */}
      </div>
    </Router>
  );
}

export default App;

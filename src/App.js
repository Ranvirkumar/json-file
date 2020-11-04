import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Create from "./components/Create";
import List from "./components/List";
import Search from "./components/Search";
import Update from "./components/Update";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#link">
                <Link to="/Create">
                  <FontAwesomeIcon icon={faPlus} color="green" />
                  Create
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/List">
                  <FontAwesomeIcon icon={faList} color="green" />
                  List
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/Search">
                  <FontAwesomeIcon icon={faSearch} color="green" />
                  Search
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/Create">
            <Create />
          </Route>
          <Route path="/List">
            <List />
          </Route>
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/Update/:id" render={props => <Update {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

// npm run dev


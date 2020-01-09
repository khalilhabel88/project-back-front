import React from "react";
import Listdocument from "./component/Listdocument";
import "./App.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Updatedocument from "./component/Updatedocument";
import Adddocument from "./component/Adddocument";
import Navbar from "./component/navbar";
import Register from "./component/register";
import Profile from "./component/profile";
import Login from "./component/login";
import Landing from "./component/loading";
import { Button } from "react-bootstrap";
class App extends React.Component {
  render() {
    return (
      <Router>
        <nav class="navbar navbar-dark bg-primary">
          <Link to="/adddocument">
            <Button variant="success">Add Document</Button>
          </Link>
          <h1>
            {" "}
           Admin Dashbord
            
          </h1>
          <button type="button" class="btn btn-danger">Logout</button>
        </nav>
        <Route exact path="/adddocument" render={() => <Adddocument />} />
        <div className="pop">
          <Route exact path="/listdocument" render={() => <Listdocument />} />
        </div>
        <Route
          path="/updatedocument/:id"
          render={props => <Updatedocument id={props.match.params.id} />}
        />
      </Router>
    );
  }
}
export default App;

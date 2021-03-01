import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BrowseMembers from "../routes/BrowseMembers";
import Landing from "./Landing";




class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/browseMembers" component={BrowseMembers} />
        </Switch>
      </Router>
    );
  }
}

export default App;

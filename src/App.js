import React from "react";
import { BrowserRouter as Router,Route,Switch, Redirect } from 'react-router-dom';
import Course from "./component/Course";
import New from "./component/New";
import Update from "./component/Update";
import Menu from "./helper/Menu";

function App() {
  return (
    <React.Fragment>
        <Router>
             <Menu/>
            <Switch>
                <Route exact path="/" component={ Course } />
                <Route exact path="/new" component={ New } />
                <Route exact path="/update/:id" component={ Update } />
                <Route exact path="**">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;

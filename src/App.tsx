import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./pages/Main";
import Profile from "./pages/Profile";

const App: React.FunctionComponent = () => (
  <Router>
    <Route exact path="/" component={Main} />
    <Route exact path="/profile" component={Profile} />
  </Router>
);

export default App;

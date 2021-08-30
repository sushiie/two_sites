import { LoginForm } from "./components/Login/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/dashboard";
import { PrivateRoute } from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <div className="appWrapper">
      <Router>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <PrivateRoute path="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

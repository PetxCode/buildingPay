import logo from "./logo.svg";
import "./App.css";
import TheScreen from "./Payment/TheScreen";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PayNow } from "./Payment/PayNow";
import ThanksYou from "./Payment/ThanksYou";
import ViewScreen from "./GameChanger/ViewScreen";
import AddUser from "./GameChanger/AddUser";
import EditUser from "./GameChanger/EditUser";
import { AppContext, AppState } from "./GameChanger/ContextAPI/AppContext";

function App() {
  return (
    <AppState>
      <Router>
        <Switch>
          <Route exact path="/" component={TheScreen} />
          <Route exact path="/home" component={ViewScreen} />
          <Route exact path="/add" component={AddUser} />
          <Route exact path="/edit" component={EditUser} />
          <Route exact path="/thanks" component={ThanksYou} />
          <Route exact path="/paynow" component={PayNow} />
        </Switch>
      </Router>
    </AppState>
  );
}

export default App;

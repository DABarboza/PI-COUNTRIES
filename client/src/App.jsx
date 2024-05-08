import "./App.css";
import { Route } from "react-router-dom";
import Landing from "./Components/LandingPage/Landing";
import HomePage from "../src/Components/HomePage/HomePage";
import CountryId from "../src/Components/CountryId/CountryId";
import Activities from "./Components/FormPage/Activities";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/countries" component={HomePage} />
      <Route exact path="/countries/:id" component={CountryId} />
      <Route exact path="/activities" component={Activities} />
    </div>
  );
}

export default App;

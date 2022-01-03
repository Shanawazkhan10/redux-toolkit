import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Homepage from "./Screens/Homepage";
import DefaultError from "./Screens/DefaultError";
import MovieList from "./Screens/MovieList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/MovieDetails">
              <MovieList />
            </Route>
            <Route>
              <DefaultError />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { CarList } from "./components";
import { CarDetails } from "./components";
import { Header } from "./components";
import "./reset.css";
import "./index.css";

type Props = {};
type State = {
  searchTerm: string;
};
class App extends Component<Props, State> {
  state: State = {
    searchTerm: ""
  };

  setSearchTerm = () => {};
  render() {
    const { searchTerm } = this.state;
    return (
      <BrowserRouter>
        <Header />
        <main>
          <Route
            exact
            path="/"
            render={props => <CarList {...props} searchTerm={searchTerm} />}
          />
          <Route path="/cars/:id" render={props => <CarDetails {...props} />} />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;

import React from "react";
import Header from "./Header";
import BrewControl from "./BrewControl";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: #2E3440; color: #ECEFF4; }'}</style>
        <title>{"Bea's Bubbling Brews"}</title>
      </Helmet>
      <Header />
      <BrewControl />
    </div>
  );
}

export default App;

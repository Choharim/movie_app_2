import React from 'react';
import { HashRouter,Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";


function App(){
  return (
    <HashRouter>
      <Navigation></Navigation>
      <Route path="/" exact={true} component={Home}></Route>
      <Route paht="/about" component={About}></Route>
    </HashRouter>
  );
}

export default App;
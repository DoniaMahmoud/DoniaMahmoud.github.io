import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import pages (containers)
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
//Allows component to animate out when they are removed from the react tree
import { AnimatePresence } from "framer-motion";
function App() {
  //Returns an object with a key of the page we're on
  //The key needs to be passed to AnimatePresence
  //When the key changes , it means we're on another page
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {/*exitBeforeEnter waits until current component exits and then start
      animating the new one*/}
      <AnimatePresence exitBeforeEnter>
        {/*Switch stops as soon as it matches first URL*/}
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;

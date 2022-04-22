import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Contact from "./components/contact/Contact"
import Darkmode from "./components/darkmode/Darkmode"
import Nav from "./components/navigation/Nav"
import { useContext, useState } from "react";
import { ThemeContext } from "./context";
import Inprogress from "./components/inprogress/Inprogress";

const App = () => {
  
  const theme= useContext(ThemeContext)
  const darkMode= theme.state.darkMode;
  

  return <div style={{
              backgroundColor: darkMode ? "#222" : "white", 
              color: darkMode && "white" }}>
    <Nav/>
    <Darkmode/>
    <Intro/>
    <About/>
    <Contact/>
    <Inprogress/>
    </div>;
};

export default App;
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navigation from "./Navigation";
import Drawer from "./Drawer";
import { useState } from "react";
import Logout from "./Logout";
// Component App
function App() {
  // Using useState to toogle display the Drawer
  let [drawer, setDrawer] = useState(false);

  // If drawer value will be true then drawer will open
  if (drawer) {
    return (
      <div className="App">
        {/* Drawer Component */}
        <Drawer />
        <button
          className="toggle"
          onClick={() => {
            setDrawer(true);
          }}
        >
          ☰
        </button>
        <button
          className="toggleclose"
          onClick={() => {
            setDrawer(false);
          }}
        >
          ❌
        </button>
        <Navigation />
        {/* Routes */}
        <Routes>
          <Route path="/gamezop/topusers" element={<Contact />} />
          <Route path="/gamezop/news" element={<About />} />
          <Route path="/gamezop/logout" element={<Logout />} />
          <Route path="/gamezop" element={<Home />} />
        </Routes>
      </div>
    );
  }
  // Else Drawer will be Closed 
  else {
    return (
      <div className="App">
        {/* <Drawer/> */}
        <button
          className="toggle"
          onClick={() => {
            setDrawer(true);
          }}
        >
          ☰
        </button>
        {/* Navigation */}
        <Navigation />
        {/* Routes */}
        <Routes>
          <Route path="/gamezop/topusers" element={<Contact />} />
          <Route path="/gamezop/users" element={<Home />} />
          <Route path="/gamezop/logout" element={<Logout />} />
          <Route path="/gamezop" element={<About />} />
        </Routes>
      </div>
    );
  }
}

export default App;

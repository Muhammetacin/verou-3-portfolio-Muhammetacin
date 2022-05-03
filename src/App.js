import { Route, Routes } from "react-router-dom";
import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
    </div>
  );
}

export default App;

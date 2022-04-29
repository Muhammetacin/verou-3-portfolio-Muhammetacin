import { Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/about" element={<div>About me page</div>}></Route>
        <Route path="/portfolio" element={<div>Portfolio</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;

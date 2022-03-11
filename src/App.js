import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Header/Nav";
import Home from "./Components/Home/Home";
import "./Components/Css/Theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

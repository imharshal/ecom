import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Banner from "./components/banner/banner";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Banner />
      </BrowserRouter>
    </div>
  );
}

export default App;

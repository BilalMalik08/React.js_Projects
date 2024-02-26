import "./App.css";
import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/random_color/RandomColor.jsx";

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      <Accordian />

      {/* Color Generator Component */}
      <RandomColor />
    </div>
  );
}

export default App;

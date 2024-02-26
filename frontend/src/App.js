import "./App.css";
import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/random_color/RandomColor.jsx";
import StarRating from "./components/star_rating/StarRating.jsx";

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      <Accordian />

      {/* Color Generator Component */}
      <RandomColor />

      {/* Star Rating Component */}
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;

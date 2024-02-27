import "./App.css";
import Accordian from "./components/accordian/Accordian";
import ImageSlider from "./components/image_slider/ImageSlider.jsx";
import LoadMoreData from "./components/load_more_data/LoadMoreData.jsx";
import QrCodeGenerator from "./components/qr_code_generator/QrCodeGenerator.jsx";
import RandomColor from "./components/random_color/RandomColor.jsx";
import StarRating from "./components/star_rating/StarRating.jsx";
import TreeView from "./components/tree_view/TreeView.jsx";
import menu from "./components/tree_view/data.js";

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      <Accordian />

      {/* Color Generator Component */}
      <RandomColor />

      {/* Star Rating Component */}
      <StarRating noOfStars={10} />

      {/* Image Slider Component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />

      {/* Load More Data Component */}
      <LoadMoreData />

      {/* Tree View Menu Component */}
      <TreeView menu={menu} />

      {/* QR Code Generator Component */}
      <QrCodeGenerator />
    </div>
  );
}

export default App;

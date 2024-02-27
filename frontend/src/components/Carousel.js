import "./carousel.css";
import travel1 from "../Img/travel1.jpg";
import travel2 from "../Img/travel2.jpg";
import travel3 from "../Img/travel3.jpg";
import travel4 from "../Img/travel4.jpg";
import travel5 from "../Img/travel5.jpg";
import travel6 from "../Img/travel6.jpg";
import travel7 from "../Img/travel7.jpg";

function Carousel() {
  return (
    <>
      <div className="row carousel-row1">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={travel3} className="d-block carouselImg" alt="bg-img" />
            </div>
            <div className="carousel-item">
              <img src={travel5} className="d-block carouselImg" alt="bg-img" />
            </div>
            <div className="carousel-item">
              <img src={travel6} className="d-block carouselImg" alt="bg-img" />
            </div>
            <div className="carousel-item">
              <img src={travel7} className="d-block carouselImg" alt="bg-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;

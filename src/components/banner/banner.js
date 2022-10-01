import "./banner.css";
import image from "../../assets/banner-image.svg"; // with import

const Banner = () => {
  return (
    <div className="row ">
      <div className="banner">
        <div className="col-md-6">
          <div className="cta">
            <h5>SUMMER 2020</h5>
            <h1 id="headline">NEW COLLECTION</h1>
            <h4>
              We know how large objects will act, but things on a small scale.
            </h4>
            <button className="cta-button">SHOP NOW</button>
          </div>
        </div>
        <div className="col-md-6">
          <img className="hero-cover-image" src={image} alt="girl" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

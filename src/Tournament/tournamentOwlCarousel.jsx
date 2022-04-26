import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import gambar1 from "../img/gambar1.svg";
import gambar2 from "../img/gambar2.svg";
import gambar3 from "../img/gambar3.svg";



const OwlCarouselTorunament = () => {
  const options = {
    loop: true,
    items: 3,
    dots: false,
    autoplay: true,
    
    
    responsive: {
      0: {
        items: 1
      },
      590: {
        items: 2
      },
      860: {
        items: 3
      }
    }
  };
  return (
    <OwlCarousel className="owl-theme" {...options}>
      <div className="item" >
                 <img
                  src={gambar1}
                  alt="gambar1"
                  style={{ marginTop: "30px", width: "auto", height: "auto", }}
                />
      </div>
    </OwlCarousel>
  );
};
export default OwlCarouselTorunament;

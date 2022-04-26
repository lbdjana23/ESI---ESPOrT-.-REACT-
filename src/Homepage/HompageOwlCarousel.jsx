import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import pubg from "../Picture/PUBGM.svg";
import dollar from "../Picture/dollar-circle.svg";
import people from "../Picture/people.svg";
import "./homePage.css";



const HomepageOwlCarousel = () => {
  const options = {
    loop: true,
    items: 1,
    dots: false,
    autoplay: true,
    margin:210,
    responsive: {
      0: {
        items: 1.5
      },
      768: {
        items: 2
      }
    }
  };
  return (
    <OwlCarousel className="owl-theme konten4" {...options}>
      <div class=" card ">
                <div class="card-body d-flex flex-row mx-auto ">
                  <img className=" mt-3 img6 " src={pubg} alt="pubg"  />                 
                  <div>
                    <div class="ml-3 d-flex flex-row  mt-3">
                      <div>
                        <h2 class="card-title">Piala Walikota Cup</h2>
                        <h3 class="card-subtitle  text-muted">Pemerintah Kota Denpasar</h3>
                      </div>
                      <button type="button" class="btn btn1  mt-1  ml-4" align="">Buka</button>
                    </div>
                    <div class="d-flex flex-row  ">
                    <img className="img2 " src={dollar} alt="dollar"  /> <h4 class="">Rp. 100.000.000</h4> <img className="img2 " src={people} alt="people"  /><h4 class="  ">25/50 Tim</h4>
                    </div>
                  </div>
                </div>
       </div>
      
    </OwlCarousel>
  );
};
export default HomepageOwlCarousel;

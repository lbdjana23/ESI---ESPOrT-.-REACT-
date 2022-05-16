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
      {/*  Awal  */}
      <div class=" card ">
        <div class="card-body d-flex flex-row mx-auto ">
        <img src={pubg}class="img6"  />
        <div>
          <div class="ml-3 d-flex flex-row  mt-1">
            <div>
              <h2 class="card-title">Piala Walikota Cup</h2>
              <h3 class="card-subtitle  text-muted">Pemerintah Kota Denpasar</h3>
            </div>
            <button type="button" class="btn btnOpen ml-3">Buka</button>
          </div>
          <div class="d-flex flex-row  ">
            <img class="  ml-3 mt-2 img2" src={dollar} /> <h4 class="mt-2 ml-1 ">Rp. 100.000.000</h4> <img class=" ml-2 mt-2 img2" src={people}  /><h4 class="ml-1 mt-2 ">25/50 Tim</h4>
          </div>
        </div>
        </div>
      </div>
      {/* Akhir */}
    </OwlCarousel>
  );
};
export default HomepageOwlCarousel;

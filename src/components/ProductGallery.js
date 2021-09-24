import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ProductGallery = ({ images }) => {
  console.log("gallery", images);
  return (
    <Carousel
      showArrows={true}
      showIndicators={false}
      infiniteLoop={true}
      emulateTouch={true}
      dynamicHeight={true}
    >
      {images.map((img) => (
        <div class="item">
          <img
            src={`${process.env.REACT_APP_URL_BASE}/images/products/${img}`}
            alt=""
          />
        </div>
      ))}
    </Carousel>
  );
};

import React from "react";
import "../Cards.css";
import { SRLWrapper } from "simple-react-lightbox";
import CardItem from "../CardItem";

const options = {
  autoplaySpeed: 0,
  settings: {
    autoplaySpeed: 0,
    disableKeyboardControls: true,
    disablePanzoom: true,
    disableWheelControls: true,
    draggable: true,
    hideControlsAfter: false,
    lightboxTransitionSpeed: 0.3,
    lightboxTransitionTimingFunction: "linear",
    overlayColor: "rgba(30, 30, 30, 0.9)",
    slideAnimationType: "fade",
    slideSpringValues: [300, 50],
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: "linear",
    usingPreact: false,
  },
  buttons: {
    showDownloadButton: false,
    showFullscreenButton: false,
    showThumbnailsButton: false,
  },
  caption: {
    showCaption: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
};

export default function Menu() {
  return (
    <>
      <SRLWrapper options={options}>
        <div className="cards">
          <h1>Check Out Our Menu & Deals!</h1>
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <CardItem
                  src="/images/img-menu-1.jpg"
                  text="Check out the A la carte Menu"
                />
                <CardItem
                  src="/images/img-menu-2.jpg"
                  text="Not sure what to get? Try one of our combos today!"
                />
              </ul>
              <ul className="cards__items">
                <CardItem
                  src="images/img-daily-special.jpg"
                  text="Check out our Daily Specials"
                />
                <CardItem
                  src="images/img-ayce-menu.jpg"
                  text="How many plates can you finish? Feast on our AYCE Special"
                />
                <CardItem
                  src="images/img-oyster-special.jpg"
                  text="Join us for our Buck-A-Shuck Oyster Special, everyday while supplies last"
                />
              </ul>
            </div>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
}

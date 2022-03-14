import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const Slider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="ts-rev-slider">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={1000}
        className="ts-rev-slider"
        media={[
          {
            source:
              "https://tasksource.net/wp-content/uploads/2020/10/banner1.jpg",
          },
          {
            source:
              "https://tasksource.net/wp-content/uploads/2020/10/banner2.jpg",
          },
          {
            source:
              "https://tasksource.net/wp-content/uploads/2020/10/banner3.jpg",
          },
        ]}
      />
    </div>
  );
};

export default Slider;

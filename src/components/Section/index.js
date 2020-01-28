import React from "react";
import BackgroundImage from "./../BackgroundImage";
import "./styles.scss";

function Section(props) {
  const {
    color,
    size,
    backgroundImage,
    backgroundImageOpacity,
    children,
    // Passed to section element
    ...otherProps
  } = props;

  var background="";
  if (props.background){
    background = props.background
  }
console.log("background",background);
  return (
    <section
      className={
        "SectionComponent hero section is-block is-relative" +
        (color ? ` is-${color}` : "") +
        (size ? ` is-${size}` : "")
      }
      {...otherProps}

      style={ background ? { backgroundColor:background} : {}}

    >

      {backgroundImage && (
        <BackgroundImage
          image={backgroundImage}
          opacity={backgroundImageOpacity}
        />
      )}

      {props.children}
    </section>
  );
}

export default Section;

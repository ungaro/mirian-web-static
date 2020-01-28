import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import SectionButton from "./../SectionButton";
import "./styles.scss";

function HeroSection(props) {
  return (
    <div class="hero-container">
    <Section color={props.color} size={props.size}>
      <div className="container">
        <div className="columns is-vcentered is-desktop">
          <div className="column is-5-desktop has-text-centered-touch">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={1}
              className="HeroSection__text"
            />
            <a href="https://apps.apple.com/app/id1482613387" target="_blank"><img src="https://dwr2vwfm4xarg.cloudfront.net/wp-content/uploads/2018/03/12233348/download_ios.png" width="160" /></a>
    
          </div>
          <div className="column is-1" />
          <div className="column">
            <figure className="HeroSection__image image">
              <img src={props.image} alt="Illustration" />
            </figure>
          </div>
        </div>
      </div>
    </Section>
    </div>
  );
}

export default HeroSection;

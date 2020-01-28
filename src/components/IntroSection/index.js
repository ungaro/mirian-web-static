import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Features
          items={[
            {
              title: "Follow Friends",
              description:
                "Visit profiles and follow users on Mirian to grow your influence. Be sure to fund your wallet with Ether!",
              image: "https://uploads.divjoy.com/undraw-mind_map_cwng.svg"
            },
            {
              title: "Send / Receive CryptoAssets",
              description:
                "Easily send CryptoAssets globally to anyone with a Mirian wallet or to any Ethereum address.",
              image:
                "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg"
            },
            {
              title: "Invest together",
              description:
                "Build a portfolio by creating a Social Wallet and inviting friends to invest together! Or join your friends’ Social Wallets by having them invite you.",
              image: "https://uploads.divjoy.com/undraw-having_fun_iais.svg"
            },
           
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;

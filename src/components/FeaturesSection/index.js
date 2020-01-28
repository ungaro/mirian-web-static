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
              title: "Crypto with Friends",
              description:
                "Mirian app is designed to keep you informed on what your friends are holding and investing in. You can see their investment activity on your feed to Like or Comment or Ask for an invite! Assets you browse will also indicate which if your friends have invested in them.",
              image: "https://dwr2vwfm4xarg.cloudfront.net/wp-content/uploads/2018/03/borrow_lend_swap2.png"
            },
            {
              title: "Buy and Sell CryptoAssets",
              description:
                "You can browse the market to Buy and Sell CryptoAssets directly from your wallet.*",
              image:
                "https://dwr2vwfm4xarg.cloudfront.net/wp-content/uploads/2018/03/send_receive_store-.png"
            },
            {
              title: "Create Social Wallets to Invest together",
              description:
                "Build a portfolio of the best coins and invite your friends to make investments. You can also receive invites by your friends on Mirian to join their Social Wallets. Watch your investments grow together, then withdraw your coins to your own wallet when you choose. Your friends can do the same while everyone controls their own funds, using Smart Contract technology.",
              image: "https://dwr2vwfm4xarg.cloudfront.net/wp-content/uploads/2018/03/invest_with_mirian1.png"
            },
           
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;

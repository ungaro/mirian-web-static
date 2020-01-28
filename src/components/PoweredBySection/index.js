import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";

function PoweredBySection(props) {
  return (
    <Section color={props.color} size={props.size} background={props.background}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
<div className="columns">
<div className="column is-centered has-text-centered"><img className="alignnone size-full wp-image-69" src="https://dwr2vwfm4xarg.cloudfront.net/wp-content/uploads/2018/03/07151927/settle_on_etherium.png" alt="" width="104" height="104"/><br/>
<strong>Settles on Ethereum:</strong><br/>
better security and decentralization</div>
</div>
      </div>
    </Section>
  );
}

export default PoweredBySection;

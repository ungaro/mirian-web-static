import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/mirian_logo.png'

import facebook from '../img/social/facebook.svg'
import telegram from '../img/social/icon_telegram_white.svg'
import medium from '../img/social/icon_medium_white.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/icon_twitter_white.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (

      <footer className="footer has-background-black has-text-white-ter" style={{backgroundImage: 'linear-gradient(-122deg, rgb(0, 67, 132) 0%, rgb(6, 116, 210) 100%)'}}>
        <div className="container">
        <div className="content">
          <img
            src={logo}
            alt="Mirian"
            style={{ width: '14em', }}
          />
        </div>
        <div className="content has-text-white-ter">
          <div className="container  has-text-white-ter">
            <div className="columns">
              <div className="column" style={{fontSize: '0.8rem'}}>
              <p >We are Blockchain Born. We are experienced financial technologists who are building the tools you need to monitor and take control of your finances.</p>

              <p>We believe managing your money and assets should be easy, bankless, borderless, and free. Join the Mirian revolution and reclaim your financial freedom!</p>

              </div>
              <div className="column is-4 social">
              <a href="https://apps.apple.com/app/id1482613387" target="_blank"><img src="https://dwr2vwfm4xarg.cloudfront.net/wp-content/uploads/2018/03/12233348/download_ios.png" width="160" /></a>
</div>
              <div className="column is-4 social">
  
                <a title="twitter" href="https://twitter.com/Mirian_tech">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '2em' }}
                  />
                </a>
                <a title="telegram" href="https://t.me/miriantech">
                  <img
                    src={telegram}
                    alt="Telegram"
                    style={{ width: '2em' }}
                  />
                </a>
                <a title="medium" href="https://medium.com/mirian-tech">
                  <img
                    src={medium}
                    alt="Medium"
                    style={{ width: '2em' }}
                  />
                </a>
              </div>
            </div>
          </div>
          </div></div>
      </footer>
    )
  }
}

export default Footer


/**
 * 
 *               <!--
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                -->
 */

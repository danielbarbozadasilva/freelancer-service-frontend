import React from "react";
import "./styled.scss";
const twitter = require('../../../assets/img/twitter.png');
const facebook = require('../../../assets/img/facebook.png');
const linkedin = require('../../../assets/img/linkedin.png');
const pinterest = require('../../../assets/img/pinterest.png');
const instagram = require('../../../assets/img/instagram.png');
const language = require('../../../assets/img/language.png');
const coin = require('../../../assets/img/coin.png');
const accessibility = require('../../../assets/img/accessibility.png');

function Footer() {
  return (
    <div className="footer">
      <div className="container">
      <hr />
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Freelancer</span>
            <span>Buying on Freelancer</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From Fiverr</h2>
            <span>Freelancer Business</span>
            <span>Freelancer Pro</span>
            <span>Freelancer Logo Maker</span>
            <span>Freelancer Guides</span>
            <span>Get Inspired</span>
            <span>Freelancer Select</span>
            <span>ClearVoice</span>
            <span>Freelancer Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Freelancer</h2>
            <span>© Freelancer International Ltd. 2024</span>
          </div>
          <div className="right">
            <div className="social">
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
              <img src={linkedin} alt="" />
              <img src={pinterest} alt="" />
              <img src={instagram} alt="" />
            </div>
            <div className="link">
              <img src={language} alt="" />
              <span>Portugues</span>
            </div>
            <div className="link">
              <img src={coin} alt="" />
              <span>BRL</span>
            </div>
            <img src={accessibility} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
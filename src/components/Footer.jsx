const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="footer-contact">
            <div className="col-sm-12 col-xl-4 footer-contact-address">
              <a
                href="/Personal/contact-us.html"
                className="header footer-contact-link"
              >
                Contact Us
              </a>
              <div>
                4605 S Old US Hwy 23, Brighton, MI 48114
                <br />
                <span className="phone-replace">888.267.7200</span>
              </div>
            </div>

            <div className="col-sm-12 col-xl-4 footer-contact-social">
              <a
                href="https://www.facebook.com/LakeTrustCreditUnion"
                target="_blank"
                aria-label="Facebook"
                className="external-link"
              >
                <i className="fa fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a
                href="https://twitter.com/laketrust"
                target="_blank"
                aria-label="Twitter"
                className="external-link"
              >
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/lake-trust-credit-union"
                target="_blank"
                aria-label="Linked In"
                className="external-link"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/laketrust/"
                target="_blank"
                aria-label="Instagram"
                className="external-link"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.pinterest.com/laketrust/"
                target="_blank"
                aria-label="Pinterest"
                className="external-link"
              >
                <i className="fa fa-pinterest-p" aria-hidden="true"></i>
              </a>
            </div>

            <div className="col-sm-12 col-xl-4 footer-contact-apps">
              <div className="header">Download Our Free Mobile App</div>
              <div>
                <a
                  href="https://apps.apple.com/us/app/lake-trust-credit-union/id943022011"
                  target="_blank"
                >
                  <img src="/Apple-Badge.png" alt="Apple App Store" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.ifs.banking.fiid1570"
                  target="_blank"
                >
                  <img src="/Google-Badge.png" alt="Google Play" />
                </a>
              </div>
            </div>
          </div>

          <hr className="divider" />

          <div className="col footer-links">
            <span className="col-sm-12 col-xl-3 routing-number">
              Routing Number: <strong>272078268</strong>
            </span>
            <div className="col-sm-12 col-xl-9">
              <a href="/Personal/Forms.html">Forms</a>
              <a href="/Our-Story/Careers.html">Careers</a>
              <a href="/Privacy.html">Privacy</a>
              <a href="/Disclosures.html">Disclosures</a>
              <a href="/Sitemap.html">Sitemap</a>
              <a
                href="https://latest.laketrust.org/blog/topic/financial-safety"
                target="_blank"
              >
                Security Center
              </a>
            </div>
          </div>

          <hr className="divider" />

          <div className="footer-bottom">
            <div className="col-xl-8">
              <p className="ada-compliance">
                If you are using a screen reader or other auxiliary aid and are
                having problems using this website, please call
                <span className="phone-replace">888.267.7200</span> for
                assistance. All products and services available on this website
                are available at all branch{" "}
                <a href="locations.html">locations</a>.
              </p>
            </div>

            <div className="col-xl-4">
              <img
                src="/Equal_Housing_Opportunity.png"
                alt="Equal Housing Opportunity"
              />
              <img src="/NCUA.png" />
              <img src="/Coop-Network-Footer.png" />
            </div>
          </div>

          <p className="copyright">
            &copy; <span id="copyrightDate">date</span>. Lake Trust Credit Union
            - All Rights Reserved.
          </p>
        </div>
      </footer>
      <div className="scroll-top">
          <div className="container">
            <p>
              We&rsquo;re going to be really close friends.{" "}
              <a
                className="oao-link"
                href="https://join.laketrust.org"
                target="_blank"
              >
                Sign up today to become a member.
              </a>
            </p>
          </div>

          <a href="#top" className="scroll" aria-label="Scroll to top of screen">
            <i className="icon-up"></i>
          </a>
        </div>
    </>
  );
};
export default Footer;

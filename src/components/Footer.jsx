import Link from "next/link";
import AppleBadge from './assets/images/Apple-Badge.png';
import GoogleBadge from './assets/images/Google-Badge.png';
import EqualHousing from './assets/images/Equal_Housing_Opportunity.png';
import NCUA from './assets/images/NCUA.png';
import COOP from './assets/images/Coop-Network-Footer.png';

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="footer-contact">
            <div className="col-sm-12 col-xl-4 footer-contact-address">
              <Link
                href="/Personal/contact-us.html"
                className="header footer-contact-link"
              >
                Contact Us
              </Link>
              <div>
                4605 S Old US Hwy 23, Brighton, MI 48114
                <br />
                <span className="phone-replace">888.267.7200</span>
              </div>
            </div>

            <div className="col-sm-12 col-xl-4 footer-contact-social">
              <Link
                href="https://www.facebook.com/LakeTrustCreditUnion"
                target="_blank"
                aria-label="Facebook"
                className="external-link"
              >
                <i className="fa fa-facebook-f" aria-hidden="true"></i>
              </Link>
              <Link
                href="https://twitter.com/laketrust"
                target="_blank"
                aria-label="Twitter"
                className="external-link"
              >
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </Link>
              <Link
                href="https://www.linkedin.com/company/lake-trust-credit-union"
                target="_blank"
                aria-label="Linked In"
                className="external-link"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </Link>
              <Link
                href="https://www.instagram.com/laketrust/"
                target="_blank"
                aria-label="Instagram"
                className="external-link"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </Link>
              <Link
                href="https://www.pinterest.com/laketrust/"
                target="_blank"
                aria-label="Pinterest"
                className="external-link"
              >
                <i className="fa fa-pinterest-p" aria-hidden="true"></i>
              </Link>
            </div>

            <div className="col-sm-12 col-xl-4 footer-contact-apps">
              <div className="header">Download Our Free Mobile App</div>
              <div>
                <Link
                  href="https://apps.apple.com/us/app/lake-trust-credit-union/id943022011"
                  target="_blank"
                >
                  <img src={AppleBadge.src} alt="Apple App Store" />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.ifs.banking.fiid1570"
                  target="_blank"
                >
                  <img src={GoogleBadge.src} alt="Google Play" />
                </Link>
              </div>
            </div>
          </div>

          <hr className="divider" />

          <div className="col footer-links">
            <span className="col-sm-12 col-xl-3 routing-number">
              Routing Number: <strong>272078268</strong>
            </span>
            <div className="col-sm-12 col-xl-9">
              <Link href="/Personal/Forms.html">Forms</Link>
              <Link href="/Our-Story/Careers.html">Careers</Link>
              <Link href="/Privacy.html">Privacy</Link>
              <Link href="/Disclosures.html">Disclosures</Link>
              <Link href="/Sitemap.html">Sitemap</Link>
              <Link
                href="https://latest.laketrust.org/blog/topic/financial-safety"
                target="_blank"
              >
                Security Center
              </Link>
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
                <Link href="/locations">locations</Link>.
              </p>
            </div>

            <div className="col-xl-4">
              <img
                src={EqualHousing.src}
                alt="Equal Housing Opportunity"
              />
              <img src={NCUA.src} />
              <img src={COOP.src}/>
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
              <Link
                className="oao-link"
                href="https://join.laketrust.org"
                target="_blank"
              >
                Sign up today to become a member.
              </Link>
            </p>
          </div>

          <Link href="#top" className="scroll" aria-label="Scroll to top of screen">
            <i className="icon-up"></i>
          </Link>
        </div>
    </>
  );
};
export default Footer;

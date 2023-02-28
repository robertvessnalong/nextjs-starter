
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <nav className="main-nav">
        <Link href='/' className='logo'>
        <img
            src='/assets/images/LakeTrustLogo_Horizontal_NoTagline_White.png'
            alt="Lake Trust Credit Union"
            className="ie-logo"
          />
        </Link>
        <ul className="list-left">
          <li className="btn">
            <Link
              href="/personal"
              tabIndex="1"
              data-name="personal"
              id="personal"
            >
              Personal
            </Link>
          </li>
          <li className="btn">
            <Link
              href="/business/"
              tabIndex="2"
              data-name="commercial"
              id="business"
            >
              Business
            </Link>
          </li>
          <li className="btn">
            <Link href="/our-story" tabIndex="3" data-name="explore" id="explore">
              Our Story
            </Link>
          </li>
        </ul>
        <ul className="list-right">
          <li className="btn search-icon">
            <Link href="/search" aria-label="Open Search" tabIndex="0">
              <i className="material-icons">search</i>
            </Link>
          </li>
          <li className="btn authentication-box">
            <div className="clickToRemove"></div>
            <Link href="#" tabIndex="5" data-name="signin">
              Sign In
            </Link>
            <div className="login-container">
              <div className="dropdown-box" id="login-form">
                <div className="top">
                  <Link
                    href="#"
                    className="account-type"
                    id="personal-account"
                    aria-label="Personal"
                  >
                    Personal
                  </Link>
                  <Link
                    href="#"
                    className="account-type"
                    id="commercial-account"
                    aria-label="Commercial"
                  >
                    Business
                  </Link>
                </div>
                <form id="personal-form" style={{display: "block"}}>
                  <div className="form-error"style={{display: "none"}}></div>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="User Name"
                      id="userid"
                      name="userid"
                      aria-label="Username"
                      tabIndex="0"
                      aria-required=""
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      name="password"
                      aria-label="Password"
                      tabIndex="0"
                      autoComplete="off"
                      aria-required=""
                    />
                  </div>
                  <button
                    type="button"
                    className="login-button"
                    id="personal-login-button"
                    tabIndex="0"
                  >
                    Sign in
                  </button>
                  <hr />
                  <div className="bottom">
                    <div>
                      <Link
                        href="https://www.laketrustonline.org/tob/live/usp-core/app/authUpdate"
                        tabIndex="0"
                        className="passwordLink"
                      >
                        {" "}
                        I forgot my username / password.{" "}
                      </Link>
                    </div>{" "}
                    First time user?{" "}
                    <Link
                      href="/get-online-banking"
                      id="online-banking-enrollment"
                      tabIndex="0"
                      style={{display: "inline", marginLeft: '5px'}}
                    >
                      {" "}
                      Enroll here.{" "}
                    </Link>
                  </div>
                  <hr />
                  <div className="bottom">Make a one-time loan payment</div>
                  <Link
                    href="https://payments.laketrust.org"
                    className="payments-link dark-btn"
                    tabIndex="0"
                    target="_blank"
                  >
                    Pay Your Loan
                  </Link>
                </form>
                <form id="commercial-form"  style={{display: "none"}}>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="User Name"
                      id="useridCommercial"
                      name="userid"
                      aria-label="Username"
                      tabIndex="0"
                    />
                    <div className="error username-error" style={{display: "none"}}>
                      Please enter a username.
                    </div>
                  </div>
                  <div className="input-group">
                    <input
                      type="password"
                      placeholder="Password"
                      id="passwordCommercial"
                      name="password"
                      aria-label="Password"
                      tabIndex="0"
                      autoComplete="off"
                    />
                    <div className="error password-error" style={{display: "none"}}>
                      Please enter a password.
                    </div>
                  </div>
                  <button
                    className="login-button"
                    id="commercial-login-button"
                    tabIndex="0"
                  >
                    Sign in
                  </button>
                  <hr />
                  <div className="bottom">
                    <div>
                      <Link
                        href="https://onlinebanking.laketrust.org/LakeTrustCreditUnionOnline/uux.aspx#/login/resetPasswordUsername"
                        tabIndex="0"
                        className="passwordLink"
                      >
                        {" "}
                        I forgot my username / password.{" "}
                      </Link>
                    </div>
                    <div>Don't have business membership?</div>
                    <Link
                      href="/LakeTrustWebsite/media/pdfs/CommercialMembershipBooklet-Online-1.pdf"
                      tabIndex="0"
                      target="_blank"
                    >
                      {" "}
                      View Application (PDF){" "}
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="authenticated-container dropdown-box"
              style={{display: "none"}}
            >
              <ul className="authenticated-menu">
                <li>
                  <Link href="#" className="launcholb">
                    Launch Online Banking
                  </Link>
                </li>
                <li>
                  <Link href="https://payments.laketrust.org">Pay My Loan</Link>
                </li>
                <li>
                  <Link href="#" className="logout-button">
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="btn">
            <Link
              href="https://join.laketrust.org/#/"
              tabIndex="6"
              target="_blank"
              className="join oao-link"
            >
              Join
            </Link>
          </li>
          <li className="btn">
            <Link href="/locations.html" tabIndex="4">
              Locations
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="sub-nav">
        <div className="sub-nav-container personal">
          <ul className="sub-nav-list">
            <li className="sub-nav-list-item">
              <Link href="#" className="has-dropdown">
                Banking
              </Link>
              <div className="sub-nav-dropdown">
                <div className="col-6">
                  <ul>
                    <li>
                      <Link href="/Personal/Banking/Savings-Accounts.html">
                        Savings Accounts
                      </Link>
                    </li>
                    <li>
                      <Link href="/Personal/Banking/Checking-Accounts.html">
                        Checking Accounts
                      </Link>
                    </li>
                    <li>
                      <Link href="/Personal/Banking/CDs.html">CD Accounts</Link>
                    </li>
                    <li>
                      <Link
                        href="/Personal/Banking/Credit-Cards.html"
                        name="Personal Banking Credit Card"
                        className="ccard"
                      >
                        Credit Cards
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <img src="/LakeTrustWebsite/media/Icons/Safe.png" />

                  <p className="sub-nav-dropdown-title">Special Savings.</p>
                  <p className="sub-nav-dropdown-text">
                    Start saving for a trip or special event.
                  </p>
                  <Link
                    className="sub-nav-dropdown-button"
                    href="/Personal/Banking/Savings-Accounts.html"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </li>
            <li className="sub-nav-list-item">
              <Link href="#" className="has-dropdown">
                Loans
              </Link>
              <div className="sub-nav-dropdown">
                <div className="col-6">
                  <ul>
                    <li>
                      <Link href="/Personal/Loans/Vehicle-Loans.html">
                        Vehicle Loans
                      </Link>
                    </li>
                    <li>
                      <Link href="/Personal/Loans/Home-Loans.html">Home Loans</Link>
                    </li>
                    <li>
                      <Link href="/Personal/Loans/Personal-Loans.html">
                        Personal Loans
                      </Link>
                    </li>
                    <li>
                      <Link href="/Personal/Loans/Student-Loans.html">
                        Student Loans
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Personal/Banking/Credit-Cards.html"
                        name="Personal Loans Credit Card"
                        className="ccard"
                      >
                        Credit Cards
                      </Link>
                    </li>
                    <li>
                      <Link href="/Personal/Loans/Life-Impact-Loan.html">
                        Life Impact Loan
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <img src="/LakeTrustWebsite/media/Icons/make-loan-payment-icon.svg" />

                  <p className="sub-nav-dropdown-title">Make a Loan Payment</p>
                  <p className="sub-nav-dropdown-text" style={{width: 100}}>
                    Making a one-time loan payment has never been easier.
                  </p>
                  <Link
                    className="sub-nav-dropdown-button payments-link"
                    href="https://payments.laketrust.org/#/"
                    target="_blank"
                  >
                    Pay Your Loan
                  </Link>
                </div>
              </div>
            </li>
            <li className="sub-nav-list-item">
              <Link href="/financial-life-planning/">Invest and Insure</Link>
            </li>
            <li className="sub-nav-list-item">
              <Link href="#" className="has-dropdown">
                Resources
              </Link>
              <div className="sub-nav-dropdown">
                <div className="col-6">
                  <ul>
                    <li>
                      <Link href="/Personal/Resources/Skip-a-Payment.html">
                        Skip a Payment
                      </Link>
                    </li>
                    <li>
                      <Link href="/Personal/Resources/Current-Rates.html">
                        Current Rates
                      </Link>
                    </li>
                    <li>
                      <Link href="/Personal/Resources/Account-Management-Tools.html">
                        Account Management Tools
                      </Link>
                    </li>
                    <li>
                      <Link href="/Personal/Resources/E-Statements.html">
                        E-Statements
                      </Link>
                    </li>

                    <li>
                      <Link href="/Personal/Resources/FraudEducation.html">
                        Fraud Education
                      </Link>
                    </li>

                    <li>
                      <Link href="/Personal/Resources/knowledge-hub.html">
                        Knowledge Hub
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/LakeTrustWebsite/media/Assets/Fee-Schedule-Personal-Banking.pdf"
                        target="_blank"
                      >
                        Fee Schedule
                      </Link>
                    </li>
                    <li>
                      <Link href="/Personal/Forms.html">Forms</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <img src="/LakeTrustWebsite/media/Icons/Partnership.png" />

                  <p className="sub-nav-dropdown-title">Become a Member</p>
                  <p className="sub-nav-dropdown-text">
                    You’re gonna love it here.
                  </p>
                  <Link
                    className="sub-nav-dropdown-button oao-link"
                    href="https://join.laketrust.org/#/"
                    target="_blank"
                  >
                    Join Now
                  </Link>
                </div>
              </div>
            </li>
            <li className="sub-nav-list-item">
              <Link href="/Personal/contact-us.html">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="sub-nav-container commercial">
          <ul className="sub-nav-list">
            <li className="sub-nav-list-item">
              <Link href="#" className="has-dropdown">
                Business Banking
              </Link>
              <div className="sub-nav-dropdown">
                <div className="col-6">
                  <ul>
                    <li>
                      <Link href="/Business/Banking/Checking-Accounts.html">
                        Business Checking
                      </Link>
                    </li>
                    <li>
                      <Link href="/Business/Banking/CDs.html">Business CD</Link>
                    </li>
                    <li>
                      <Link
                        href="/Business/Banking/Credit-Cards.html"
                        name="Business Banking Credit Card"
                        className="ccard"
                      >
                        Business Credit Card
                      </Link>
                    </li>
                    <li>
                      <Link href="/Business/Banking/Membership.html">
                        Business Membership
                      </Link>
                    </li>
                    <li>
                      <Link href="/Business/Banking/Savings-Accounts.html">
                        Business Savings
                      </Link>
                    </li>
                    <li>
                      <Link href="/Business/Banking/Treasury-Services.html">
                        Treasury Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/Business/Banking/Digital-Solutions.html">
                        Digital Solutions
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <img src="/LakeTrustWebsite/media/Icons/Exchange.png" />

                  <p className="sub-nav-dropdown-title">Treasury Services.</p>
                  <p className="sub-nav-dropdown-text">
                    Get the tools you need to manage your business efficiently.
                  </p>
                  <Link
                    className="sub-nav-dropdown-button"
                    href="/Business/Banking/Treasury-Services.html"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </li>
            <li className="sub-nav-list-item">
              <Link href="#" className="has-dropdown">
                Loans
              </Link>
              <div className="sub-nav-dropdown">
                <div className="col-6">
                  <ul>
                    <li>
                      <Link
                        href="/Business/Banking/Credit-Cards.html"
                        name="Business Loans Credit Card"
                        className="ccard"
                      >
                        Business Credit Card
                      </Link>
                    </li>
                    <li>
                      <Link href="/Business/Loans/Real-Estate-Mortgage.html">
                        Business Real Estate
                      </Link>
                    </li>
                    <li>
                      <Link href="/Business/Loans/Term-Loans.html">
                        Business Term Loan
                      </Link>
                    </li>
                    <li>
                      <Link href="/Business/Loans/Line-of-Credit.html">
                        Business Line of Credit
                      </Link>
                    </li>
                    <li>
                      <Link href="/Business/Loans/SBA-Loans.html">SBA Loans</Link>
                    </li>
                    <li>
                      <Link href="/Business/Loans/Micro-Business-Loan.html">
                        Small Business Microloans
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <img src="/LakeTrustWebsite/media/Icons/Partnership.png" />

                  <p className="sub-nav-dropdown-title">We’re Here For You.</p>
                  <p className="sub-nav-dropdown-text">
                    We love supporting local Michigan businesses.
                  </p>
                  <Link
                    className="sub-nav-dropdown-button"
                    href="/Business/"
                    target="_blank"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </li>
            <li className="sub-nav-list-item">
              <Link href="/financial-life-planning/">Invest and Insure</Link>
            </li>
            <li className="sub-nav-list-item">
              <Link href="#" className="has-dropdown">
                Resources
              </Link>
              <div className="sub-nav-dropdown">
                <div className="col-6">
                  <ul>
                    <li>
                      <Link href="/Business/Resources/Video-Library.html">
                        Video Library
                      </Link>
                    </li>
                    <li>
                      <Link href="/Business/Resources/Current-Rates.html">
                        Current Rates
                      </Link>
                    </li>
                    <li>
                      <Link href="/Business/Resources/Forms.html">Forms</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <img src="/LakeTrustWebsite/media/Icons/Mobile_Phone_in_hand.png" />

                  <p className="sub-nav-dropdown-title">Online Banking. </p>
                  <p className="sub-nav-dropdown-text">
                    Check your balances and pay your bills on one easy place.
                  </p>
                  <Link
                    className="sub-nav-dropdown-button"
                    href="/Business/Banking/Digital-Solutions.html"
                    target="_blank"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </li>
            <li className="sub-nav-list-item">
              <Link href="/Business/Contact-Us.html">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="sub-nav-container explore">
          <ul className="sub-nav-list">
            <li className="sub-nav-list-item">
              <Link href="/Our-Story/Careers.html">Careers</Link>
            </li>
            <li className="sub-nav-list-item">
              <Link href="/foundation/doing-good.html">Community Impact</Link>
            </li>
            <li className="sub-nav-list-item">
              <Link href="#" className="has-dropdown">
                Foundation
              </Link>
              <div className="sub-nav-dropdown">
                <div className="col-6">
                  <ul>
                    <li>
                      <Link href="/foundation/">About the Foundation</Link>
                    </li>
                    <li>
                      <Link href="/foundation/Lake-Trust-Foundation">
                        Golf Outing
                      </Link>
                    </li>
                    <li>
                      <Link href="/foundation/Scholarships">Scholarships</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <img src="/LakeTrustWebsite/media/Icons/Foundation-DonateNow-Icon.svg" />

                  <p className="sub-nav-dropdown-title">Give back today.</p>
                  <p className="sub-nav-dropdown-text">
                    Support the Lake Trust Foundation to make an impact in your
                    community.
                  </p>
                  <Link className="sub-nav-dropdown-button" href="/Foundation/#donate">
                    Donate Now
                  </Link>
                </div>
              </div>
            </li>
            <li className="sub-nav-list-item">
              <Link href="/Our-Story/Annual-Impact-Report/2021/">Impact Report</Link>
            </li>
            <li className="sub-nav-list-item">
              <Link href="https://latest.laketrust.org/blog" target="_blank">
                Blog
              </Link>
            </li>
            <li className="sub-nav-list-item">
              <Link href="/Our-Story/Board-Financial-Information.html">
                Board &amp; Financial Info
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="mobile-nav">
    <Link href="../index.html" className="logo" tabIndex="0">
        {/* <img src="LakeTrustWebsite/media/site/LTCULOGO.png" alt="Lake Trust Credit Union" className="not-ie-logo">  */}
        <img src='/assets/images/LakeTrustLogo_Horizontal_NoTagline_White.png' alt="Lake Trust Credit Union" className="ie-logo" />
    </Link>

    <Link href="../search.html" id="search-icon" aria-label="Open Search" tabIndex="0">
        <i className="material-icons">
            search
        </i>
    </Link>

    <Link href="#" tabIndex="5" data-name="signin" className="tablet-nav-signin" style={{position: 'absolute', right: 85, color: '#fff'}}>Sign In</Link>

    <div className="bar-wrapper">
        <div className="top bar"></div>
        <div className="middle bar"></div>
        <div className="bottom bar"></div>
    </div>

    <div className="mobile-nav-drawer">
        <div className="mobile-nav-list">
            <ul>
                <li data-name="personal">
                    Personal <i className="material-icons">keyboard_arrow_right</i>
                </li>
                <li data-name="business">
                    Business <i className="material-icons">keyboard_arrow_right</i>
                </li>
                <li data-name="explore">
                    Our Story <i className="material-icons">keyboard_arrow_right</i>
                </li>
            </ul>

            <div className="mobile-nav-list-divider"></div>

            <ul>
                <li><Link href="/locations.html">Locations</Link></li>
                <li><Link href="/Personal/contact-us.html">Contact</Link></li>
                <li><Link href="https://join.laketrust.org/#/" target="_blank" className="join oao-link">Join</Link></li>
            </ul>
        </div>
    </div>
</nav>
    </>
  );
};
export default Header;

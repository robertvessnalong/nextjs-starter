const Header = () => {
  return (
    <>
      <nav className="main-nav">
        <a href="/index.html" className="logo" tabIndex="0">
          <img
            src="/LakeTrustLogo_Horizontal_NoTagline_White.png"
            alt="Lake Trust Credit Union"
            className="ie-logo"
          />
        </a>
        <ul className="list-left">
          <li className="btn">
            <a
              href="/Personal/"
              tabIndex="1"
              data-name="personal"
              id="personal"
            >
              Personal
            </a>
          </li>
          <li className="btn">
            <a
              href="/Business/"
              tabIndex="2"
              data-name="commercial"
              id="business"
            >
              Business
            </a>
          </li>
          <li className="btn">
            <a href="/Our-Story/" tabIndex="3" data-name="explore" id="explore">
              Our Story
            </a>
          </li>
        </ul>
        <ul className="list-right">
          <li className="btn search-icon">
            <a href="/search.html" aria-label="Open Search" tabIndex="0">
              <i className="material-icons">search</i>
            </a>
          </li>
          <li className="btn authentication-box">
            <div className="clickToRemove"></div>
            <a href="#" tabIndex="5" data-name="signin">
              Sign In
            </a>
            <div className="login-container">
              <div className="dropdown-box" id="login-form">
                <div className="top">
                  <a
                    href="#"
                    className="account-type"
                    id="personal-account"
                    aria-label="Personal"
                  >
                    Personal
                  </a>
                  <a
                    href="#"
                    className="account-type"
                    id="commercial-account"
                    aria-label="Commercial"
                  >
                    Business
                  </a>
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
                      <a
                        href="https://www.laketrustonline.org/tob/live/usp-core/app/authUpdate"
                        tabIndex="0"
                        className="passwordLink"
                      >
                        {" "}
                        I forgot my username / password.{" "}
                      </a>
                    </div>{" "}
                    First time user?{" "}
                    <a
                      href="/get-online-banking"
                      id="online-banking-enrollment"
                      tabIndex="0"
                      style={{display: "inline", marginLeft: '5px'}}
                    >
                      {" "}
                      Enroll here.{" "}
                    </a>
                  </div>
                  <hr />
                  <div className="bottom">Make a one-time loan payment</div>
                  <a
                    href="https://payments.laketrust.org"
                    className="payments-link dark-btn"
                    tabIndex="0"
                    target="_blank"
                  >
                    Pay Your Loan
                  </a>
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
                      <a
                        href="https://onlinebanking.laketrust.org/LakeTrustCreditUnionOnline/uux.aspx#/login/resetPasswordUsername"
                        tabIndex="0"
                        className="passwordLink"
                      >
                        {" "}
                        I forgot my username / password.{" "}
                      </a>
                    </div>
                    <div>Don't have business membership?</div>
                    <a
                      href="/LakeTrustWebsite/media/pdfs/CommercialMembershipBooklet-Online-1.pdf"
                      tabIndex="0"
                      target="_blank"
                    >
                      {" "}
                      View Application (PDF){" "}
                    </a>
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
                  <a href="#" className="launcholb">
                    Launch Online Banking
                  </a>
                </li>
                <li>
                  <a href="https://payments.laketrust.org">Pay My Loan</a>
                </li>
                <li>
                  <a href="#" className="logout-button">
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="btn">
            <a
              href="https://join.laketrust.org/#/"
              tabIndex="6"
              target="_blank"
              className="join oao-link"
            >
              Join
            </a>
          </li>
          <li className="btn">
            <a href="/locations.html" tabIndex="4">
              Locations
            </a>
          </li>
        </ul>
      </nav>
      <nav className="sub-nav">
        <div className="sub-nav-container personal">
          <ul className="sub-nav-list">
            <li className="sub-nav-list-item">
              <a href="#" className="has-dropdown">
                Banking
              </a>
              <div className="sub-nav-dropdown">
                <div className="col-6">
                  <ul>
                    <li>
                      <a href="/Personal/Banking/Savings-Accounts.html">
                        Savings Accounts
                      </a>
                    </li>
                    <li>
                      <a href="/Personal/Banking/Checking-Accounts.html">
                        Checking Accounts
                      </a>
                    </li>
                    <li>
                      <a href="/Personal/Banking/CDs.html">CD Accounts</a>
                    </li>
                    <li>
                      <a
                        href="/Personal/Banking/Credit-Cards.html"
                        name="Personal Banking Credit Card"
                        className="ccard"
                      >
                        Credit Cards
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <img src="/LakeTrustWebsite/media/Icons/Safe.png" />

                  <p className="sub-nav-dropdown-title">Special Savings.</p>
                  <p className="sub-nav-dropdown-text">
                    Start saving for a trip or special event.
                  </p>
                  <a
                    className="sub-nav-dropdown-button"
                    href="/Personal/Banking/Savings-Accounts.html"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </li>
            <li className="sub-nav-list-item">
              <a href="#" className="has-dropdown">
                Loans
              </a>
              <div className="sub-nav-dropdown">
                <div className="col-6">
                  <ul>
                    <li>
                      <a href="/Personal/Loans/Vehicle-Loans.html">
                        Vehicle Loans
                      </a>
                    </li>
                    <li>
                      <a href="/Personal/Loans/Home-Loans.html">Home Loans</a>
                    </li>
                    <li>
                      <a href="/Personal/Loans/Personal-Loans.html">
                        Personal Loans
                      </a>
                    </li>
                    <li>
                      <a href="/Personal/Loans/Student-Loans.html">
                        Student Loans
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Personal/Banking/Credit-Cards.html"
                        name="Personal Loans Credit Card"
                        className="ccard"
                      >
                        Credit Cards
                      </a>
                    </li>
                    <li>
                      <a href="/Personal/Loans/Life-Impact-Loan.html">
                        Life Impact Loan
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <img src="/LakeTrustWebsite/media/Icons/make-loan-payment-icon.svg" />

                  <p className="sub-nav-dropdown-title">Make a Loan Payment</p>
                  <p className="sub-nav-dropdown-text" style={{width: 100}}>
                    Making a one-time loan payment has never been easier.
                  </p>
                  <a
                    className="sub-nav-dropdown-button payments-link"
                    href="https://payments.laketrust.org/#/"
                    target="_blank"
                  >
                    Pay Your Loan
                  </a>
                </div>
              </div>
            </li>
            <li className="sub-nav-list-item">
              <a href="/financial-life-planning/">Invest and Insure</a>
            </li>
            <li className="sub-nav-list-item">
              <a href="#" className="has-dropdown">
                Resources
              </a>
              <div className="sub-nav-dropdown">
                <div className="col-6">
                  <ul>
                    <li>
                      <a href="/Personal/Resources/Skip-a-Payment.html">
                        Skip a Payment
                      </a>
                    </li>
                    <li>
                      <a href="/Personal/Resources/Current-Rates.html">
                        Current Rates
                      </a>
                    </li>
                    <li>
                      <a href="/Personal/Resources/Account-Management-Tools.html">
                        Account Management Tools
                      </a>
                    </li>
                    <li>
                      <a href="/Personal/Resources/E-Statements.html">
                        E-Statements
                      </a>
                    </li>

                    <li>
                      <a href="/Personal/Resources/FraudEducation.html">
                        Fraud Education
                      </a>
                    </li>

                    <li>
                      <a href="/Personal/Resources/knowledge-hub.html">
                        Knowledge Hub
                      </a>
                    </li>
                    <li>
                      <a
                        href="/LakeTrustWebsite/media/Assets/Fee-Schedule-Personal-Banking.pdf"
                        target="_blank"
                      >
                        Fee Schedule
                      </a>
                    </li>
                    <li>
                      <a href="/Personal/Forms.html">Forms</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <img src="/LakeTrustWebsite/media/Icons/Partnership.png" />

                  <p className="sub-nav-dropdown-title">Become a Member</p>
                  <p className="sub-nav-dropdown-text">
                    You’re gonna love it here.
                  </p>
                  <a
                    className="sub-nav-dropdown-button oao-link"
                    href="https://join.laketrust.org/#/"
                    target="_blank"
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </li>
            <li className="sub-nav-list-item">
              <a href="/Personal/contact-us.html">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="sub-nav-container commercial">
          <ul className="sub-nav-list">
            <li className="sub-nav-list-item">
              <a href="#" className="has-dropdown">
                Business Banking
              </a>
              <div className="sub-nav-dropdown">
                <div className="col-6">
                  <ul>
                    <li>
                      <a href="/Business/Banking/Checking-Accounts.html">
                        Business Checking
                      </a>
                    </li>
                    <li>
                      <a href="/Business/Banking/CDs.html">Business CD</a>
                    </li>
                    <li>
                      <a
                        href="/Business/Banking/Credit-Cards.html"
                        name="Business Banking Credit Card"
                        className="ccard"
                      >
                        Business Credit Card
                      </a>
                    </li>
                    <li>
                      <a href="/Business/Banking/Membership.html">
                        Business Membership
                      </a>
                    </li>
                    <li>
                      <a href="/Business/Banking/Savings-Accounts.html">
                        Business Savings
                      </a>
                    </li>
                    <li>
                      <a href="/Business/Banking/Treasury-Services.html">
                        Treasury Services
                      </a>
                    </li>
                    <li>
                      <a href="/Business/Banking/Digital-Solutions.html">
                        Digital Solutions
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <img src="/LakeTrustWebsite/media/Icons/Exchange.png" />

                  <p className="sub-nav-dropdown-title">Treasury Services.</p>
                  <p className="sub-nav-dropdown-text">
                    Get the tools you need to manage your business efficiently.
                  </p>
                  <a
                    className="sub-nav-dropdown-button"
                    href="/Business/Banking/Treasury-Services.html"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </li>
            <li className="sub-nav-list-item">
              <a href="#" className="has-dropdown">
                Loans
              </a>
              <div className="sub-nav-dropdown">
                <div className="col-6">
                  <ul>
                    <li>
                      <a
                        href="/Business/Banking/Credit-Cards.html"
                        name="Business Loans Credit Card"
                        className="ccard"
                      >
                        Business Credit Card
                      </a>
                    </li>
                    <li>
                      <a href="/Business/Loans/Real-Estate-Mortgage.html">
                        Business Real Estate
                      </a>
                    </li>
                    <li>
                      <a href="/Business/Loans/Term-Loans.html">
                        Business Term Loan
                      </a>
                    </li>
                    <li>
                      <a href="/Business/Loans/Line-of-Credit.html">
                        Business Line of Credit
                      </a>
                    </li>
                    <li>
                      <a href="/Business/Loans/SBA-Loans.html">SBA Loans</a>
                    </li>
                    <li>
                      <a href="/Business/Loans/Micro-Business-Loan.html">
                        Small Business Microloans
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <img src="/LakeTrustWebsite/media/Icons/Partnership.png" />

                  <p className="sub-nav-dropdown-title">We’re Here For You.</p>
                  <p className="sub-nav-dropdown-text">
                    We love supporting local Michigan businesses.
                  </p>
                  <a
                    className="sub-nav-dropdown-button"
                    href="/Business/"
                    target="_blank"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </li>
            <li className="sub-nav-list-item">
              <a href="/financial-life-planning/">Invest and Insure</a>
            </li>
            <li className="sub-nav-list-item">
              <a href="#" className="has-dropdown">
                Resources
              </a>
              <div className="sub-nav-dropdown">
                <div className="col-6">
                  <ul>
                    <li>
                      <a href="/Business/Resources/Video-Library.html">
                        Video Library
                      </a>
                    </li>
                    <li>
                      <a href="/Business/Resources/Current-Rates.html">
                        Current Rates
                      </a>
                    </li>
                    <li>
                      <a href="/Business/Resources/Forms.html">Forms</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <img src="/LakeTrustWebsite/media/Icons/Mobile_Phone_in_hand.png" />

                  <p className="sub-nav-dropdown-title">Online Banking. </p>
                  <p className="sub-nav-dropdown-text">
                    Check your balances and pay your bills on one easy place.
                  </p>
                  <a
                    className="sub-nav-dropdown-button"
                    href="/Business/Banking/Digital-Solutions.html"
                    target="_blank"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </li>
            <li className="sub-nav-list-item">
              <a href="/Business/Contact-Us.html">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="sub-nav-container explore">
          <ul className="sub-nav-list">
            <li className="sub-nav-list-item">
              <a href="/Our-Story/Careers.html">Careers</a>
            </li>
            <li className="sub-nav-list-item">
              <a href="/foundation/doing-good.html">Community Impact</a>
            </li>
            <li className="sub-nav-list-item">
              <a href="#" className="has-dropdown">
                Foundation
              </a>
              <div className="sub-nav-dropdown">
                <div className="col-6">
                  <ul>
                    <li>
                      <a href="/foundation/">About the Foundation</a>
                    </li>
                    <li>
                      <a href="/foundation/Lake-Trust-Foundation">
                        Golf Outing
                      </a>
                    </li>
                    <li>
                      <a href="/foundation/Scholarships">Scholarships</a>
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
                  <a className="sub-nav-dropdown-button" href="/Foundation/#donate">
                    Donate Now
                  </a>
                </div>
              </div>
            </li>
            <li className="sub-nav-list-item">
              <a href="/Our-Story/Annual-Impact-Report/2021/">Impact Report</a>
            </li>
            <li className="sub-nav-list-item">
              <a href="https://latest.laketrust.org/blog" target="_blank">
                Blog
              </a>
            </li>
            <li className="sub-nav-list-item">
              <a href="/Our-Story/Board-Financial-Information.html">
                Board &amp; Financial Info
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="mobile-nav">
    <a href="../index.html" className="logo" tabIndex="0">
        {/* <img src="LakeTrustWebsite/media/site/LTCULOGO.png" alt="Lake Trust Credit Union" className="not-ie-logo">  */}
        <img src="/LakeTrustLogo_Horizontal_NoTagline_White.png" alt="Lake Trust Credit Union" className="ie-logo" />
    </a>

    <a href="../search.html" id="search-icon" aria-label="Open Search" tabIndex="0">
        <i className="material-icons">
            search
        </i>
    </a>

    <a href="#" tabIndex="5" data-name="signin" className="tablet-nav-signin" style={{position: 'absolute', right: 85, color: '#fff'}}>Sign In</a>

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
                <li><a href="/locations.html">Locations</a></li>
                <li><a href="/Personal/contact-us.html">Contact</a></li>
                <li><a href="https://join.laketrust.org/#/" target="_blank" className="join oao-link">Join</a></li>
            </ul>
        </div>
    </div>
</nav>
    </>
  );
};
export default Header;

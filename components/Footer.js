const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12">
              <img
                src="/static/assets/images/logo4.png"
                className="logo"
                alt=""
              />
              <div className="text">
                We Create your business presence digital, Specialised in website
                development & designing, app Development, logo Desing etc.,
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <h5>Helpful Links</h5>
              <ul className="footer-nav">
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right" />
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right" />
                    <span>Features</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right" />
                    <span>FAQ’s</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right" />
                    <span>Blog</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <h5>Support</h5>
              <ul className="footer-nav">
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right" />
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right" />
                    <span>Terms of Use</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right" />
                    <span>Support Center</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right" />
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <h5>Contact Us</h5>
              <div className="address">
                <p>
                  H-3 Anupam nagar near awadhpuri
                  <br />
                  Bhopal Madhya Predesh
                </p>
                <p>Phone: (+91) 9399559516</p>
                <p>
                  <span>E-Mail:</span>
                  <a href="#">info@redcoarldigital.com</a>
                </p>
                <ul className="social" style={{ display: "none" }}>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook-square" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter-square" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin-square" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus-square" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-github-square" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p className="copyright">
                © 2020 Redcoral Digital. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;

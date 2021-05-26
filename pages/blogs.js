import Head from "next/head";
import Layout from "../components/layout/Layout";
const Index = () => {
  return (
    <Layout>
      <React.Fragment>
        <Head>
          <title>Home </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div>
          {/* ***** Welcome Area Start ***** */}
          <div className="welcome-area" id="welcome">
            {/* ***** Header Background Image Start ***** */}
            <div className="right-bg">
              <img
                src="/static/assets/images/photos/header.jpg"
                className="img-fluid float-right"
                alt=""
              />
            </div>
            {/* ***** Header Background Image End ***** */}
            <div className="header-bg">
              <img
                src="/static/assets/images/header-bg.svg"
                className="img-fluid"
                alt=""
              />
            </div>
            {/* ***** Header Text Start ***** */}
            <div className="header-text">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-sm-12">
                    <h1>
                      Industry Leading Managed Services and Staffing{" "}
                      <span>Solutions</span>
                    </h1>
                    <p>
                      Proven methods to capture business priorities and goals as
                      well as current pain points that enables measurable
                      business outcomes.
                    </p>
                    <a href="#" className="btn-primary-line">
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* ***** Header Text End ***** */}
            {/* ***** Play Button Start ***** */}
            <div className="play-button-wrapper">
              <a href="#" className="btn-play">
                <i className="fa fa-play" />
              </a>
            </div>
            {/* ***** Play Button End ***** */}
          </div>
          {/* ***** Welcome Area End ***** */}
          {/* ***** Features Small Start ***** */}
          <section className="section features-home">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    {/* ***** Features Small Item Start ***** */}
                    <div
                      className="col-lg-3 col-md-6 col-sm-6 col-12"
                      data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
                    >
                      <a
                        href="orange-features-single.html"
                        className="features-small-item"
                      >
                        <div className="icon">
                          <i className="fa fa-cloud" />
                        </div>
                        <h5 className="features-title">Cloud Solutions</h5>
                        <p>
                          Morbilling pharetra sapiening ut mattis viverra.
                          Curabitur magna.
                        </p>
                      </a>
                    </div>
                    {/* ***** Features Small Item End ***** */}
                    {/* ***** Features Small Item Start ***** */}
                    <div
                      className="col-lg-3 col-md-6 col-sm-6 col-12"
                      data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
                    >
                      <a
                        href="orange-features-single.html"
                        className="features-small-item"
                      >
                        <div className="icon">
                          <i className="fa fa-laptop" />
                        </div>
                        <h5 className="features-title">Network Services</h5>
                        <p>
                          Donec pellentesque turpis utium lorem imperdiet semper
                          viverra.
                        </p>
                      </a>
                    </div>
                    {/* ***** Features Small Item End ***** */}
                    {/* ***** Features Small Item Start ***** */}
                    <div
                      className="col-lg-3 col-md-6 col-sm-6 col-12"
                      data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
                    >
                      <a
                        href="orange-features-single.html"
                        className="features-small-item"
                      >
                        <div className="icon">
                          <i className="fa fa-video-camera" />
                        </div>
                        <h5 className="features-title">Webcast Services</h5>
                        <p>
                          Facilisis arcu ligula, malesuada id tincidunt laoreet,
                          facilisis at justo.
                        </p>
                      </a>
                    </div>
                    {/* ***** Features Small Item End ***** */}
                    {/* ***** Features Small Item Start ***** */}
                    <div
                      className="col-lg-3 col-md-6 col-sm-6 col-12"
                      data-scroll-reveal="enter bottom move 50px over 0.6s after 0.8s"
                    >
                      <a
                        href="orange-features-single.html"
                        className="features-small-item"
                      >
                        <div className="icon">
                          <i className="fa fa-server" />
                        </div>
                        <h5 className="features-title">Disaster Recovery</h5>
                        <p>
                          Proin arcu ligula, malesuada id tincidunt laoreet,
                          facilisis at justo.
                        </p>
                      </a>
                    </div>
                    {/* ***** Features Small Item End ***** */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ***** Features Small End ***** */}
          {/* ***** Features Big Item Start ***** */}
          <section className="section padding-bottom-80 colored" id="features">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                  <div className="left-heading">
                    <h2 className="section-title">Cloud Services</h2>
                  </div>
                  <div className="left-text">
                    <p>
                      Phasellus vitae velit sit amet diam semper commodo quis
                      quis libero. Morbi consequat arcu augue, molestie faucibus
                      metus ullamcorper vel.
                    </p>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <a className="btn-home active" href="#">
                          <i className="fa fa-angle-right" />
                          <span>NearCloud</span>
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <a className="btn-home" href="#">
                          <i className="fa fa-angle-right" />
                          <span>Office Cloud</span>
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <a className="btn-home" href="#">
                          <i className="fa fa-angle-right" />
                          <span>Backup Systems</span>
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <a className="btn-home" href="#">
                          <i className="fa fa-angle-right" />
                          <span>Hybrid Cloud</span>
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <a className="btn-home" href="#">
                          <i className="fa fa-angle-right" />
                          <span>API Cloud</span>
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <a className="btn-home" href="#">
                          <i className="fa fa-angle-right" />
                          <span>SDK Cloud</span>
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <a className="btn-home" href="#">
                          <i className="fa fa-angle-right" />
                          <span>Web Services</span>
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <a className="btn-home" href="#">
                          <i className="fa fa-angle-right" />
                          <span>Cloud Hosting</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1" />
                <div
                  className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix"
                  data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
                >
                  <img
                    src="/static/assets/images/photos/features/orange-1.png"
                    className="img-fluid d-block mx-auto"
                    alt="App"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* ***** Features Big Item End ***** */}
          {/* ***** Features Big Item Start ***** */}
          <section className="section padding-bottom-80">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big"
                  data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
                >
                  <img
                    src="/static/assets/images/photos/features/orange-2.png"
                    className="img-fluid d-block mx-auto"
                    alt="App"
                  />
                </div>
                <div className="col-lg-1" />
                <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                  <div className="left-heading">
                    <h2 className="section-title">Design &amp; Development</h2>
                  </div>
                  <div className="left-text">
                    <p>
                      Phasellus vitae velit sit amet diam semper commodo quis
                      quis libero. Morbi consequat arcu augue, molestie faucibus
                      metus ullamcorper vel.
                    </p>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <a className="btn-home active" href="#">
                          <i className="fa fa-angle-right" />
                          <span>Web Design</span>
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <a className="btn-home" href="#">
                          <i className="fa fa-angle-right" />
                          <span>Mobile App Design</span>
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <a className="btn-home" href="#">
                          <i className="fa fa-angle-right" />
                          <span>Android Development</span>
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <a className="btn-home" href="#">
                          <i className="fa fa-angle-right" />
                          <span>iOS Development</span>
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <a className="btn-home" href="#">
                          <i className="fa fa-angle-right" />
                          <span>Back-End</span>
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <a className="btn-home" href="#">
                          <i className="fa fa-angle-right" />
                          <span>Front-End</span>
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <a className="btn-home" href="#">
                          <i className="fa fa-angle-right" />
                          <span>e-Commerce</span>
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <a className="btn-home" href="#">
                          <i className="fa fa-angle-right" />
                          <span>Print Design</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ***** Features Big Item End ***** */}
          {/* ***** Counter Parallax Start ***** */}
          <section className="parallax-counter" id="counter">
            <div className="parallax-content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="count-item">
                      <strong>96</strong>
                      <span>
                        Project
                        <br />
                        Complate
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="count-item">
                      <strong>190</strong>
                      <span>
                        Happy
                        <br />
                        Customer
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="count-item">
                      <strong>12</strong>
                      <span>
                        Experienced
                        <br />
                        Staff
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="count-item">
                      <strong>46</strong>
                      <span>
                        Ongoing
                        <br />
                        Project
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ***** Counter Parallax End ***** */}
          {/* ***** Team Start ***** */}
          <section className="section padding-bottom-80" id="our-team">
            <div className="container">
              {/* ***** Section Title Start ***** */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="center-heading">
                    <h2 className="section-title">Our Team</h2>
                  </div>
                </div>
                <div className="offset-lg-3 col-lg-6">
                  <div className="center-text">
                    <p>
                      Donec vulputate urna sed rutrum venenatis. Cras consequat
                      magna quis arcu elementum, quis congue risus volutpat.
                    </p>
                  </div>
                </div>
              </div>
              {/* ***** Section Title End ***** */}
              <div className="row">
                {/* ***** Team Item Start ***** */}
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="team-item">
                    <div className="user-image">
                      <img src="/static/assets/images/photos/team/1.jpg" alt="" />
                    </div>
                    <div className="team-content">
                      <div className="team-info">
                        <h3 className="user-name">Fletch Skinner</h3>
                        <span>Product Strategist</span>
                      </div>
                      <ul className="social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-github" />
                          </a>
                        </li>
                      </ul>
                      <p>
                        Proin arcu ligula, malesuada id tincidunt laoreet,
                        facilisis at justo. Sed at lorem.
                      </p>
                    </div>
                  </div>
                </div>
                {/* ***** Team Item End ***** */}
                {/* ***** Team Item Start ***** */}
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="team-item">
                    <div className="user-image">
                      <img src="/static/assets/images/photos/team/2.jpg" alt="" />
                    </div>
                    <div className="team-content">
                      <div className="team-info">
                        <h3 className="user-name">Lance Bogrol</h3>
                        <span>Visual Designer</span>
                      </div>
                      <ul className="social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-github" />
                          </a>
                        </li>
                      </ul>
                      <p>
                        Aliquam eget convallis nunc, et porta libero. Etiam
                        velit, lobortis ut tristique.
                      </p>
                    </div>
                  </div>
                </div>
                {/* ***** Team Item End ***** */}
                {/* ***** Team Item Start ***** */}
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="team-item">
                    <div className="user-image">
                      <img src="/static/assets/images/photos/team/3.jpg" alt="" />
                    </div>
                    <div className="team-content">
                      <div className="team-info">
                        <h3 className="user-name">Valentino Morose</h3>
                        <span>Android Developer</span>
                      </div>
                      <ul className="social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-github" />
                          </a>
                        </li>
                      </ul>
                      <p>
                        Curabitur tristique nec orci quis porta. Aliquam leo
                        justo, auctor eget sapien.
                      </p>
                    </div>
                  </div>
                </div>
                {/* ***** Team Item End ***** */}
                {/* ***** Team Item Start ***** */}
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="team-item">
                    <div className="user-image">
                      <img src="/static/assets/images/photos/team/4.jpg" alt="" />
                    </div>
                    <div className="team-content">
                      <div className="team-info">
                        <h3 className="user-name">Giles Posture</h3>
                        <span>iOS Developer</span>
                      </div>
                      <ul className="social">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-github" />
                          </a>
                        </li>
                      </ul>
                      <p>
                        Nunc posuere lectus ut aliquet facilisis. Nam varius id
                        magna et convallis.
                      </p>
                    </div>
                  </div>
                </div>
                {/* ***** Team Item End ***** */}
              </div>
            </div>
          </section>
          {/* ***** Team End ***** */}
          {/* ***** Pricing Plans Start ***** */}
          <section
            className="section colored padding-bottom-80"
            id="pricing-plans"
          >
            <div className="container">
              {/* ***** Section Title Start ***** */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="center-heading">
                    <h2 className="section-title">Pricing Plans</h2>
                  </div>
                </div>
                <div className="offset-lg-3 col-lg-6">
                  <div className="center-text">
                    <p>
                      Donec vulputate urna sed rutrum venenatis. Cras consequat
                      magna quis arcu elementum, quis congue risus volutpat.
                    </p>
                  </div>
                </div>
              </div>
              {/* ***** Section Title End ***** */}
              <div className="row">
                {/* ***** Pricing Item Start ***** */}
                <div
                  className="col-lg-4 col-md-6 col-sm-12"
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
                >
                  <div className="pricing-item">
                    <div className="pricing-header">
                      <h3 className="pricing-title">BASIC PLAN</h3>
                    </div>
                    <div className="pricing-body">
                      <div className="number">
                        <span>1</span>
                      </div>
                      <div className="price-wrapper">
                        <span className="currency">$</span>
                        <span className="price">13.90</span>
                        <span className="period">/Month</span>
                      </div>
                      <ul className="list">
                        <li className="active">Unlimited Website</li>
                        <li className="active">Unlimited Users</li>
                        <li className="active">5 GB Bandwidth</li>
                        <li className="active">Highest Speed</li>
                        <li>Data Security and Backupss</li>
                        <li>1 GB Storage</li>
                        <li>24x7 Great Support</li>
                        <li>Monthly Reports and Analytics</li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a href="#">Select Plan</a>
                    </div>
                  </div>
                </div>
                {/* ***** Pricing Item End ***** */}
                {/* ***** Pricing Item Start ***** */}
                <div
                  className="col-lg-4 col-md-6 col-sm-12"
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
                >
                  <div className="pricing-item active">
                    <div className="pricing-header">
                      <h3 className="pricing-title">ADVANCED PLAN</h3>
                    </div>
                    <div className="pricing-body">
                      <div className="number">
                        <span>2</span>
                      </div>
                      <div className="price-wrapper">
                        <span className="currency">$</span>
                        <span className="price">23.90</span>
                        <span className="period">/Month</span>
                      </div>
                      <ul className="list">
                        <li className="active">Unlimited Website</li>
                        <li className="active">Unlimited Users</li>
                        <li className="active">15 GB Bandwidth</li>
                        <li className="active">Highest Speed</li>
                        <li className="active">Data Security and Backupss</li>
                        <li className="active">1 GB Storage</li>
                        <li>24x7 Great Support</li>
                        <li>Monthly Reports and Analytics</li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a href="#">Select Plan</a>
                    </div>
                  </div>
                </div>
                {/* ***** Pricing Item End ***** */}
                {/* ***** Pricing Item Start ***** */}
                <div
                  className="col-lg-4 col-md-6 col-sm-12"
                  data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
                >
                  <div className="pricing-item">
                    <div className="pricing-header">
                      <h3 className="pricing-title">EXPERT PLAN</h3>
                    </div>
                    <div className="pricing-body">
                      <div className="number">
                        <span>3</span>
                      </div>
                      <div className="price-wrapper">
                        <span className="currency">$</span>
                        <span className="price">33.90</span>
                        <span className="period">/Month</span>
                      </div>
                      <ul className="list">
                        <li className="active">Unlimited Website</li>
                        <li className="active">Unlimited Users</li>
                        <li className="active">15 GB Bandwidth</li>
                        <li className="active">Highest Speed</li>
                        <li className="active">Data Security and Backupss</li>
                        <li className="active">1 GB Storage</li>
                        <li className="active">24x7 Great Support</li>
                        <li className="active">
                          Monthly Reports and Analytics
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <a href="#">Select Plan</a>
                    </div>
                  </div>
                </div>
                {/* ***** Pricing Item End ***** */}
              </div>
            </div>
          </section>
          {/* ***** Pricing Plans End ***** */}
          {/* ***** Parallax Start ***** */}
          <section className="parallax" id="parallax-text">
            <div className="parallax-content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="info">
                      <p>
                        We design and develop <span>web apps</span> that delight
                        your users and grow your business.
                      </p>
                      <a className="btn-white-line" href="#">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ***** Parallax End ***** */}
          {/* ***** Blog Start ***** */}
          <section className="section white padding-bottom-80" id="blog">
            <div className="container">
              {/* ***** Section Title Start ***** */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="center-heading">
                    <h2 className="section-title">Latest Blog Posts</h2>
                  </div>
                </div>
                <div className="offset-lg-3 col-lg-6">
                  <div className="center-text">
                    <p>
                      Donec vulputate urna sed rutrum venenatis. Cras consequat
                      magna quis arcu elementum, quis congue risus volutpat.
                    </p>
                  </div>
                </div>
              </div>
              {/* ***** Section Title End ***** */}
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="blog-post-thumb">
                    <div className="img">
                      <img src="/static/assets/images/photos/blog/1.jpg" alt="" />
                    </div>
                    <div className="blog-content">
                      <h3>
                        <a href="orange-blog-single.html">
                          Turing Expands the Leadership Team with David Lin,
                          Controller
                        </a>
                      </h3>
                      <div className="text">
                        Mauris tellus sem, ultrices varius nisl at, convallis
                        iaculis mauris. Sed eget sem vitae purus tempus
                        dignissim.
                      </div>
                      <a
                        href="orange-blog-single.html"
                        className="btn-primary-line"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="blog-post-thumb">
                    <div className="img">
                      <img src="/static/assets/images/photos/blog/2.jpg" alt="" />
                    </div>
                    <div className="blog-content">
                      <h3>
                        <a href="orange-blog-single.html">
                          Turing Partners with Velocloud to Deliver Managed
                          SD-WAN
                        </a>
                      </h3>
                      <div className="text">
                        Cras imperdiet faucibus sem, a dignissim urna feugiat
                        sed. Interdum et malesuada fames ac ante ipsum.
                      </div>
                      <a
                        href="orange-blog-single.html"
                        className="btn-primary-line"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="blog-post-thumb">
                    <div className="img">
                      <img src="/static/assets/images/photos/blog/3.jpg" alt="" />
                    </div>
                    <div className="blog-content">
                      <h3>
                        <a href="orange-blog-single.html">
                          Corporate IT Solutions Adds Neva as Senior Account
                          Executive
                        </a>
                      </h3>
                      <div className="text">
                        Quisque euismod nec lacus sit amet maximus. Ut convallis
                        sagittis lorem auctor malesuada. Morbi auctor tortor eu.
                      </div>
                      <a
                        href="orange-blog-single.html"
                        className="btn-primary-line"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default Index;

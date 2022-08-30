import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        {/*================Header Menu Area =================*/}
        <header className="header_area">
          <div className="top_menu">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="float-left">
                    <p>Phone: +01 256 25 235</p>
                    <p>email: info@eiser.com</p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="float-right">
                    <ul className="right_side">
                      <li>
                        <a href="cart.html">gift card</a>
                      </li>
                      <li>
                        <a href="tracking.html">track order</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main_menu">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light w-100">
                {/* Brand and toggle get grouped for better mobile display */}
                <a className="navbar-brand logo_h" href="index.html">
                  <img src="/src/assets/img/logo.png" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div
                  className="collapse navbar-collapse offset w-100"
                  id="navbarSupportedContent"
                >
                  <div className="row w-100 mr-0">
                    <div className="col-lg-7 pr-0">
                      <ul className="nav navbar-nav center_nav pull-right">
                        <li className="nav-item active">
                          <a className="nav-link" href="index.html">
                            Home
                          </a>
                        </li>
                        <li className="nav-item submenu dropdown">
                          <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Shop
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a className="nav-link" href="category.html">
                                Shop Category
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="single-product.html"
                              >
                                Product Details
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="checkout.html">
                                Product Checkout
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="cart.html">
                                Shopping Cart
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item submenu dropdown">
                          <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Blog
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a className="nav-link" href="blog.html">
                                Blog
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="single-blog.html">
                                Blog Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item submenu dropdown">
                          <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Pages
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a className="nav-link" href="tracking.html">
                                Tracking
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="elements.html">
                                Elements
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="contact.html">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-5 pr-0">
                      <ul className="nav navbar-nav navbar-right right_nav pull-right">
                        <li className="nav-item">
                          <a href="#" className="icons">
                            <i className="ti-search" aria-hidden="true" />
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="icons">
                            <i className="ti-shopping-cart" />
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="icons">
                            <i className="ti-user" aria-hidden="true" />
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="icons">
                            <i className="ti-heart" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
        {/*================Header Menu Area =================*/}
        {/*================Home Banner Area =================*/}
        <section className=" mb-40">
        <img src="https://thietke6d.com/wp-content/uploads/2021/03/Mau-banner-quang-cao-dep-1.png" alt="" />

        </section>
        {/*================End Home Banner Area =================*/}
        {/* Start feature Area */}
        <section className="feature-area section_gap_bottom_custom">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-feature">
                  <a href="#" className="title">
                    <i className="flaticon-money" />
                    <h3>Money back gurantee</h3>
                  </a>
                  <p>Shall open divide a one</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-feature">
                  <a href="#" className="title">
                    <i className="flaticon-truck" />
                    <h3>Free Delivery</h3>
                  </a>
                  <p>Shall open divide a one</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-feature">
                  <a href="#" className="title">
                    <i className="flaticon-support" />
                    <h3>Alway support</h3>
                  </a>
                  <p>Shall open divide a one</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-feature">
                  <a href="#" className="title">
                    <i className="flaticon-blockchain" />
                    <h3>Secure payment</h3>
                  </a>
                  <p>Shall open divide a one</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End feature Area */}
        {/*================ Feature Product Area =================*/}
        <section className="feature_product_area section_gap_bottom_custom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="main_title">
                  <h2>
                    <span>Featured product</span>
                  </h2>
                  <p>Bring called seed first of third give itself now ment</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img
                      className="img-fluid w-100"
                      src="/src/assets/img/product/feature-product/f-p-1.jpg"
                    />
                    <div className="p_icon">
                      <a href="#">
                        <i className="ti-eye" />
                      </a>
                      <a href="#">
                        <i className="ti-heart" />
                      </a>
                      <a href="#">
                        <i className="ti-shopping-cart" />
                      </a>
                    </div>
                  </div>
                  <div className="product-btm">
                    <a href="#" className="d-block">
                      <h4>Latest men’s sneaker</h4>
                    </a>
                    <div className="mt-3">
                      <span className="mr-4">$25.00</span>
                      <del>$35.00</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img
                      className="img-fluid w-100"
                      src="/src/assets/img/product/feature-product/f-p-2.jpg"
                    />
                    <div className="p_icon">
                      <a href="#">
                        <i className="ti-eye" />
                      </a>
                      <a href="#">
                        <i className="ti-heart" />
                      </a>
                      <a href="#">
                        <i className="ti-shopping-cart" />
                      </a>
                    </div>
                  </div>
                  <div className="product-btm">
                    <a href="#" className="d-block">
                      <h4>Red women purses</h4>
                    </a>
                    <div className="mt-3">
                      <span className="mr-4">$25.00</span>
                      <del>$35.00</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img
                      className="img-fluid w-100"
                      src="/src/assets/img/product/feature-product/f-p-3.jpg"
                    />
                    <div className="p_icon">
                      <a href="#">
                        <i className="ti-eye" />
                      </a>
                      <a href="#">
                        <i className="ti-heart" />
                      </a>
                      <a href="#">
                        <i className="ti-shopping-cart" />
                      </a>
                    </div>
                  </div>
                  <div className="product-btm">
                    <a href="#" className="d-block">
                      <h4>Men stylist Smart Watch</h4>
                    </a>
                    <div className="mt-3">
                      <span className="mr-4">$25.00</span>
                      <del>$35.00</del>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================ End Feature Product Area =================*/}
        {/*================ Offer Area =================*/}
      
        <section className="inspired_product_area section_gap_bottom_custom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="main_title">
                  <h2>
                    <span>Inspired products</span>
                  </h2>
                  <p>Bring called seed first of third give itself now ment</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img
                      className="img-fluid w-100"
                      src="/src/assets/img/product/inspired-product/i1.jpg"
                    />
                    <div className="p_icon">
                      <a href="#">
                        <i className="ti-eye" />
                      </a>
                      <a href="#">
                        <i className="ti-heart" />
                      </a>
                      <a href="#">
                        <i className="ti-shopping-cart" />
                      </a>
                    </div>
                  </div>
                  <div className="product-btm">
                    <a href="#" className="d-block">
                      <h4>Latest men’s sneaker</h4>
                    </a>
                    <div className="mt-3">
                      <span className="mr-4">$25.00</span>
                      <del>$35.00</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img
                      className="img-fluid w-100"
                      src="/src/assets/img/product/inspired-product/i2.jpg"
                    />
                    <div className="p_icon">
                      <a href="#">
                        <i className="ti-eye" />
                      </a>
                      <a href="#">
                        <i className="ti-heart" />
                      </a>
                      <a href="#">
                        <i className="ti-shopping-cart" />
                      </a>
                    </div>
                  </div>
                  <div className="product-btm">
                    <a href="#" className="d-block">
                      <h4>Latest men’s sneaker</h4>
                    </a>
                    <div className="mt-3">
                      <span className="mr-4">$25.00</span>
                      <del>$35.00</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img
                      className="img-fluid w-100"
                      src="/src/assets/img/product/inspired-product/i3.jpg"
                    />
                    <div className="p_icon">
                      <a href="#">
                        <i className="ti-eye" />
                      </a>
                      <a href="#">
                        <i className="ti-heart" />
                      </a>
                      <a href="#">
                        <i className="ti-shopping-cart" />
                      </a>
                    </div>
                  </div>
                  <div className="product-btm">
                    <a href="#" className="d-block">
                      <h4>Latest men’s sneaker</h4>
                    </a>
                    <div className="mt-3">
                      <span className="mr-4">$25.00</span>
                      <del>$35.00</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img
                      className="img-fluid w-100"
                      src="/src/assets/img/product/inspired-product/i4.jpg"
                    />
                    <div className="p_icon">
                      <a href="#">
                        <i className="ti-eye" />
                      </a>
                      <a href="#">
                        <i className="ti-heart" />
                      </a>
                      <a href="#">
                        <i className="ti-shopping-cart" />
                      </a>
                    </div>
                  </div>
                  <div className="product-btm">
                    <a href="#" className="d-block">
                      <h4>Latest men’s sneaker</h4>
                    </a>
                    <div className="mt-3">
                      <span className="mr-4">$25.00</span>
                      <del>$35.00</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img
                      className="img-fluid w-100"
                      src="/src/assets/img/product/inspired-product/i5.jpg"
                    />
                    <div className="p_icon">
                      <a href="#">
                        <i className="ti-eye" />
                      </a>
                      <a href="#">
                        <i className="ti-heart" />
                      </a>
                      <a href="#">
                        <i className="ti-shopping-cart" />
                      </a>
                    </div>
                  </div>
                  <div className="product-btm">
                    <a href="#" className="d-block">
                      <h4>Latest men’s sneaker</h4>
                    </a>
                    <div className="mt-3">
                      <span className="mr-4">$25.00</span>
                      <del>$35.00</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img
                      className="img-fluid w-100"
                      src="/src/assets/img/product/inspired-product/i6.jpg"
                    />
                    <div className="p_icon">
                      <a href="#">
                        <i className="ti-eye" />
                      </a>
                      <a href="#">
                        <i className="ti-heart" />
                      </a>
                      <a href="#">
                        <i className="ti-shopping-cart" />
                      </a>
                    </div>
                  </div>
                  <div className="product-btm">
                    <a href="#" className="d-block">
                      <h4>Latest men’s sneaker</h4>
                    </a>
                    <div className="mt-3">
                      <span className="mr-4">$25.00</span>
                      <del>$35.00</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img
                      className="img-fluid w-100"
                      src="/src/assets/img/product/inspired-product/i7.jpg"
                    />
                    <div className="p_icon">
                      <a href="#">
                        <i className="ti-eye" />
                      </a>
                      <a href="#">
                        <i className="ti-heart" />
                      </a>
                      <a href="#">
                        <i className="ti-shopping-cart" />
                      </a>
                    </div>
                  </div>
                  <div className="product-btm">
                    <a href="#" className="d-block">
                      <h4>Latest men’s sneaker</h4>
                    </a>
                    <div className="mt-3">
                      <span className="mr-4">$25.00</span>
                      <del>$35.00</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img
                      className="img-fluid w-100"
                      src="/src/assets/img/product/inspired-product/i8.jpg"
                    />
                    <div className="p_icon">
                      <a href="#">
                        <i className="ti-eye" />
                      </a>
                      <a href="#">
                        <i className="ti-heart" />
                      </a>
                      <a href="#">
                        <i className="ti-shopping-cart" />
                      </a>
                    </div>
                  </div>
                  <div className="product-btm">
                    <a href="#" className="d-block">
                      <h4>Latest men’s sneaker</h4>
                    </a>
                    <div className="mt-3">
                      <span className="mr-4">$25.00</span>
                      <del>$35.00</del>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================ End Inspired Product Area =================*/}
        {/*================ Start Blog Area =================*/}
        <section className="blog-area section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="main_title">
                  <h2>
                    <span>latest blog</span>
                  </h2>
                  <p>Bring called seed first of third give itself now ment</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-blog">
                  <div className="thumb">
                    <img className="img-fluid" src="/src/assets/img/b1.jpg" />
                  </div>
                  <div className="short_details">
                    <div className="meta-top d-flex">
                      <a href="#">By Admin</a>
                      <a href="#">
                        <i className="ti-comments-smiley" />2 Comments
                      </a>
                    </div>
                    <a className="d-block" href="single-blog.html">
                      <h4>
                        Ford clever bed stops your sleeping partner hogging the
                        whole
                      </h4>
                    </a>
                    <div className="text-wrap">
                      <p>
                        Let one fifth i bring fly to divided face for bearing
                        the divide unto seed winged divided light Forth.
                      </p>
                    </div>
                    <a href="#" className="blog_btn">
                      Learn More <span className="ml-2 ti-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-blog">
                  <div className="thumb">
                    <img className="img-fluid" src="/src/assets/img/b2.jpg" />
                  </div>
                  <div className="short_details">
                    <div className="meta-top d-flex">
                      <a href="#">By Admin</a>
                      <a href="#">
                        <i className="ti-comments-smiley" />2 Comments
                      </a>
                    </div>
                    <a className="d-block" href="single-blog.html">
                      <h4>
                        Ford clever bed stops your sleeping partner hogging the
                        whole
                      </h4>
                    </a>
                    <div className="text-wrap">
                      <p>
                        Let one fifth i bring fly to divided face for bearing
                        the divide unto seed winged divided light Forth.
                      </p>
                    </div>
                    <a href="#" className="blog_btn">
                      Learn More <span className="ml-2 ti-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-blog">
                  <div className="thumb">
                    <img className="img-fluid" src="/src/assets/img/b3.jpg" />
                  </div>
                  <div className="short_details">
                    <div className="meta-top d-flex">
                      <a href="#">By Admin</a>
                      <a href="#">
                        <i className="ti-comments-smiley" />2 Comments
                      </a>
                    </div>
                    <a className="d-block" href="single-blog.html">
                      <h4>
                        Ford clever bed stops your sleeping partner hogging the
                        whole
                      </h4>
                    </a>
                    <div className="text-wrap">
                      <p>
                        Let one fifth i bring fly to divided face for bearing
                        the divide unto seed winged divided light Forth.
                      </p>
                    </div>
                    <a href="#" className="blog_btn">
                      Learn More <span className="ml-2 ti-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================ End Blog Area =================*/}
        {/*================ start footer Area  =================*/}
        <footer className="footer-area section_gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-6 single-footer-widget">
                <h4>Top Products</h4>
                <ul>
                  <li>
                    <a href="#">Managed Website</a>
                  </li>
                  <li>
                    <a href="#">Manage Reputation</a>
                  </li>
                  <li>
                    <a href="#">Power Tools</a>
                  </li>
                  <li>
                    <a href="#">Marketing Service</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 single-footer-widget">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Brand Assets</a>
                  </li>
                  <li>
                    <a href="#">Investor Relations</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 single-footer-widget">
                <h4>Features</h4>
                <ul>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Brand Assets</a>
                  </li>
                  <li>
                    <a href="#">Investor Relations</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 single-footer-widget">
                <h4>Resources</h4>
                <ul>
                  <li>
                    <a href="#">Guides</a>
                  </li>
                  <li>
                    <a href="#">Research</a>
                  </li>
                  <li>
                    <a href="#">Experts</a>
                  </li>
                  <li>
                    <a href="#">Agencies</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 single-footer-widget">
                <h4>Newsletter</h4>
                <p>You can trust us. we only send promo offers,</p>
                <div className="form-wrap" id="mc_embed_signup">
                  <form
                    target="_blank"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                    method="get"
                    className="form-inline"
                  >
                    <input
                      className="form-control"
                      name="EMAIL"
                      placeholder="Your Email Address"
                    />
                    <button className="click-btn btn btn-default">
                      Subscribe
                    </button>
                    <div style={{ position: "absolute", left: "-5000px" }}>
                      <input
                        name="b_36c4fd991d266f23781ded980_aefe40901a"
                        tabIndex={-1}
                        type="text"
                      />
                    </div>
                    <div className="info" />
                  </form>
                </div>
              </div>
            </div>
            <div className="footer-bottom row align-items-center">
              <p className="footer-text m-0 col-lg-8 col-md-12">
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
              <div className="col-lg-4 col-md-12 footer-social">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-dribbble" />
                </a>
                <a href="#">
                  <i className="fa fa-behance" />
                </a>
              </div>
            </div>
          </div>
        </footer>
        {/*================ End footer Area  =================*/}
        {/* Optional JavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
      </div>
    </div>
  );
}

export default App;

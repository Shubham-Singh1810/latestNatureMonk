"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="footer-outer">
        <div className="footer-inner d-flex  gap-4">
          <div className="footer-1 footer-item">
            <img
              src="/assets/brandLogoFav.png"
              alt="logo"
              className="img-fluid "
              style={{ height: "80px", borderRadius: "4px" }}
            />
            <p className="text-white mt-4">
              Welcome to Nature Monk, where tradition meets purity. We are
              committed to providing you with the finest organic products,
              crafted using age-old methods that preserve nature's goodness. Our
              journey began with a passion for healthy living and a desire to
              bring back the authentic taste of traditional foods.
            </p>

            <div className="social-icons d-flex gap-2 mt-4">
              <img src="https://cdn-icons-png.flaticon.com/128/2175/2175193.png" />

              <img src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" />
              <img src="https://cdn-icons-png.flaticon.com/128/1384/1384007.png" />
            </div>
          </div>

          <div className="footer-2 footer-item d-flex flex-column align-items-center text-center">
            <h6>Explore Links</h6>
            <hr></hr>
            <div className="footer-links">
              <Link href="/cookie-policy">
                {" "}
                <p>Cookie Policy</p>{" "}
              </Link>
              {/* <p>Disclaimer</p> */}
              <Link href="/term-conditions">
                <p>Terms & Condition</p>
              </Link>
              <Link href="/privacy-policy">
                <p>Privacy Policy</p>
              </Link>
              <Link href="/refund-returns">
                <p>Refund & Returns</p>{" "}
              </Link>
              <Link href="/shipping-policy">
                {" "}
                <p>Shipping Policy</p>{" "}
              </Link>
              <Link href="/contact">
                {" "}
                <p>Contact Us</p>
              </Link>
            </div>
          </div>

          <div className="footer-3 footer-item">
            <h6>Contact us</h6>
            <hr></hr>
            <p>191, shiv nagar, tarsa road, kanhan 441401</p>
            <p>naturemonk01@gmail.com</p>
            <p>+91 8208334548</p>
            
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-between mt-4 pt-4 pb-5">
          <p className="mb-0 pb-2 text-light">
            © 2024. All Rights Reserved Nature Monk
          </p>
          <div className="d-flex gap-3">
            <img src="/assets/paypal.png" className="company-img" />
            <img src="/assets/visa.png" className="company-img" />
            <img src="/assets/mastercard.png" className="company-img" />
            <img src="/assets/discover.png" className="company-img" />
            <img src="/assets/JCB.png" className="company-img" />
          </div>
        </div>
        {/* <div className="d-flex justify-content-center mt-1">
          <p className="text-light">
            Developed by{" "}
            <span className="geent-text">
              <a href="https://dousoft.in/" target="blank">
                dousoft It Solution Pvt Ltd
              </a>
            </span>{" "}
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Footer;

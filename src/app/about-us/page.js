"use client";

import React, { useRef, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import { getBanners } from "../services/banner.service";
import FooterNav from "../Components/FooterNav";
const page = () => {
  const infoArr = [
    {
      img: "https://cdn-icons-png.flaticon.com/128/11486/11486952.png",
      title: "Our Philosophy",
      subtitle: [
        "At Nature Monk, we believe in the power of natural processes. We use sustainable practices to ensure that our products, like A2 milk and bilona ghee, remain pure and free from additives. We prioritize the well-being of our Gir cows, allowing them to graze freely and live stress-free, which reflects in the quality of our milk",
      ],
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/1146/1146445.png",
      title: "Our Products",
      subtitle: [
        "From kachi ghani oils to organic honey, each item is carefully crafted to deliver health and taste. We take pride in offering products that support your well-being and enhance your culinary experiences.",
      ],
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/8215/8215621.png",
      title: "Community and Environment",
      subtitle: [
        "We work closely with local farmers, supporting sustainable agriculture and promoting eco-friendly practices. Our commitment to the environment is as strong as our dedication to quality.",
      ],
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/1441/1441147.png",
      title: "Join Us",
      subtitle: [
        "Explore our range of natural products and taste the difference that tradition and purity bring. Connect with us on our journey towards healthier living, and experience the Nature Monk difference.",
      ],
    },
  ];

  const certifications = [
    {
      title: "FSSAI",
      description:
        "FSSAI (Food Safety and Standards Authority of India) is a statutory body established under the Food Safety and Standards Act, 2006.",
    },
    // {
    //   title: "IndiaMART Trust Seal",
    //   description:
    //     "Verified supplier credentials that ensure secure and trustworthy transactions.",
    // },
    // {
    //   title: "GeM Registered",
    //   description:
    //     "Authorized to seamlessly serve government and public-sector clients via the e-Marketplace.",
    // },
    {
      title: "MSME Registered",
      description:
        "Recognition as a micro/small enterprise—making us eligible for government benefits and support.",
    },
  ];

  const [slides, setSlides] = useState([]);
  const [showloader, setShowLoader] = useState(false);
  useEffect(() => {
    const fetchBanners = async () => {
      setShowLoader(true);
      try {
        const response = await getBanners();
        if (response?.data?.length > 0) {
          setSlides(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch banners", error);
      }
      setShowLoader(false);
    };

    fetchBanners();
  }, []);
  return (
    <>
      <Navbar selectedItem="About" />
      <HeroSection category="About" />
      <div className="container aboutMain">
        <div className="row my-md-5 my-4 mx-0 mx-md-2">
          <div className="col-md-6 mt-auto col-12 px-0 px-md-2 ">
            <h1>स्वाद भी, स्वस्त भी — That’s the Nature Monk promise.</h1>
            <p className="pe-md-3 pe-0">
              At Nature Monk, we believe that food should not only taste good
              but also heal, nourish, and support your well-being — just the way
              nature intended. We are a homegrown Indian brand committed to
              reviving traditional wisdom through pure, chemical-free, and
              authentically crafted products.
            </p>
            <p>
              From A2 Bilona Ghee, Kachi Ghani Cold-Pressed Oils, Dehydrated
              Fruits & Vegetables, to Ayurvedic Superfoods like Moringa Powder
              and Turmeric, every product at Nature Monk is made with care,
              using time-tested methods and responsibly sourced ingredients. Our
              ghee is made using the ancient Bilona method, and our oils are
              extracted in wooden Kolhus (Ghanis) to retain their natural
              nutrients and flavor.
            </p>
            <p>
              We work closely with farmers, women-led units, and traditional
              processors to ensure our products are as honest and authentic as
              they claim. Our goal is to bring back forgotten ingredients and
              recipes — making your kitchen a source of natural wellness and
              your plate a celebration of India’s rich food heritage.
            </p>
            <p>
              Whether you’re looking for a healthier lifestyle or trying to
              reduce your intake of processed foods, Nature Monk is here to
              support your journey — with products that are 100% natural,
              preservative-free, and filled with the richness of the Indian
              soil.
            </p>
            <p>Join us in rediscovering the power of real food.</p>
            <p>
              <b>Nature Monk – Where Tradition Meets purity.</b>
            </p>
          </div>
          <div className="col-md-6  col-12 px-0 px-md-2">
            <img
              src={
                slides?.find((v) => v?.category === "About Hero Image")?.image
              }
              className="img-fluid w-100"
            />
          </div>
        </div>
        <div className="row">
          {infoArr?.map((v, i) => {
            return (
              <div className="col-md-3  col-12 px-0 px-md-2 " key={i}>
                <div className="aboutMissionCard border p-md-4 p-2  shadow mb-2 h-100">
                  <img src={v?.img} className="img-fluid" />
                  <h3>{v?.title}</h3>
                  {v.subtitle.map((text, i) => (
                    <p className="mb-1" key={i}>
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="row my-5">
          <h3 className="mb-3 pb-2" style={{borderBottom:"2px solid red" , maxWidth:"150px"}}>About Us</h3>
          <p>Shriram Enterprises, under our trusted brand Hyzenith, is a premier manufacturer and wholesale supplier of cleaning and hygiene solutions—ranging from Household Cleaners, Auto Care, Laundry Care, Air Fresheners, to Industrial Chemicals. Based in Belagavi, Karnataka, Bharat, we have been delivering excellence since 2018. We are proudly ISO 9001:2015 certified, hold the IndiaMART Trust Seal, are a verified GeM seller, and are MSME registered.
          </p>
        </div> */}

        <div className="container py-5">
          <h2 className="text-center mb-4">
            {" "}
            Certifications That Define Our Standard
          </h2>
          <div className="row g-4">
            {certifications.map((cert, idx) => (
              <div className="col-md-6" key={idx}>
                <div
                  className="p-sm-5 p-2 shadow-sm border-0 h-100"
                  style={{ backgroundColor: "#fffafa", borderRadius: "7px" }}
                >
                  <div className="pb-md-5 pb-1">
                    <h5 className=" fw-bold">{cert.title}</h5>
                    <p className=" text-muted">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="container py-5">
          <h2 className="text-center mb-5"> Quality, Innovation & Capacity</h2>

          <h5 className="text-danger">Advanced Manufacturing Facility</h5>
          <p>
            Located in Belagavi, our facility supports end-to-end
            production—from R&D and formulation to blending, filling, and strict
            quality testing.
          </p>

          <div className="row g-4">
            <h5 className="text-danger">Comprehensive Product Portfolio</h5>
            <div
              className="border p-3 shadow-sm mt-2"
              style={{ borderRadius: "8px" }}
            >
              <p className="mb-0">
                <span className="fw-bold text-dark">Household Cleaners:</span>{" "}
                All‑purpose, kitchen, bathroom, and glass cleaners.
              </p>
            </div>
            <div
              className="border p-3 shadow-sm mt-2"
              style={{ borderRadius: "8px" }}
            >
              <p className="mb-0">
                <span className="fw-bold text-dark">Auto Care:</span> Car
                shampoo, tire care, interior cleaning products.
              </p>
            </div>
            <div
              className="border p-3 shadow-sm mt-2"
              style={{ borderRadius: "8px" }}
            >
              <p className="mb-0">
                <span className="fw-bold text-dark">Laundry Care:</span>{" "}
                Detergents, fabric softeners, stain removers.
              </p>
            </div>
            <div
              className="border p-3 shadow-sm mt-2"
              style={{ borderRadius: "8px" }}
            >
              <p className="mb-0">
                <span className="fw-bold text-dark">Air Fresheners:</span>{" "}
                Sprays, gels, and diffusers.
              </p>
            </div>
            <div
              className="border p-3 shadow-sm mt-2"
              style={{ borderRadius: "8px" }}
            >
              <p className="mb-0">
                <span className="fw-bold text-dark">Industrial Chemicals:</span>{" "}
                Degreasers, disinfectants, and specialty formulations.
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="row my-5 ">
          <div className="col-md-6 col-12 p-2">
            <div
              className="p-3 h-100 py-5 "
              style={{ borderRadius: "8px", backgroundColor: "#f9e4e6" }}
            >
              <h5 className="fw-bold mb-3">
                Wholesale Excellence & Custom Solutions
              </h5>
              <p className="" style={{ color: "#484646" }}>
                Flexible Packaging: Options from 250 ml bottles to 200 kg drums
              </p>
              <p className="" style={{ color: "#484646" }}>
                Pan‑India Reach: Reliable logistics ensure on-time delivery
                across Bharat
              </p>
              <p className="" style={{ color: "#484646" }}>
                Custom Formulations: Designed to meet the needs of institutions,
                commercial operations, and industrial clients.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-12 p-2">
            <div
              className="p-3 h-100 py-5 "
              style={{ borderRadius: "8px", backgroundColor: "#f9e4e6" }}
            >
              <h5 className="fw-bold mb-3">
                Sustainability & Community Commitment
              </h5>
              <p className="" style={{ color: "#484646" }}>
                We prioritize biodegradable formulations and eco-friendly
                packaging.
              </p>
              <p className="" style={{ color: "#484646" }}>
                Rooted in Belagavi, we support local employment, vocational
                training, and collaboration with green vendors.
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="container py-5">
          <h2 className="text-center mb-5">Our Clients</h2>

          <h5 className="text-danger mb-4">We proudly cater to:</h5>

          <div className="row g-4">
            <div
              className="border p-3 shadow-sm mt-2"
              style={{ borderRadius: "8px" }}
            >
              <p className="mb-0">
                <span className="fw-bold text-dark">
                  Distributors & retail chains
                </span>
              </p>
            </div>
            <div
              className="border p-3 shadow-sm mt-2"
              style={{ borderRadius: "8px" }}
            >
              <p className="mb-0">
                <span className="fw-bold text-dark">
                  Hotels, restaurants, hostels
                </span>
              </p>
            </div>
            <div
              className="border p-3 shadow-sm mt-2"
              style={{ borderRadius: "8px" }}
            >
              <p className="mb-0">
                <span className="fw-bold text-dark">
                  Schools, hospitals, and office complexes
                </span>
              </p>
            </div>
            <div
              className="border p-3 shadow-sm mt-2"
              style={{ borderRadius: "8px" }}
            >
              <p className="mb-0">
                <span className="fw-bold text-dark">
                  AIndustrial cleaning and janitorial services
                </span>
              </p>
            </div>
            <div
              className="border p-3 shadow-sm mt-2"
              style={{ borderRadius: "8px" }}
            >
              <p className="mb-0">
                <span className="fw-bold text-dark">
                  Partners trust us for certified quality, regulatory
                  compliance, reliable supply, and custom-tailored solutions.
                </span>
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="container py-5">
      <h2 className="text-center mb-4">Let’s Work Together</h2>
      <div className="row g-4 justify-content-center">
        
        <div className="col-md-8  col-12 d-flex flex-column align-items-center">
        <p className="mb-4">Looking for certified, high-quality hygiene products from a dependable supplier? Reach out to Shriram Enterprises (Hyzenith) for wholesale inquiries, sample requests, custom formulations, or collaborative opportunities.
</p>

 <button className="btn btn-danger"
  style={{width:"200px"}}>
    <a href="/contact" className=" border-0 text-white" style={{textDecoration:"none"}}>Contact us</a></button>
        </div>

       
     
      </div>
    </div> */}

        <div className="my-5">
          <h4 className="text-center mb-4 text-secondary">
            <u>Our Gallery</u>
          </h4>
          <div className="row">
            {slides
              ?.filter((v, i) => {
                return v?.category == "Gallery";
              })
              .map((v, i) => {
                return (
                  <div className="col-md-4 col-12 mb-md-4 mb-2 px-0 px-md-2">
                    <img className="img-fluid" src={v?.image} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <FooterNav selectedItem="Menu" />
      <Footer />
    </>
  );
};

export default page;

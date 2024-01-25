import React from "react";
import { aboutUsSection, services } from "./services";
import ServiceCard from "./ServiceCard";
import FooterPage from "./FooterPage";

export default function HomePage() {
  return (
    <div>
      <div className="mb-5">
        <div className="d-none d-lg-block">
          <div className="homePageBannerDesktop d-flex justify-content-center align-items-center">
            <div className="text-center">
              <p
                style={{
                  color: "#f07810",
                  fontWeight: 1000,
                  fontSize: 50,
                  margin: 0,
                }}
              >
                KONAN
              </p>
              <p
                style={{
                  margin: 0,
                  color: "#fafafa",
                  fontWeight: 800,
                  fontSize: 30,
                }}
              >
                MULTI-CONCEPTS
              </p>
              <p style={{ color: "#fafafa", fontStyle: "italic" }}>
                Experts in all forms of generator repairs
              </p>
            </div>
          </div>
        </div>
        <div className="d-sm-block d-md-none">
          <div className="homePageBannerMobile d-flex align-items-center justify-content-center">
            <div className="text-center">
              <p
                style={{
                  color: "#f07810",
                  fontWeight: 1000,
                  fontSize: 50,
                  margin: 0,
                }}
              >
                KONAN
              </p>
              <p
                style={{
                  margin: 0,
                  color: "#fafafa",
                  fontWeight: 800,
                  fontSize: 30,
                }}
              >
                MULTI-CONCEPTS
              </p>
              <p style={{ color: "#fafafa", fontStyle: "italic" }}>
                Experts in all forms of generator repairs
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              <h3 style={{ fontWeight: 600 }}>About Us</h3>

              <p>{aboutUsSection.p1}</p>
              <p>{aboutUsSection.p2}</p>
            </div>
            <div className="col-lg-6">
              <img
                src="https://guide.directindustry.com/wp-content/uploads/SNAG-0070.png"
                alt="Generator Set"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="bg-dark mt-5 text-white">
          <div className="container">
            <div className="row pt-5 pb-5">
              {services.map((c, i) => (
                <ServiceCard data={c} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  );
}

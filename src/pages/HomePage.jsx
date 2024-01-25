import React from "react";
import { aboutUsSection, bottomText, services, whyChooseUs } from "./services";
import ServiceCard from "./ServiceCard";
import FooterPage from "./FooterPage";
import { Avatar, Typography } from "@mui/material";
import ChoiceCard from "./ChoiceCard";

export default function HomePage() {
  return (
    <div>
      <div className="mb-5">
        <div className="d-none d-md-block">
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
        <div className="bg-dark mt-5 mb-5 text-white">
          <div className="container">
            <div className="row pt-5 pb-5">
              {services.map((c, i) => (
                <ServiceCard data={c} key={i} />
              ))}
            </div>
            <div></div>
          </div>
        </div>
        <div className="container">
          <div className="d-none d-lg-block">
            <div className="row mb-4">
              <div className="col-lg-4">
                <Avatar
                  sx={{ height: 300, width: 300 }}
                  src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div>
                  <Typography
                    sx={{ color: "#8f8787" }}
                    variant="h3"
                    fontWeight={700}
                  >
                    Why choose us?
                  </Typography>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div className="d-sm-block d-lg-none text-center">
            <div className="d-flex justify-content-center mb-4">
              <Avatar
                sx={{ height: 150, width: 150 }}
                src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            <div>
              <div>
                <Typography
                  sx={{ color: "#8f8787" }}
                  variant="h5"
                  fontWeight={700}
                >
                  Why choose us?
                </Typography>
                <hr />
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              {whyChooseUs.map((c, i) => (
                <ChoiceCard choice={c} key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5" style={{ backgroundColor: "#22313f" }}>
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-lg-6 mb-4 d-flex align-items-center">
                <Typography color="#fff" fontWeight={100}>
                  {bottomText.p1}
                </Typography>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="d-none d-lg-block">
                  <Typography
                    style={{ color: "#f07810" }}
                    variant="h4"
                    fontWeight={700}
                  >
                    {bottomText.p2}
                  </Typography>
                </div>
                <div className="d-sm-block d-md-none">
                  <Typography
                    style={{ color: "#f07810" }}
                    variant="h6"
                    fontWeight={700}
                  >
                    {bottomText.p2}
                  </Typography>
                </div>
                <div className="d-none d-md-block d-lg-none">
                  <Typography
                    style={{ color: "#f07810" }}
                    variant="h5"
                    fontWeight={700}
                  >
                    {bottomText.p2}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  );
}

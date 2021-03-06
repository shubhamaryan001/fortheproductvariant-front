import React, { useState, useEffect } from "react";
import { Card, Icon } from "antd";
import "../index.css";

import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { read, listRelated } from "./apiCore";
import {
  FaPlay,
  FaCheckCircle,
  FaRegTimesCircle,
  FaTags
} from "react-icons/fa";
import TransitionGroup from "react-transition-group/TransitionGroup";
import Zoom from "react-reveal/Zoom";

import Slide from "react-reveal/Slide";
const HomeProduct = () => {
  const [basic, setBasic] = useState({});
  const [modern, setModern] = useState({});
  const [premium, setPremium] = useState({});

  const [error, setError] = useState(false);
  const basicId = "5de7b843438f401fbc563d3a";
  const modernId = "5debb2c7dfe05109846ed4ad";
  const premiumId = "5dcc1f0504510f454493aa72";

  const loadSingleBasic = basicId => {
    read(basicId).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setBasic(data);
        console.log(data);
      }
    });
  };

  const loadSingleModern = modernId => {
    read(modernId).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setModern(data);
        console.log(data);
      }
    });
  };

  const loadSinglePremium = premiumId => {
    read(premiumId).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setPremium(data);
        console.log(data);
      }
    });
  };

  useEffect(() => {
    loadSingleBasic(basicId);
    loadSingleModern(modernId);
    loadSinglePremium(premiumId);
  }, []);
  return (
    <>
      <div className="container-fluid section-2 pb-5">
        <h1 className="text-center gredent-text">BUY PACKAGE AS PER NEED</h1>

        <div>
          <div className="row">
            <div className="col-md-12">
              <div className=" card container card-section  p-0">
                <div className="card second-card">
                  <div className="ribbon-3 ribbon">
                    <h4 className="text-ribbon">Affordable</h4>
                  </div>
                  <h2
                    className="card-header card-headermain text-muted "
                    style={{ background: " #f1f1f1" }}
                  >
                    {basic.name}
                  </h2>
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="card card-three"
                        style={{ minWidth: "80%", minHeight: "100%" }}
                      >
                        <ReactPlayer
                          url="https://www.youtube.com/embed/bhpKw3umAxE"
                          className="react-player"
                          width="100%"
                          height="400px"
                          controls
                          playing
                          light="https://res.cloudinary.com/djnv06fje/image/upload/v1575724968/maxresdefault_1_vmd2ll.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="container-fluild  p-0 m-0">
                            <ul class="list-group text-left pt-5">
                              <li class="list-group-item list-details">
                                <FaCheckCircle
                                  style={{
                                    color: "#52c41a",
                                    fontSize: "20px",
                                    marginBottom: "-5px",
                                    marginRight: "5px"
                                  }}
                                />
                                Customized Floorplan
                              </li>
                              <li class="list-group-item list-details">
                                <FaCheckCircle
                                  style={{
                                    color: "#52c41a",
                                    fontSize: "20px",
                                    marginBottom: "-5px",
                                    marginRight: "5px"
                                  }}
                                />
                                Door-Windows Designs
                              </li>
                              <li class="list-group-item list-details">
                                <FaCheckCircle
                                  style={{
                                    color: "#52c41a",
                                    fontSize: "20px",
                                    marginBottom: "-5px",
                                    marginRight: "5px"
                                  }}
                                />
                                Other Site Work Drawings
                              </li>
                              <li class="list-group-item list-details">
                                <FaRegTimesCircle
                                  style={{
                                    color: "red ",
                                    fontSize: "20px",
                                    marginBottom: "-2px",
                                    marginRight: "5px"
                                  }}
                                />
                                3D-Front Elevation
                              </li>
                              <li class="list-group-item list-details">
                                <FaRegTimesCircle
                                  style={{
                                    color: "red ",
                                    fontSize: "20px",
                                    marginBottom: "-2px",
                                    marginRight: "5px"
                                  }}
                                />
                                Elevation Video Walkthru
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="container p-2">
                            <TransitionGroup>
                              {basic.variants &&
                                basic.variants.length > 0 &&
                                basic.variants.map((item, index) => (
                                  <Zoom key={item.id}>
                                    <div
                                      className="btn "
                                      style={{
                                        minWidth: "100%",
                                        textTransform: "none"
                                      }}
                                    >
                                      <FaTags
                                        style={{
                                          color: "red ",
                                          fontSize: "20px",
                                          marginBottom: "-2px",
                                          marginRight: "5px"
                                        }}
                                      />
                                      AREA UPTO {item.area} Sq.Ft. - Rs.
                                      {item.price}
                                    </div>
                                  </Zoom>
                                ))}
                            </TransitionGroup>
                            <div className="mt-2">
                              <Link
                                className="btn btn-custom-1"
                                to={`/product/${basicId}`}
                              >
                                <span>More Details</span>{" "}
                                <Icon
                                  className="button-icon"
                                  type="arrow-right"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------SECOND PRODUCT ---------------------*/}

        <div>
          <div className="row mt-5">
            <div className="col-md-12">
              <div className=" card container card-section  p-0">
                <div className="card second-card">
                  <div className="ribbon-3 ribbon">
                    <h4 className="text-ribbon">Value For Money</h4>
                  </div>
                  <h2
                    className="card-header card-headermain text-muted "
                    style={{ background: " #f1f1f1" }}
                  >
                    {modern.name}
                  </h2>
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="card card-three"
                        style={{ minWidth: "80%", minHeight: "100%" }}
                      >
                        <ReactPlayer
                          url="https://www.youtube.com/watch?v=4B4PubjVquk"
                          className="react-player"
                          width="100%"
                          height="400px"
                          controls
                          playing
                          light="https://res.cloudinary.com/djnv06fje/image/upload/v1575728334/maxresdefault_2_clzgfr.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="container-fluild  p-0 m-0">
                            <ul class="list-group text-left pt-5">
                              <li class="list-group-item list-details">
                                <FaCheckCircle
                                  style={{
                                    color: "#52c41a",
                                    fontSize: "20px",
                                    marginBottom: "-5px",
                                    marginRight: "5px"
                                  }}
                                />
                                Customized Floorplan
                              </li>
                              <li class="list-group-item list-details">
                                <FaCheckCircle
                                  style={{
                                    color: "#52c41a",
                                    fontSize: "20px",
                                    marginBottom: "-5px",
                                    marginRight: "5px"
                                  }}
                                />
                                Door-Windows Designs
                              </li>
                              <li class="list-group-item list-details">
                                <FaCheckCircle
                                  style={{
                                    color: "#52c41a",
                                    fontSize: "20px",
                                    marginBottom: "-5px",
                                    marginRight: "5px"
                                  }}
                                />
                                Other Site Work Drawings
                              </li>
                              <li class="list-group-item list-details">
                                <FaCheckCircle
                                  style={{
                                    color: "#52c41a",
                                    fontSize: "20px",
                                    marginBottom: "-5px",
                                    marginRight: "5px"
                                  }}
                                />
                                3D-Front Elevation
                              </li>
                              <li class="list-group-item list-details">
                                <FaRegTimesCircle
                                  style={{
                                    color: "red ",
                                    fontSize: "20px",
                                    marginBottom: "-2px",
                                    marginRight: "5px"
                                  }}
                                />
                                Elevation Video Walkthru
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="container p-2">
                            <TransitionGroup>
                              {modern.variants &&
                                modern.variants.length > 0 &&
                                modern.variants.map((item, index) => (
                                  <Zoom key={item.id}>
                                    <div
                                      className="btn "
                                      style={{
                                        minWidth: "100%",
                                        textTransform: "none"
                                      }}
                                    >
                                      <FaTags
                                        style={{
                                          color: "red ",
                                          fontSize: "20px",
                                          marginBottom: "-2px",
                                          marginRight: "5px"
                                        }}
                                      />
                                      AREA UPTO {item.area} Sq.Ft. - Rs.
                                      {item.price}
                                    </div>
                                  </Zoom>
                                ))}
                            </TransitionGroup>
                            <div className="mt-2">
                              <Link
                                className="btn btn-custom-1"
                                to={`/product/${modernId}`}
                              >
                                <span>More Details</span>{" "}
                                <Icon
                                  className="button-icon"
                                  type="arrow-right"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------PREMIUM SECTION------------------------------ */}
        <div>
          <div className="row mt-5">
            <div className="col-md-12">
              <div className=" card container card-section  p-0">
                <div className="card second-card">
                  <div className="ribbon-3 ribbon">
                    <h4 className="text-ribbon">Best Seller</h4>
                  </div>
                  <h2
                    className="card-header card-headermain text-muted "
                    style={{ background: " #f1f1f1" }}
                  >
                    {premium.name}
                  </h2>
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="card card-three"
                        style={{ minWidth: "80%", minHeight: "100%" }}
                      >
                        <ReactPlayer
                          url="https://www.youtube.com/watch?v=c6pkHIrIgTI"
                          className="react-player"
                          width="100%"
                          height="400px"
                          controls
                          playing
                          light="https://res.cloudinary.com/djnv06fje/image/upload/v1575729784/maxresdefault_3_ouz9o1.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="container-fluild  p-0 m-0">
                            <ul class="list-group text-left pt-5">
                              <li class="list-group-item list-details">
                                <FaCheckCircle
                                  style={{
                                    color: "#52c41a",
                                    fontSize: "20px",
                                    marginBottom: "-5px",
                                    marginRight: "5px"
                                  }}
                                />
                                Customized Floorplan
                              </li>
                              <li class="list-group-item list-details">
                                <FaCheckCircle
                                  style={{
                                    color: "#52c41a",
                                    fontSize: "20px",
                                    marginBottom: "-5px",
                                    marginRight: "5px"
                                  }}
                                />
                                Door-Windows Designs
                              </li>
                              <li class="list-group-item list-details">
                                <FaCheckCircle
                                  style={{
                                    color: "#52c41a",
                                    fontSize: "20px",
                                    marginBottom: "-5px",
                                    marginRight: "5px"
                                  }}
                                />
                                Other Site Work Drawings
                              </li>
                              <li class="list-group-item list-details">
                                <FaCheckCircle
                                  style={{
                                    color: "#52c41a",
                                    fontSize: "20px",
                                    marginBottom: "-5px",
                                    marginRight: "5px"
                                  }}
                                />
                                3D-Front Elevation
                              </li>
                              <li class="list-group-item list-details">
                                <FaCheckCircle
                                  style={{
                                    color: "#52c41a",
                                    fontSize: "20px",
                                    marginBottom: "-5px",
                                    marginRight: "5px"
                                  }}
                                />
                                Elevation Video Walkthru
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="container p-2">
                            <TransitionGroup>
                              {premium.variants &&
                                premium.variants.length > 0 &&
                                premium.variants.map((item, index) => (
                                  <Zoom key={item.id}>
                                    <div
                                      className="btn "
                                      style={{
                                        minWidth: "100%",
                                        textTransform: "none"
                                      }}
                                    >
                                      <FaTags
                                        style={{
                                          color: "red ",
                                          fontSize: "20px",
                                          marginBottom: "-2px",
                                          marginRight: "5px"
                                        }}
                                      />
                                      AREA UPTO {item.area} Sq.Ft. - Rs.
                                      {item.price}
                                    </div>
                                  </Zoom>
                                ))}
                            </TransitionGroup>
                            <div className="mt-2">
                              <Link
                                className="btn btn-custom-1"
                                to={`/product/${premiumId}`}
                              >
                                <span>More Details</span>{" "}
                                <Icon
                                  className="button-icon"
                                  type="arrow-right"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeProduct;

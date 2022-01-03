import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Blogs.css"
import img1 from './../../../images/blog1.jpg';
import img2 from './../../../images/blog2.jpg';
import img3 from './../../../images/blog3.jpg';
import img4 from './../../../images/blog4.jpg';
import img5 from './../../../images/blog5.jpg';
import img6 from './../../../images/blog6.jpg';

const Blogs = () => {
    return (
      <div>
        <div className=" mt-5">
          <h3>NEWS</h3>
          <div className="d-flex justify-content-center ">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/home" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  News
                </li>
              </ol>
            </nav>
          </div>

          <br />
          <br />
          <div>
            <Row>
              <div className="col-md-3 ">
                <Card className='pb-5 mb-5'>
                  <h4 className="pt-3">RECENT ARTICLES</h4>
                  <hr className=" bg-info rounded"></hr>
                  <div className=" px-2">
                    <div>
                      <div className="d-flex d  align-items-center p-4">
                        <div>
                          <img height="80px" src={img1} alt="" />
                        </div>
                        <div className="ms-4">
                          <h6>
                            <Link style={{ textDecoration: "none" }} to="#">
                              <h6>Purchasing home application</h6>{" "}
                            </Link>
                          </h6>
                          <p>Dec 12, 2021</p>
                        </div>
                      </div>
                      <div className="d-flex  align-items-center p-4">
                        <div>
                          <img height="80px" src={img2} alt="" />
                        </div>
                        <div className="ms-5">
                          <Link style={{ textDecoration: "none" }} to="#">
                            <h6>Checking a brand</h6>
                          </Link>
                          <p>Nov 10, 2021</p>
                        </div>
                      </div>
                      <div className="d-flex  align-items-center p-4">
                        <div>
                          <img height="80px" src={img3} alt="" />
                        </div>
                        <div className="ms-4">
                          <Link style={{ textDecoration: "none" }} to="#">
                            <h6>Collections of sandals</h6>
                          </Link>
                          <p>Dec 12, 2021</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className='mt-5 pt-5'>
                  <h4 className="pt-3">CATEGORIES</h4>
                  <hr className=" bg-info rounded"></hr>
                  <div className="text-start ps-5">
                    <p>
                      <Link style={{ textDecoration: "none" }} to="#">
                        Electronics
                      </Link>
                    </p>
                    <p>
                      <Link style={{ textDecoration: "none" }} to="#">
                        Television
                      </Link>
                    </p>
                    <p>
                      <Link style={{ textDecoration: "none" }} to="#">
                        Headphone
                      </Link>
                    </p>
                    <p>
                      <Link style={{ textDecoration: "none" }} to="#">
                        Camera
                      </Link>
                    </p>
                    <p>
                      <Link style={{ textDecoration: "none" }} to="#">
                        Laptop
                      </Link>
                    </p>
                    <p>
                      <Link style={{ textDecoration: "none" }} to="#">
                        Mobile
                      </Link>
                    </p>
                    <p>
                      <Link style={{ textDecoration: "none" }} to="#">
                        Shop
                      </Link>
                    </p>
                    <p>
                      <Link style={{ textDecoration: "none" }} to="#">
                        Sunglass
                      </Link>
                    </p>
                  </div>
                </Card>
              </div>
              <div className="col-md-8">
                <Row xs={1} md={2} lg={2} className="g-4">
                  <Col>
                    <Card style={{ borderRadius: "none" }}>
                      <Card.Body>
                        <Card.Title>
                          <p>Checking a brand</p>
                          <h6>Dec 12, 2020</h6>
                          <h6>0 Comments</h6>
                          <p>Accessories , Electronics</p>
                        </Card.Title>
                        <Card.Img variant="top" src={img2} />
                        <Card.Text>
                          It has become the industry standard for design mockups
                          and prototypes. By adding a little bit of Latin to a
                          mockup, you are able to show clients a more complete
                          version of your design witho...
                        </Card.Text>
                        <Button className="btn btn-dark">Read more...</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ borderRadius: "none" }}>
                      <Card.Body>
                        <Card.Title>
                          <p>Technical laptop</p>
                          <h6>Dec 12, 2020</h6>
                          <h6>0 Comments</h6>
                          <p>Clothes , Shop</p>
                        </Card.Title>
                        <Card.Img variant="top" src={img6} />
                        <Card.Text>
                          It has become the industry standard for design mockups
                          and prototypes. By adding a little bit of Latin to a
                          mockup, you are able to show clients a more complete
                          version of your design witho...
                        </Card.Text>
                        <Button className="btn btn-dark">Read more...</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row xs={1} md={2} lg={2} className="g-4">
                  <Col>
                    <Card style={{ borderRadius: "none" }}>
                      <Card.Body>
                        <Card.Title>
                          <p>Comparing bewteen products</p>
                          <h6>Dec 12, 2020</h6>
                          <h6>0 Comments</h6>
                          <p>Accessories , Electronics</p>
                        </Card.Title>
                        <Card.Img variant="top" src={img4} />
                        <Card.Text>
                          It has become the industry standard for design mockups
                          and prototypes. By adding a little bit of Latin to a
                          mockup, you are able to show clients a more complete
                          version of your design witho...
                        </Card.Text>
                        <Button className="btn btn-dark">Read more...</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ borderRadius: "none" }}>
                      <Card.Body>
                        <Card.Title>
                          <p>Let shop more...!</p>
                          <h6>Dec 12, 2020</h6>
                          <h6>0 Comments</h6>
                          <p>Clothes , Shop</p>
                        </Card.Title>
                        <Card.Img variant="top" src={img5} />
                        <Card.Text>
                          It has become the industry standard for design mockups
                          and prototypes. By adding a little bit of Latin to a
                          mockup, you are able to show clients a more complete
                          version of your design witho...
                        </Card.Text>
                        <Button className="btn btn-dark">Read more...</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Row>
          </div>
          <div className="d-flex justify-content-center m-5">
            <div>
              <nav aria-label="...">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <span className="page-link">2</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blogs;
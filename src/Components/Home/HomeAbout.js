import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import StarIcon from '@mui/icons-material/Star';
const HomeAbout = () => {
  return (
    <div className="ts-home-about">
      <Container>
        <Row>
          <Col xl={6} lg={6} md={6} sm={12}>
            <div className="about-content">
              <small class="sub-title">Welcome to Task Source </small>
              <h1 class="item-title">
                <span>
                  Focus on your core areas of business by outsourcing us your
                  non-core ones.
                </span>
              </h1>
              <p>
                We have proven plans and expert strategies for digital
                marketing, web designing and back office.
              </p>
              <div class="ts-fancy-box">
                <div class="item-icon">
                <HistoryEduIcon fontSize="small" />
                </div>
                <div class="item-holder">
                  <h3 class="item-title">Innovative strategies </h3>
                  <p class="item-description">
                    Task source create different outsourcing solutions for
                    different clients as per the requirement and business type.
                    Objective of every strategy is to grow your business online
                    and offline.
                  </p>
                </div>
              </div>
              <br />
              <div class="ts-fancy-box">
                <div class="item-icon">
                <StarIcon fontSize="small" />
                </div>
                <div class="item-holder">
                  <h3 class="item-title">Confidentiality</h3>
                  <p class="item-description">We maintain complete security and confidentiality of your business information. Our dedicated outsourcing services are completely error free and innovative.                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6} md={6} sm={12}>
            <div className="about-content">
              <Image
                src="https://tasksource.net/wp-content/uploads/2020/07/home-about1.png"
                className="about-image img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeAbout;

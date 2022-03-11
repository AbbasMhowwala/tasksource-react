import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import GroupIcon from "@mui/icons-material/Group";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import StarRateIcon from "@mui/icons-material/StarRate";
const Count = () => {
  return (
    <div className="ts-count-section">
      <Container>
        <Row className="counter-image align-items-center">
          <Col xl={3} lg={3} md={3}>
            <div className="counter-box">
              <GroupIcon fontSize="small" />
              <CountUp start={0} end={50} delay={0} className="count">
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} className="count" />
                  </div>
                )}
              </CountUp>
              <span className="count-des">Team members</span>
            </div>
          </Col>
          <Col xl={3} lg={3} md={3}>
            <div className="counter-box">
              <EmojiEventsIcon fontSize="small" />
              <CountUp start={0} end={18} delay={0} className="count">
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} className="count" />
                  </div>
                )}
              </CountUp>
              <span className="count-des">Winning Awards</span>
            </div>
          </Col>
          <Col xl={3} lg={3} md={3}>
            <div className="counter-box">
              <BusinessCenterIcon fontSize="small" />
              <CountUp start={0} end={45} delay={0} className="count">
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} className="count" />
                  </div>
                )}
              </CountUp>
              <span  className="count-des">Completed Projects</span>
            </div>
          </Col>
          <Col xl={3} lg={3} md={3}>
            <div className="counter-box">
              <StarRateIcon fontSize="small" />
              <CountUp start={0} end={42} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} className="count" />
                  </div>
                )}
              </CountUp>
              <span className="count-des">Client's Satisfied</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Count;

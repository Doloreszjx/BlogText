import React, { Component } from "react";
import { Row, Col } from "antd";

export default function list() {
  return (
    <Row className="home-main" type="flex" justify="center">
      <Col className="home-left" xs={24} sm={24} md={16} lg={18} xl={14}>
        left
      </Col>
      <Col className="home-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        right
      </Col>
    </Row>
  );
}

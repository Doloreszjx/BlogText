import React from "react";

import "../static/style/components/Header.css";
import { Row, Col, Menu } from "antd";

const Header = (props) => {
  const { logo, text, menu } = props;

  return (
    <div className="header-wrapper">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">{logo}</span>
          <span className="header-txt">{text}</span>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal">
            {menu.map((item) => {
              return (
                <Menu.Item key={item.key} className="header-menuItem">
                  {item.desc}
                </Menu.Item>
              );
            })}
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;

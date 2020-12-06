import React, { Component } from "react";
import { SmileOutlined } from "@ant-design/icons";

import "../static/style/components/Author.css";

export default function Author() {
  return (
    <>
      <div className="author-info home-box">
        <SmileOutlined className="author-icon" />
        <p className="author-id">叶桉</p>
        <p className="author-desc">好好学习，天天向上</p>
      </div>
    </>
  );
}

import React from "react";
import logo from "./logo.png";
import topImageBar from "./topImageBar.png";
import { SearchOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import { StyledImage, StyledInput, StyledButton } from "./elements";
import { Image, Divider } from "antd";

const Menu = ({ search, setSearch, isFilled, setIsFilled }) => {
  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100% - 4.1rem)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={topImageBar}
          preview={false}
          style={{ width: "100%", borderRadius: "20px" }}
        />
        <StyledImage src={logo} preview={false} />
      </div>
      <Divider></Divider>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <StyledInput
          value={search}
          placeholder="Search course"
          prefix={<SearchOutlined />}
          size="large"
          onChange={(e) => setSearch(e.target.value)}
        />
        <StyledButton type="primary" size="large" onClick={handleClick}>
          {isFilled ? (
            <HeartFilled style={{ color: "red" }} />
          ) : (
            <HeartOutlined />
          )}
          Favorites
        </StyledButton>
      </div>
    </div>
  );
};

export default Menu;

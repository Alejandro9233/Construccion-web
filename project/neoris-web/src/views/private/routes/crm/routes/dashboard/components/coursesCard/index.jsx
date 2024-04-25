
import React, { useEffect, useState } from "react";
import { Image, Row, Col, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

import { StyledDiv, StyledTitle, StyledText } from "./elements";
import CourseImg from "./course_img.png";

const CourseCard = ({ course }) => (
  <StyledDiv style={{ marginTop: "20px", padding: "10px 10px" }}>
    <Row
      gutter={16}
      style={{
        width: "100%",
      }}
    >
      <Col
        span={6}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={course.image}
          preview={false}
          width={70}
          style={{ borderRadius: "10px" }}
          alt=""
        />
      </Col>
      <Col
        span={16}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <div>
          <StyledTitle
            style={{
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            {course.title}
          </StyledTitle>
          <div style={{ marginTop: "-10px" }}>
            <StyledText>{course.subtitle}</StyledText>
            <Button style={{ border: "none", padding: 0, marginLeft: "10px" }}>
              <StyledText
                style={{ color: "#90D7E7", textDecoration: "underline" }}
              >
                See course details
              </StyledText>
            </Button>
          </div>
        </div>
      </Col>
      <Col
        span={2}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          shape="circle"
          icon={<EditOutlined />}
          style={{ border: "none" }}
        />
      </Col>
    </Row>
  </StyledDiv>
);

const courses = [
  {
    image: CourseImg,
    title: "Technology behind the Blockchain",
    subtitle: "#Course 1",
  },

  {
    image: CourseImg,
    title: "Greatest way to a good Economy",
    subtitle: "#Course 2",
  },
  { image: CourseImg, title: "The Art of the Deal", subtitle: "#Course 3" },
];

const CoursesCard = () => {
  const text =
    "Here you can find more details about your courses. Keep yourself engaged by providing meaningful information.";

  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/listado-cursos-web")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setCourses(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  
  return (
    <StyledDiv>
      <StyledTitle>All Courses</StyledTitle>
      <div style={{ marginTop: "20px" }} />
      <StyledText>{text}</StyledText>
      <div
        style={{
          marginTop: "10px",
          maxHeight: "calc(3 * 100px)",
          overflowY: "auto",
          backgroundColor: "white",
          width: "100%",
        }}
      >
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </StyledDiv>
  );
};

export default CoursesCard;

import React, { useEffect, useState } from "react";
import { Image, Row, Col, Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { StyledDiv, StyledTitle, StyledText } from "./elements";

const CourseCard = ({ course }) => {
  console.log(course);
  const handleButtonClick = () => {
    window.open(course.link_al_curso, "_blank");
  };

  return (
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
            src={course.imagen}
            preview={false}
            width={70}
            height={40}
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
              {course.nombre_curso}
            </StyledTitle>
            <div style={{ marginTop: "-10px" }}>
              <StyledText>{course.path_de_curso}</StyledText>
              <Button
                style={{ border: "none", padding: 0, marginLeft: "10px" }}
                onClick={handleButtonClick}
              >
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
            icon={<HeartOutlined />}
            style={{ border: "none" }}
          />
        </Col>
      </Row>
    </StyledDiv>
  );
};

const CoursesCard = ({ user }) => {
  const text =
    "Here you can find more details about your courses. Keep yourself engaged by providing meaningful information.";

  // Use state para guardar el listado de cursos y use effect para hacer fetch a la api y obtener los cursos
  // Contenidos de courses: {nombre_curso, path_de_curso, imagen}
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://localhost:5000/listado-cursos-web-card`)
        .then((res) => res.json())
        .then((data) => {
          setCourses(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, [user]);

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

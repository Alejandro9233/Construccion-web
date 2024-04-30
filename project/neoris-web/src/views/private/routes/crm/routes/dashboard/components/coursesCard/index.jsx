import React, { useEffect, useState } from "react";
import { Image, Row, Col, Button, message } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { StyledDiv, StyledTitle, StyledText } from "./elements";

const CourseCard = ({ course, userId }) => {
  const [isFilled, setIsFilled] = useState(course?.favorite);
  const handleButtonClick = () => {
    window.open(course.link_al_curso, "_blank");
  };

  const handleClick = async () => {
    try {
      const newIsFilled = !isFilled;
      setIsFilled(newIsFilled);
      const response = await fetch(
        `http://localhost:5000/actualizar-favorito/${userId}/${
          course?.id_curso
        }/${newIsFilled ? 1 : 0}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Error al actualizar favorito");
      }
    } catch (err) {
      message.error("Ha ocurrido un error al actualizar favorito");
    }
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
            onClick={handleClick}
            style={{
              border: "none",
              outline: "none",
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            {" "}
            {isFilled ? (
              <HeartFilled style={{ color: "red" }} />
            ) : (
              <HeartOutlined />
            )}
          </Button>
        </Col>
      </Row>
    </StyledDiv>
  );
};

const CoursesCard = ({ user }) => {
  const text =
    "Here you can find more details about your courses. Keep yourself engaged by providing meaningful information.";

  // Use state para guardar el listado de cursos y use effect para hacer fetch a la api y obtener los cursos
  // Contenidos de courses: {nombre_curso, path_de_curso, imagen, link_al_curso}
  const [courses, setCourses] = useState([]);
  const favoriteCourses = user?.cursos_favoritos || [];

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `http://localhost:5000/listado-cursos-web-card/${user?.id_usuario}`
      )
        .then((res) => res.json())
        .then((data) => {
          const updatedCourses = data.map((course) => ({
            ...course,
            favorite: favoriteCourses.includes(course.id_curso),
          }));
          setCourses(updatedCourses);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, [user]);

  return (
    <StyledDiv>
      <StyledTitle>Your Courses</StyledTitle>
      <div style={{ marginTop: "20px" }} />
      <StyledText>{text}</StyledText>
      <div
        style={{
          maxHeight: "calc(3 * 100px)",
          overflowY: "auto",
          backgroundColor: "white",
          width: "100%",
          padding: "10px",
        }}
      >
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} userId={user?.id_usuario} />
        ))}
      </div>
    </StyledDiv>
  );
};

export default CoursesCard;

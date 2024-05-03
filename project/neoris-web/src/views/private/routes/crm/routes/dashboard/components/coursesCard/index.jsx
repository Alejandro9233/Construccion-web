import React, { useEffect, useState } from "react";
import { Image, Row, Col, Button, message } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { StyledDiv, StyledTitle, StyledText } from "./elements";
import { useQuery } from "react-query";
import { getBackendUrl } from "../../../../../../../../utils/config";

const CourseCard = ({ course, userId, refreshFavList }) => {
  const [isFilled, setIsFilled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    window.open(course.link_al_curso, "_blank");
  };

  useEffect(() => {
    setIsFilled(course?.favorite);
  }, [course]);

  const handleClick = async () => {
    setLoading(true);
    try {
      const newIsFilled = !isFilled;
      const response = await fetch(
        `${getBackendUrl()}/actualizar-favorito/${userId}/${course?.id_curso}/${
          newIsFilled ? 1 : 0
        }`,
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
      setIsFilled(newIsFilled);
      await refreshFavList();
    } catch (err) {
      message.error("Ha ocurrido un error al actualizar favorito");
    } finally {
      setLoading(false);
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
            src={course?.imagen}
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
            disabled={loading}
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
  const [favoritesList, setFavoritesList] = useState("");

  const fetchUser = async () => {
    const response = await fetch(
      `${getBackendUrl()}/favorite-courses/${user?.id_usuario}`
    );
    if (!response.ok) {
      throw new Error("Error al buscar el usuario");
    }
    return response.json();
  };

  const { data: userFavList, refetch: refreshFavList } = useQuery(
    "user",
    fetchUser
  );

  useEffect(() => {
    if (userFavList) {
      setFavoritesList(userFavList[0]?.cursos_favoritos);
    }
  }, [userFavList]);

  const fetchCourses = async () => {
    const response = await fetch(
      `${getBackendUrl()}/listado-cursos-web-card/${user?.id_usuario}`
    );
    if (!response.ok) {
      throw new Error("Error al obtener cursos");
    }
    return response.json();
  };

  const { data: coursesData } = useQuery("courses", fetchCourses);

  useEffect(() => {
    if (coursesData) {
      const updatedCourses = coursesData.map((course) => ({
        ...course,
        favorite: favoritesList.includes(course?.id_curso),
      }));
      setCourses(updatedCourses);
    }
  }, [coursesData, favoritesList]);

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
          <CourseCard
            key={index}
            course={course}
            userId={user?.id_usuario}
            refreshFavList={refreshFavList}
          />
        ))}
      </div>
    </StyledDiv>
  );
};

export default CoursesCard;

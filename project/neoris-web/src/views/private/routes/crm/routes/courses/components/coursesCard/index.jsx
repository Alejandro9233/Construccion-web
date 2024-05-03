import React, { useEffect } from "react";
import { useState } from "react";
import { Image, Button, Modal, Input, message } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { StyledDiv, StyledText } from "./elements";
import { useQuery } from "react-query";
import { getBackendUrl } from "../../../../../../../../utils/config";

const ChangeProgressModal = ({
  visible,
  setVisible,
  course,
  userId,
  refetch,
}) => {
  const [progress, setProgress] = useState(course.porcentaje_progreso);
  const [courseTitle] = useState(course.nombre_curso);
  const [loading, setLoading] = useState(false);
  const handleOk = async () => {
    setLoading(true);

    let route;
    let requestMethod;

    if (course?.porcentaje_progreso) {
      route = "actualizar-progreso-curso";
      requestMethod = "PUT";
    } else {
      route = "crear-progreso-curso";
      requestMethod = "POST";
    }

    try {
      const response = await fetch(
        `${getBackendUrl()}/${route}/${userId}/${course?.id_curso}/${progress}`,
        {
          method: requestMethod,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(
          "Ha ocurrido un error al actualizar el progreso del curso"
        );
      }
      await refetch();
      message.success("Progreso actualizado correctamente");
      setVisible(false);
    } catch (err) {
      message.error("Ha ocurrido un error al actualizar el progreso del curso");
    } finally {
      setLoading(false);
    }
  };
  const handleCancel = () => {
    setVisible(false);
    setProgress(course.porcentaje_progreso);
  };

  return (
    <Modal
      title={
        <span>
          Change progress for{" "}
          <span style={{ color: "#108ee9" }}>{courseTitle}</span>
        </span>
      }
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button
          key="submit"
          type="primary"
          onClick={handleOk}
          loading={loading}
        >
          Aceptar
        </Button>,
      ]}
    >
      <Input
        type="number"
        max={100}
        value={progress}
        onChange={(e) => setProgress(e.target.value)}
      />
    </Modal>
  );
};

const CourseCard = ({ course, user, refetch, refreshFavList }) => {
  const [isFilled, setIsFilled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsFilled(course?.favorite);
  }, [course]);

  const handleClick = async () => {
    setLoading(true);
    try {
      const newIsFilled = !isFilled;
      const response = await fetch(
        `${getBackendUrl()}/actualizar-favorito/${user?.id_usuario}/${
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
      setIsFilled(newIsFilled);
      await refreshFavList();
    } catch (err) {
      message.error("Ha ocurrido un error al actualizar favorito");
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    window.open(course.link_al_curso, "_blank");
  };

  const handleModalOpen = () => {
    setVisible(true);
  };

  return (
    <StyledDiv>
      <Image
        src={course?.imagen}
        preview={false}
        width={350}
        height={200}
        style={{ borderRadius: "20px" }}
        alt=""
      />
      <StyledText className="title">{course?.nombre_curso}</StyledText>
      <StyledText className="subtitle">
        Duration: {course?.duracion} hours
      </StyledText>
      <StyledText className="subtitle">
        Progress:{" "}
        {course?.porcentaje_progreso
          ? course?.porcentaje_progreso + "%"
          : "Course hasn't been started yet"}
      </StyledText>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "10px",
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
        <Button
          type="primary"
          style={{ background: "black", borderRadius: "10px" }}
          onClick={handleModalOpen}
        >
          <StyledText style={{ color: "white" }}>Change progress</StyledText>
        </Button>
        <Button
          type="primary"
          style={{ background: "black", borderRadius: "10px" }}
          onClick={handleButtonClick}
        >
          <StyledText style={{ color: "white" }}>See course details</StyledText>
        </Button>
      </div>
      <ChangeProgressModal
        visible={visible}
        setVisible={setVisible}
        course={course}
        userId={user.id_usuario}
        refetch={refetch}
      />
    </StyledDiv>
  );
};

const CoursesCard = ({ user, search, favorites }) => {
  // Fetch para conseguir los cursos inscritos por el usuario y los no inscritos por el usuario
  // Contenidos de cursos: path_de_curso, nombre_curso, imagen, link_al_curso, es_favorito, duracion, porcentaje_progreso

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
      `${getBackendUrl()}/cursos-inscritos-usuario/${user?.id_usuario}`
    );
    if (!response.ok) {
      throw new Error("Error al buscar los cursos");
    }
    return response.json();
  };

  const { data: courses, refetch } = useQuery("courses", fetchCourses);

  let groupedCourses = {};

  if (courses && userFavList) {
    let filteredCourses = courses.filter((course) =>
      course.nombre_curso.toLowerCase().includes(search.toLowerCase())
    );
    if (favorites) {
      filteredCourses = filteredCourses.filter((course) =>
        favoritesList.includes(course?.id_curso)
      );
    }
    groupedCourses = filteredCourses.reduce((acc, course) => {
      if (!acc[course.path_de_curso]) {
        acc[course.path_de_curso] = [];
      }
      acc[course.path_de_curso].push({
        ...course,
        favorite: favoritesList.includes(course?.id_curso),
      });
      return acc;
    }, {});
  }

  return (
    <div>
      {Object.entries(groupedCourses).map(([courseName, courseList]) => (
        <div key={courseName}>
          <StyledText className="title">Path: {courseName}</StyledText>
          <div style={{ display: "flex", overflowX: "auto" }}>
            {courseList.map((course, index) => (
              <CourseCard
                key={index}
                course={course}
                user={user}
                refetch={refetch}
                refreshFavList={refreshFavList}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesCard;

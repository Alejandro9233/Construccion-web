import React, { useEffect, useState } from "react";
import { StyledDiv, StyledTitle, StyledTable, StyledText } from "./elements";
import { Button } from "antd";
import { ArrowRightOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import AllCoursesDrawer from "./components/allCourses-Drawer";
import { getBackendUrl } from "../../../../../../../../../utils/config";

const CoursesTable = ({ user }) => {
  const [visible, setVisible] = useState(false);

  const columns = [
    {
      title: <StyledText>Course Name</StyledText>,
      align: "left",
      key: "curso",

      render: (row) => {
        return <StyledTitle>{row?.curso}</StyledTitle>;
      },
    },
    {
      title: <StyledText>Enrolled Users</StyledText>,
      align: "center",
      key: "enrolled users",

      render: (row) => <StyledTitle>{row?.usuarios_inscritos}</StyledTitle>,
    },
    {
      title: <StyledText>Average Progress</StyledText>,
      align: "center",
      key: "average progress",

      render: (row) => (
        <StyledTitle>{row?.porcentaje_progreso_promedio + "%"}</StyledTitle>
      ),
    },
    {
      title: <StyledText>Completed</StyledText>,
      align: "right",
      key: "completed",

      render: (row) => (
        <StyledTitle style={{ color: "#87d068" }}>
          {" "}
          <CheckCircleTwoTone twoToneColor="#87d068" />{" "}
          {row?.cursos_completados}
        </StyledTitle>
      ),
    },
  ];

  // Use state para guardar los cursos y use effect para fetchearlos
  // Datos de respuesta: curso, usuarios_inscritos, porcentaje_progreso_promedio, cursos_completados
  const [popularCourses, setPopularCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${getBackendUrl()}/cursos-populares`)
        .then((res) => res.json())
        .then((data) => {
          setPopularCourses(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [user]);

  return (
    <StyledDiv>
      <StyledTable
        locale="es"
        title={() => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <StyledTitle style={{ fontSize: "20px", marginBottom: "30px" }}>
              Most Visited Courses
            </StyledTitle>
          </div>
        )}
        style={{
          width: "100%",
        }}
        dataSource={popularCourses?.slice(0, 4)}
        columns={columns}
        rowKey="id"
        scroll="hidden"
        size="small"
        pagination={false}
        className="custom-table" // Añade una clase personalizada
      />
      <div
        style={{
          marginTop: "60px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <Button
          icon={<ArrowRightOutlined />}
          style={{ border: "none" }}
          onClick={() => setVisible(true)}
        >
          View All
        </Button>
      </div>
      <AllCoursesDrawer
        visible={visible}
        setVisible={setVisible}
        data={popularCourses}
      />
    </StyledDiv>
  );
};

export default CoursesTable;

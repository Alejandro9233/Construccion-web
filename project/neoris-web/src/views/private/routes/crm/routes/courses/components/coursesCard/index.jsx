import React, { useEffect } from 'react';
import { useState } from 'react';
import { Image, Button } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { StyledDiv, StyledText } from './elements';

const CourseCard = ({course, user}) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };
  
  const handleButtonClick = () => {
    window.open(course.link_al_curso, '_blank');
  };

  // Falta implementar la actualización del progreso del curso con algún input
  const updateProgress = async () => {
    if(course.porcentaje_progreso){
      console.log('Course progress updated');
      course.porcentaje_progreso = 1;
    }
    else if(!course.porcentaje_progreso){
      console.log('Course progress created');
      course.porcentaje_progreso = 1;
    }

  };

  return (

    <StyledDiv>
      <Image src={course.imagen} preview={false} width={350} height={200} style={{ borderRadius: "20px" }} alt="" />
      <StyledText className='title'>{course.nombre_curso}</StyledText>
      <StyledText className='subtitle'>Duration: {course.duracion} hours</StyledText>
      <StyledText className='subtitle'>Progress: {course?.porcentaje_progreso ? course.porcentaje_progreso + "%" : "Course hasn't been started yet"}</StyledText>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "10px",
      
      }}>
      <Button shape="circle"  onClick={handleClick} style={{
        border: "none",
        outline: "none",
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
      }}> {isFilled ? <HeartFilled /> : <HeartOutlined />}</Button>
      <Button type="primary" style={{background:'black', borderRadius:'10px'}} onClick={updateProgress}>
        <StyledText style={{ color:'white' }}>
          Change progress
        </StyledText>
      </Button>      
      <Button type="primary" style={{background:'black', borderRadius:'10px'}} onClick={handleButtonClick}>
        <StyledText style={{ color:'white' }}>
          See course details
        </StyledText>
      </Button>
      </div>
    </StyledDiv>
  
)}

const CoursesCard = ({user}) => {
  // Fetch para conseguir los cursos inscritos por el usuario y los no inscritos por el usuario
  // Contenidos de cursos: path_de_curso, nombre_curso, imagen, link_al_curso, es_favorito, duracion, porcentaje_progreso
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://localhost:5000/cursos-inscritos-usuario/${user?.id_usuario}`)
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

  const groupedCourses = courses.reduce((acc, course) => {
    if (!acc[course.path_de_curso]) {
      acc[course.path_de_curso] = [];
    }
    acc[course.path_de_curso].push(course);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groupedCourses).map(([courseName, courseList]) => (
        <div key={courseName}>
          <StyledText className='title'>Path: {courseName}</StyledText>
          <div style={{ display: 'flex', overflowX: 'auto' }}>
            {courseList.map((course, index) => (
              <CourseCard key={index} course={course} user={user}/>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CoursesCard
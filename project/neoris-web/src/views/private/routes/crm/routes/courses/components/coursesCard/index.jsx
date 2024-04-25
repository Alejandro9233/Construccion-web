import React from 'react';
import { useState } from 'react';
import { Image, Button } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import genAiCurso from './genAiCurso.jpg';
import { StyledDiv, StyledText } from './elements';


const CourseCard = ({course}) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };
  
  return (

    <StyledDiv>
      <Image src={course.image} preview={false} width={350} style={{ borderRadius: "20px" }} alt="" />
      <StyledText className='title'>{course.title}</StyledText>
      <StyledText className='duration'>Duration: {course.duration}</StyledText>
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
      <Button type="primary" style={{background:'black', borderRadius:'10px'}}>
        <StyledText style={{ color:'white' }}>
          See course details
        </StyledText>
      </Button>
      </div>
    </StyledDiv>
  
)}

const courses = [
  {
    id: 1,
    course: "Certificacion de Gen AI",
    image: genAiCurso,  
    title: "Chat GPT Prompt Engineering",
    duration: "1 minute",
    isFavorite: false,
  },

  {
    id: 2,
    course: "Certificacion de Gen AI",
    image: genAiCurso,
    title: "Github Copilot",
    duration: "1 day",
    isFavorite: false,
  },
  { 
    id: 3,
    course: "Certificacion de Gen AI",
    image: genAiCurso, 
    title: "Github Advanced Security", 
    duration: "100 years",
    isFavorite: false, 
  },
  { 
    id: 4,
    course: "Certificacion de Gen AI",
    image: genAiCurso, 
    title: "GenAI", 
    duration: "100 years",
    isFavorite: false, 
  },
  { 
    id: 5,
    course: "Certificacion de Gen AI",
    image: genAiCurso, 
    title: "GenAI Fundamentals", 
    duration: "100 years",
    isFavorite: false,
  },
  {
    id: 6,
    course: "Certificacion de Gen AI 2",
    image: genAiCurso,  
    title: "Chat GPT Prompt Engineering",
    duration: "1 minute",
    isFavorite: false,
  },

  {
    id: 7,
    course: "Certificacion de Gen AI 2",
    image: genAiCurso,
    title: "Github Copilot",
    duration: "1 day",
    isFavorite: false,
  },
  { 
    id: 8,
    course: "Certificacion de Gen AI 2",
    image: genAiCurso, 
    title: "Github Advanced Security", 
    duration: "100 years",
    isFavorite: false, 
  },
  { 
    id: 9,
    course: "Certificacion de Gen AI 2",
    image: genAiCurso, 
    title: "GenAI", 
    duration: "100 years",
    isFavorite: false, 
  },
];


const CoursesCard = () => {
  const groupedCourses = courses.reduce((acc, course) => {
    if (!acc[course.course]) {
      acc[course.course] = [];
    }
    acc[course.course].push(course);
    return acc;
  }, {});

  return (
     <div>
      {Object.entries(groupedCourses).map(([courseName, courseList]) => (
        <div key={courseName}>
          <StyledText className='title'>{courseName}</StyledText>
          <div style={{ display: 'flex', overflowX: 'auto' }}>
            {courseList.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CoursesCard
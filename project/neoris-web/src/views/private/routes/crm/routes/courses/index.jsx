import React from "react";
import CoursesCard from "./components/coursesCard";



const Courses = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyItems: 'center',
      alignContent: 'center',
     
    }}>
      <CoursesCard/>
    </div>
  );
};

export default Courses;

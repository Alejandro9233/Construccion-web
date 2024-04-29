import React from "react";
import Menu from "./components/menu";
import CoursesCard from "./components/coursesCard";



const Courses = ({user}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyItems: 'center',
      alignContent: 'center',
     
    }}>
      <Menu/>
      <CoursesCard user={user}/>
    </div>
  );
};

export default Courses;

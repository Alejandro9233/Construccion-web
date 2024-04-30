import React, { useState } from "react";
import Menu from "./components/menu";
import CoursesCard from "./components/coursesCard";

const Courses = ({ user }) => {
  const [search, setSearch] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignContent: "center",
      }}
    >
      <Menu sty search={search} setSearch={setSearch} />
      <CoursesCard user={user} search={search} />
    </div>
  );
};

export default Courses;

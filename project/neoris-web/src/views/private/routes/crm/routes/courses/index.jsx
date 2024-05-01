import React, { useState } from "react";
import Menu from "./components/menu";
import CoursesCard from "./components/coursesCard";

const Courses = ({ user }) => {
  const [search, setSearch] = useState("");
  const [isFilled, setIsFilled] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignContent: "center",
      }}
    >
      <Menu
        sty
        search={search}
        setSearch={setSearch}
        isFilled={isFilled}
        setIsFilled={setIsFilled}
      />
      <CoursesCard
        user={user}
        search={search}
        favorites={isFilled}
      />
    </div>
  );
};

export default Courses;

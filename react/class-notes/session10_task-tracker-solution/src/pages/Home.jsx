import React from "react";
import AddTaskForm from "../components/AddTaskForm";
import Header from "../components/Header";
import { useState } from "react";
import data from "../helper//starterData";

const Home = () => {
  const [tasks, setTasks] = useState();

  return (
    <div>
      <Header tasks={tasks} />
      <AddTaskForm />
    </div>
  );
};

export default Home;

import React from "react";
import Header from "../../components/task/header";

import styles from "./task.module.scss";
import TaskForm from "./TaskForm/TaskForm";
import TaskList from "./TaskList";
const Task = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default Task;

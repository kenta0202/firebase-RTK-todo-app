import React from "react";
import styles from "./TaskList.module.scss";
import TaskItem from "../TaskItem";
import { TTask } from "../../../features/task/taskSlice";
const TaskListComponent: React.FC<{ tasks: TTask[] }> = ({ tasks }) => {
  console.log(tasks, "TaskListComponent");
  return (
    <div className={styles.wrapper}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskListComponent;

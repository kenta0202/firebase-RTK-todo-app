import React from "react";
import { useSelector } from "react-redux";
import TaskListComponent from "../../components/task/TaskList";
import { selectTasks } from "../../features/task/taskSlice";

const TaskList: React.FC = () => {
  const tasks = useSelector(selectTasks);
  return <TaskListComponent tasks={tasks} />;
};

export default TaskList;

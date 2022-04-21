import React from "react";
import { useSelector } from "react-redux";
import TaskListComponent from "../../components/task/TaskList";
import { selectTask } from "../../features/task/taskSlice";

const TaskList: React.FC = () => {
  const tasks = useSelector(selectTask);
  return <TaskListComponent tasks={tasks} />;
};

export default TaskList;

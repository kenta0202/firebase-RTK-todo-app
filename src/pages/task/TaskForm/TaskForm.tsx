import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/hooks";
import TaskFormComponent from "../../../components/task/TaskForm";
import { createTask, selectTask } from "../../../features/task/taskSlice";
type Inputs = {
  taskTitle: string;
};

const TaskForm = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const handleCreate = (data: Inputs) => {
    console.log(data, "dataが作られた");
    // action.payload = data.taskTitle
    dispatch(createTask(data.taskTitle));
    reset();
  };

  return <TaskFormComponent {...{ handleCreate, handleSubmit, register }} />;
};

export default TaskForm;

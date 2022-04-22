import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import TaskFormComponent from "../../../components/task/TaskForm";
import {
  createTask,
  selectTasks,
  editTask,
  selectedSelectTask,
  handleModalOpen,
} from "../../../features/task/taskSlice";
type Inputs = {
  taskTitle: string;
};

type PropTypes = {
  edit?: boolean;
};
const TaskForm: React.FC<PropTypes> = ({ edit }) => {
  const dispatch = useAppDispatch();
  const selectedTask = useAppSelector(selectedSelectTask);
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const handleCreate = (data: Inputs) => {
    console.log(data, "dataが作られた");
    // action.payload = data.taskTitle
    dispatch(createTask(data.taskTitle));
    reset();
  };
  const handleEdit = (data: Inputs) => {
    const sendData = { ...selectedTask, title: data.taskTitle };
    console.log(sendData, "Edit");
    dispatch(editTask(sendData));
    dispatch(handleModalOpen(false));
  };
  return (
    <TaskFormComponent
      {...{ handleCreate, handleSubmit, register, handleEdit }}
      edit={edit}
    />
  );
};

export default TaskForm;

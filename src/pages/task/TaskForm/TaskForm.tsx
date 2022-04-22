import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import TaskFormComponent from "../../../components/task/TaskForm";
import {
  createTask,
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
  const { register, handleSubmit, reset } = useForm<Inputs>();

  // 状態
  const selectedTask = useAppSelector(selectedSelectTask);

  // イベント
  const handleCreate = (data: Inputs) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };
  const handleEdit = (data: Inputs) => {
    const sendData = { ...selectedTask, title: data.taskTitle };
    dispatch(editTask(sendData));
    dispatch(handleModalOpen(false));
  };
  return (
    <TaskFormComponent
      {...{ handleSubmit, register, handleCreate, handleEdit }}
      edit={edit}
    />
  );
};

export default TaskForm;

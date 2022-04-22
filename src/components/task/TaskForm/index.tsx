import React from "react";
import styles from "./TaskForm.module.scss";
import TextField from "@material-ui/core/TextField";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  handleModalOpen,
  selectedSelectTask,
} from "../../../features/task/taskSlice";

type Inputs = {
  taskTitle: string;
};

const TaskFormComponent: React.VFC<{
  handleSubmit: UseFormHandleSubmit<Inputs>;
  register: UseFormRegister<Inputs>;
  handleCreate: (data: Inputs) => void;
  handleEdit: (data: Inputs) => void;
  edit?: boolean;
}> = ({ handleCreate, handleEdit, handleSubmit, register, edit }) => {
  const dispatch = useAppDispatch();

  // 状態
  const selectedTask = useAppSelector(selectedSelectTask);

  return (
    <div className={styles.wrapper}>
      <form
        onSubmit={edit ? handleSubmit(handleEdit) : handleSubmit(handleCreate)}
        className={styles.form}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label={edit ? "Edit Task" : "New Task"}
          defaultValue={edit ? selectedTask.title : ""}
          variant="outlined"
          {...register("taskTitle", { required: true })}
          name="taskTitle"
          className={styles.text_field}
        />
        {edit ? (
          <>
            <div className={styles.button_wrapper}>
              <button type="submit" className={styles.submit_button}>
                Submit
              </button>
              <button
                type="button"
                onClick={() => dispatch(handleModalOpen(false))}
                className={styles.cancel_button}
              >
                Cancel
              </button>
            </div>
          </>
        ) : null}
      </form>
    </div>
  );
};

export default TaskFormComponent;

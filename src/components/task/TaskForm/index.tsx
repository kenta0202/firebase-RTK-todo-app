import React from "react";
import styles from "./TaskForm.module.scss";
import TextField from "@material-ui/core/TextField";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

type Inputs = {
  taskTitle: string;
};

const TaskFormComponent: React.VFC<{
  handleCreate: (data: Inputs) => void;
  handleSubmit: UseFormHandleSubmit<Inputs>;
  register: UseFormRegister<Inputs>;
}> = ({ handleCreate, handleSubmit, register }) => {
  return (
    <div className={styles.wrapper}>
      <form
        onSubmit={handleSubmit(handleCreate)}
        className={styles.form}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="New Task"
          variant="outlined"
          {...register("taskTitle", { required: true })}
          name="taskTitle"
          className={styles.text_field}
        />
      </form>
    </div>
  );
};

export default TaskFormComponent;

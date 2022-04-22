import React from "react";
import styles from "./TaskItem.module.scss";
import Checkbox from "@material-ui/core/Checkbox";
import EventNoteIcon from "@material-ui/icons/EventNote";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "@material-ui/core/Modal";
import TaskForm from "../../../pages/task/TaskForm/TaskForm";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  handleModalOpen,
  selectIsModalOpen,
  selectTask,
  completeTask,
  deleteTask,
} from "../../../features/task/taskSlice";
type TProps = {
  task: { id: number; title: string; completed: boolean };
};

const TaskItemComponent: React.FC<TProps> = ({ task }) => {
  const dispatch = useAppDispatch();
  // State
  const isModalOpen = useAppSelector(selectIsModalOpen);

  // イベント
  const handleOpen = () => {
    dispatch(selectTask(task));
    dispatch(handleModalOpen(true));
  };

  const handleClose = () => {
    dispatch(handleModalOpen(false));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <EventNoteIcon />
        <div className={styles.title_text}>{task.title}</div>
      </div>
      <div className={styles.right_menu}>
        <Checkbox
          checked={task.completed}
          onClick={() => dispatch(completeTask(task))}
          className={styles.checkbox}
        />
        <button onClick={handleOpen} className={styles.edit_button}>
          <EditIcon className={styles.icon} />
        </button>
        <button
          className={styles.delete_button_button}
          onClick={() => dispatch(deleteTask(task))}
        >
          <DeleteIcon className={styles.icon} />
        </button>
      </div>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={styles.modal}
      >
        <div className={styles.modal_content}>
          <div className={styles.modal_title}>Edit</div>
          <TaskForm edit />
        </div>
      </Modal>
    </div>
  );
};

export default TaskItemComponent;

import React from "react";
import styles from "./TaskItem.module.scss";
import Checkbox from "@material-ui/core/Checkbox";
import EventNoteIcon from "@material-ui/icons/EventNote";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

type TProps = {
  task: { id: number; title: string; completed: boolean };
};

const TaskItemComponent: React.FC<TProps> = ({ task }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <EventNoteIcon />
        <div className={styles.title_text}>{task.title}</div>
      </div>
      <div className={styles.right_menu}>
        <Checkbox
          checked={task.completed}
          onClick={() => console.log(`check ${task.id}`)}
          className={styles.checkbox}
        />
        <button
          onClick={() => console.log(`edit ${task.id}`)}
          className={styles.edit_button}
        >
          <EditIcon className={styles.icon} />
        </button>
        <button
          className={styles.delete_button_button}
          onClick={() => console.log(`delete ${task.id}`)}
        >
          <DeleteIcon className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default TaskItemComponent;

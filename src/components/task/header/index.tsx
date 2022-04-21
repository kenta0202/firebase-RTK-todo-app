import React from "react";
import Typography from "@material-ui/core/Typography";
import styles from "./header.modules.scss";

const HeaderComponent: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.app_bar} color={"inherit"}>
        <div className={styles.tool_bar}>
          <Typography variant="h6" className={styles.title}>
            Redux Toolkit Todo
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;

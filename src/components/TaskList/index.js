import React from "react";
import { Typography, Grid, withStyles } from "@material-ui/core";
import propTypes from "prop-types";
import styles from "./styles";
import TaskItem from "../TaskItem";

class TaskList extends React.Component {

  render() {
    const { classes, tasks, status, onClickEdit } = this.props;

    return (
      <Grid
        className={classes.gridBox}
        item
        md={4}
        sm={6}
        xs={12}
        key={status.value}
      >
        <div className={classes.status}>
          <Typography
            component="h3"
            variant="h5"
            className={classes.titleStatus}
          >
            {status.label}
          </Typography>
        </div>
        <div className={classes.wrapperListTask}>
          {tasks.map(task => (
            <TaskItem
              task={task}
              status={status}
              key={task.id}
              onClickEdit={() => onClickEdit(task)}
            />
          ))}
        </div>
      </Grid>
    );
  }
}

TaskList.propTypes = {
  classes: propTypes.object,
  tasks: propTypes.array,
  status: propTypes.any
};

export default withStyles(styles)(TaskList);

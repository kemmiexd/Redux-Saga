import React from 'react';
import {
  withStyles, Icon, Fab, Paper, Typography, Grid
} from '@material-ui/core';

import styles from './styles';


class TaskItem extends React.Component {
  render() {
    const { classes, task, status } = this.props;

    return (
      <Paper className={classes.card}>
        <Grid container justify="space-between">
          <Typography variant="h5" component="h4">
            { task.title }
          </Typography>
          <Typography variant="h5" component="h5">
            { status.label }
          </Typography>
        </Grid>
        <Typography component="p" className={classes.text}>
          { task.description }
        </Typography>
        <div style={{ textAlign: "right" }}>
          <Fab size="small" color="primary" aria-label="Edit" className={classes.fab}>
            <Icon fontSize="small">
              edit_icon
            </Icon>
          </Fab>
          <Fab size="small" color="secondary" aria-label="Delete" className={classes.fab}>
            <Icon fontSize="small">
              delete_icon
            </Icon>
          </Fab>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(TaskItem);

import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Button, Grid } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles';
import { STATUSES } from "../../constants";
import * as taskActions from '../../actions/task';

import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';

class TaskBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTaskRequest } = taskActionCreators;
    fetchListTaskRequest();
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  onOpenForm = () => {
    this.setState({ open: true });
  }

  renderBoard = () => {
    const { listTask } = this.props;
    let result = null;

    result = (
      <Grid
        container
        spacing={5}
      >
        {
          STATUSES.map((status) => {
            const taskFiltered = listTask.filter((task) => task.status === status.value);

            return (
              <TaskList
                tasks={taskFiltered}
                status={status}
                key={status.value}
              />
            );
          })
        }
      </Grid>
    );

    return result;
  }

  renderForm() {
    let result = null;
    const { open } = this.state;

    result = (
      <TaskForm
        open={open}
        handleClose={this.handleClose}
      />
    );

    return result;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.onOpenForm}
        >
          <Add className={classes.icon} />
          Add New Task
        </Button>
        { this.renderBoard() }
        { this.renderForm() }
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTaskRequest: PropTypes.func,
  }),
  listTask: PropTypes.array
};

const mapStateToProps = state => {
  return {
    listTask: state.task.listTask
  };
};

const mapDispatchToProps = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch)
  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));

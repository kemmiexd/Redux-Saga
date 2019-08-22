import React from "react";
import { withStyles } from "@material-ui/styles";
import { Button, Grid } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../../actions/task";
import * as modalActions from "../../actions/modal";
import styles from "./styles";
import { STATUSES } from "../../constants";

import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import SearchBox from '../../components/SearchBox';

class TaskBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }

  loadData = () => {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  onOpenForm = () => {
    const { modalActions } = this.props;
    const { showModal, changeModalContent, changeModalTitle } = modalActions;
    showModal();
    changeModalTitle('Add new now');
  };

  renderBoard = () => {
    const { listTask } = this.props;
    let result = null;

    result = (
      <Grid container spacing={5}>
        {STATUSES.map(status => {
          const taskFiltered = listTask.filter(
            task => task.status === status.value
          );

          return (
            <TaskList tasks={taskFiltered} status={status} key={status.value} />
          );
        })}
      </Grid>
    );

    return result;
  };

  handleFilter = e => {
    const { value } = e.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  }

  renderSearchBox() {
    let result = null;

    result = (
      <SearchBox handleChange={this.handleFilter} />
    );

    return result;
  }

  renderForm() {
    let result = null;
    const { open } = this.state;

    result = <TaskForm open={open} handleClose={this.handleClose} />;

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
          onClick={this.loadData}
        >
          <Add className={classes.icon} />
          Load data...
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.onOpenForm}
        >
          Add New Task
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
  }),
  listTask: PropTypes.array,
  modalActions: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
  })
};

const mapStateToProps = state => {
  return {
    listTask: state.task.listTask
  };
};

const mapDispatchToProps = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TaskBoard)
);

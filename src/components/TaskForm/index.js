import React from "react";
import { withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { reduxForm, Field } from 'redux-form';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from "./styles";
import renderTextField from "../FormHelper/TextField";
import validate from './validate';
import * as taskActions from '../../actions/task';

class TaskForm extends React.Component {
  handleSubmitForm = data => {
    const { taskActionCreators } = this.props;
    const { addTask } = taskActionCreators;
    const { title, description } = data;
    addTask(title, description);
  }

  render() {
    const { classes, handleSubmit, invalid, submiting, taskEditing } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Field
          id="title"
          label="Title"
          name="title"
          className={classes.textField}
          component={renderTextField}
          margin="normal"
          fullWidth
          value={taskEditing ? taskEditing.title : ''}
        />
        <Field
          id="description"
          label="Description"
          name="description"
          className={classes.textField}
          component={renderTextField}
          multiline
          margin="normal"
          fullWidth
        />
        <Button disabled={invalid || submiting} variant="contained" color="primary" type="submit" style={{ margin: 10, marginLeft: 0 }}>
          Save
        </Button>
        <Button variant="contained" color="secondary" style={{ margin: 10 }}>
          Close
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    taskEditing: state.task.taskEditing,
    initialValues: {
      title: state.task.taskEditing ? state.task.taskEditing.title : null,
      description: state.task.taskEditing ? state.task.taskEditing.description : null
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch)
  };
};

const FORM_NAME = 'TASK_MANAGEMENT';

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskForm);

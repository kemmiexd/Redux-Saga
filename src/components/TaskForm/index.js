import React from "react";
import { withStyles } from "@material-ui/styles";
import { Button, TextField } from "@material-ui/core";
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import styles from "./styles";
import renderTextField from "../FormHelper/TextField";
import validate from './validate';

class TaskForm extends React.Component {
  handleSubmitForm = data => {
    console.log(data);
    console.log('hello')
  }

  render() {
    const { classes, handleSubmit, invalid, submiting } = this.props;

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

const FORM_NAME = 'TASK_MANAGEMENT'

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate
});

export default compose(
  withStyles(styles),
  withReduxForm
)(TaskForm);

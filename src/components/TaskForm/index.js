import React from "react";
import { withStyles } from "@material-ui/styles";
import { Button, TextField, Modal, Typography } from "@material-ui/core";
import styles from "./styles";

class TaskForm extends React.Component {
  render() {
    const { classes, open, handleClose } = this.props;

    return (
      <Modal open={open}>
        <div className={classes.modal}>
          <Typography>Add New Task</Typography>
          <form>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="email"
              fullWidth
            />
            <TextField
              id="filled-multiline-static"
              label="Description"
              multiline
              rows="4"
              className={classes.textField}
              margin="normal"
              fullWidth
            />
            <Button variant="contained" color="primary">Save</Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Close
            </Button>
          </form>
        </div>
      </Modal>
    );
  }
}

export default withStyles(styles)(TaskForm);

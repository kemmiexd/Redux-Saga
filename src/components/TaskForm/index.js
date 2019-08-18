import React from 'react';
import { withStyles } from '@material-ui/styles';
import { 
  Button, 
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'
import styles from './styles';


class TaskForm extends React.Component {
  render() {
    const { classes, open, handleClose } = this.props;

    return (
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add New Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your new task now
          </DialogContentText>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default withStyles(styles)(TaskForm)
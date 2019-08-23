const styles = (theme) => ({
  modal: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #e1e1e1',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
  },
});

export default styles;

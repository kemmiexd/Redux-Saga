const styles = (theme) => ({
  titleStatus: {
    margin: "30px 0",
  },
  card: {
    padding: 20,
    marginBottom: 20,
    [theme.breakpoints.down('xl')]: {
      backgroundColor: 'red'
    },
    [theme.breakpoints.down('lg')]: {
      backgroundColor: 'yellow'
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'green'
    },
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'blue'
    },
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'greenyellow'
    },
  },
  text: {
    margin: '10px 0',
    [theme.breakpoints.down('lg')]: {
      backgroundColor: 'pink'
    },
  },
  fab: {
    marginLeft: 10
  }
});

export default styles;

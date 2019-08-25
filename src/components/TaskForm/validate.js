const validate = values => {
  const errors = {};
  const { title } = values;
  if (!title) {
    errors.title = 'Plz input title';
  } else if (title.trim() && title.length < 5) {
    errors.title = 'must more than 5 characters';
  }
  return errors;
};

export default validate;

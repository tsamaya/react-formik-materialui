/* eslint-disable import/prefer-default-export */
export const handleSubmit = (values, actions) => {
  setTimeout(() => {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, 1000);
};

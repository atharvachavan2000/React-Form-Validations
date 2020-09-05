export const personalInfo = [
  { name: "Client Name", sm: 6 },
  { name: "Customer Name", sm: 6 },
  { name: "Entity", sm: 12 },
  { name: "Address Line 1", sm: 12 },
  { name: "Address Line 2", sm: 12 },
  { name: "City", sm: 6 },
  { name: "State", sm: 6 },
  { name: "Zip/Postal Code", sm: 6 },
  { name: "Country", sm: 6 },
];

// Export all your form fields like this and render them into your form using the following component:

/*
const InputField = (props) => {
  return (
    <Grid item xs={12} sm={props.sm}>
      <TextField
        value={props.value}
        error={props.error ? true : false}
        onChange={props.handleChange}
        required
        id={props.name}
        name={props.name}
        label={props.label ? props.label : props.name}
        fullWidth
        autoComplete=""
        helperText={props.helperText}
      />
    </Grid>
  );
};
*/

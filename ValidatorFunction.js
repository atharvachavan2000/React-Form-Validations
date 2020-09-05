import * as formFields from "./FormFields.js";
import {
  emptyValidation,
  validateEmail
} from "./ValidationRegex.js";

/* This function will return a errorJson which can be used to add helperTexts to concerned fields in the form.
   the isError boolean return will ultimately decide if we can proceed with the form or it. It simply returns true
   even it there's a single error.*/
   
export const validateInformationForm = (state) => {
  let errors = {};
  let isError = false;

  let validationResults = validate(
    formFields.personalInfo,
    state,
    errors,
    isError
  );
  return validationResults;
};

//The function below will check if each input satisfies it's own rules.
const validate = (array, state, errors, isError) => {
  array.map((input) => {
  //For Email
    if (input.isEmail) {
      if (!state[input.name] || !validateEmail(state[input.name])) {
        errors[input.name] = "Invalid Email ID";
      }
    } 
    //For Length 
    else if (input.isLength > 0) {
      if (!state[input.name] || state[input.name].length !== input.isLength) {
        isError = true;
        errors[input.name] =
          input.label + " must be " + input.isLength + " digits only.";
      }
    }
    //For Empty (default validation is empty.) 
    else {
      if (!state[input.name] || emptyValidation(state[input.name])) {
        errors[input.name] = input.name + " cannot be empty.";
      }
    }
  });
  return { errors, isError };
};


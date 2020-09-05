# React-Form-Validations
This Repository containes three files namely:<br>
FormField.js<br>
ValidationRegex.js<br>
ValidatorFunction.js

These files can be added to the utilities folder of your project and then be easily used for form-validations.

<b>Usage of each file</b>
<br/>
<i>FormField.js</i> : Form Fields exports a const which contains all the fields that will be present in the form. There is also a commented function component which I used to render my form.<br><br>
<i>ValidationRegex.js</i> : Contains the rules and regular expressions to validate various types of inputs. Currently, it only has isEmail and isEmpty validations.<br><br>
<i>ValidatorFunction.js</i>: You can call this function from the component where your form is located. You'll need to pass the state object to the function. It will return a <b>errors</b> json which can be used to show helper text on the inputs and a boolean <b>isError</b> which will help you determine whether or not to proceed with the form.

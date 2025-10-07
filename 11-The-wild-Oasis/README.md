# React-hook-form

- reference => CreateCabinForm.jsx
- React Hook Form reduces the amount of code you need to write while removing unnecessary re-renders. While in normal react we have to create a state variable to control the input element, but with this library, no need to create state variable

- we use useForm() hook, which gives helper functions like handleSubmit, register, etc.
- we have to register all the input elements that the from has to handle using the syntax: {...register("nameOfInputFieldToBeGivenInTheForm")}
- This can be even add more things to the register as well, as below
  {...register("name", {required: "This field is required"})}

- handleSubmit() function takes a userdefined function as argument and that function will get the data of the registers defined.

  eg:
  userDefinedSubmitFn(data){ console.log(data)}
  handleSubmit(userDefinedSubmitFn)

# Form Validation

- Whenever we submit the form, it call the handleSubmit and in turn it calls the userDefinedSubmitFn, but if we have to validate the form then, we have to also use {required: "This field is required"} in register() as argument.
- Now when we submit the from without the data, it first validates the form and then if there is no value, it doesnot call's the userDefinedSubmitFn,

- We can also pass a function as second argument, which will be called when there is some error in the form validation, and that function gets the error data as arguments
  eg:
  userDefinedErrorFn(err){ console.log(err)}
  handleSubmit(userDefinedSubmitFn, userDefinedErrorFn)

register("name", {required: "This field is required"}), this is basic validation, we can also add more validations like minimum value, maximum value and also a message in case if the validation fails with the value and even a validation function

eg: for Capacity Input
{register("name", {
required: "This field is required",
min: {
value: 1
message: "Capacity should be atleast 1"
}
})}

eg: If we want to compare some value or some validation then we can create our own custom validation function and pass for validate, and this takes a callback function that takes the current value present in the input. The function will be validated if it returns true, or else it throws an validation error which we have to return, which in turn will call the errorfunction in the handleSubmit

{register("name", {
required: "This field is required",
validate: (value) =>
})}

- To get the value of the form, useForm() gives us the getValues() function and can be used as getValue().nameOfTheFieldUsedInForm

- To display the error message on the screen, we have to get the errors, so useFrom() gives another function called formState, from which we can get the errors property.


## Expanding the ESLint configuration

import React from "react";
import { ErrorMessage, Form } from "formik";
import { FormGroup, Label, FormFeedback } from "reactstrap";
import Select from "react-select";
const SelectField = (props) => {
  const { field, form, label, placeholder, disable, options } = props;
  const { name, value } = field;
  // console.log(value);
  const selectedOption = options.find((option) => option.value === value);
  const { errors, touched } = form;
  // console.log(errors[name]);
  const showError = errors[name] && touched[name];
  // console.log("showError", showError);
  const handleOptionSelect = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;
    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
    // console.log(selectedValue);
  };
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleOptionSelect}
        placeholder={placeholder}
        options={options}
        isDisabled={disable}
        className={showError ? "is-invalid" : ""}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};

export default SelectField;

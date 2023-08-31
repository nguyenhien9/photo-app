import React from "react";
import { ErrorMessage } from "formik";
import { Input, Label, FormGroup, FormFeedback } from "reactstrap";
const InputField = (props) => {
  const { field, form, type, label, placeholder, disable } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched, setFieldValue } = form;
  const showError = errors[name] && touched[name];
  // console.log(errors[name]);
  return (
    <>
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}
        <Input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disable}
          invalid={showError}
        />
        <ErrorMessage name={name} component={FormFeedback} />
      </FormGroup>
    </>
  );
};

export default InputField;

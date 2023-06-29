import React from "react";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import RandomPhoto from "../../components/RandomPhoto";
import { ErrorMessage } from "formik";
const RandomPhotoField = (props) => {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl);
  };
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
      />
      <div className="is-invalid"></div>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};

export default RandomPhotoField;

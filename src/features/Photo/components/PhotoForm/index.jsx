import React from "react";
import { Formik, Form, FastField } from "formik";
import InputField from "../../../../custom-fields/InputField";
import SelectField from "../../../../custom-fields/SelectField";
import RandomPhotoField from "../../../../custom-fields/RandomPhotoField";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import * as Yup from "yup";
import { Button, FormGroup, Spinner } from "reactstrap";

const PhotoForm = (props) => {
  const { onSubmit, photoEdit, isAddMode } = props;
  console.log("photoEdit", photoEdit);
  const initialValues = photoEdit
    ? photoEdit
    : {
        title: "",
        categoryId: null,
        photo: "",
      };
  const validationSchema = Yup.object({
    title: Yup.string().required("This field is required"),
    categoryId: Yup.number().required("This field is required"),
    photo: Yup.string().required("This field is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formikProp) => {
        const { isSubmitting } = formikProp;
        return (
          <Form>
            <FastField
              name="title"
              label="Title"
              component={InputField}
              placeholder="E.g: Wow nature..."
            />
            <FastField
              name="categoryId"
              label="Category"
              component={SelectField}
              placeholder="Select Photo category"
              options={PHOTO_CATEGORY_OPTIONS}
            />
            <FastField
              name="photo"
              label="Photo"
              component={RandomPhotoField}
            />
            <FormGroup>
              <Button type="submit" color={isAddMode ? "primary" : "success"}>
                {isSubmitting && <Spinner size="sm" />}
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PhotoForm;

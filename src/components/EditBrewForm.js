import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditBrewForm(props) {
  const { brew } = props;

  function handleEditBrewFormSubmission(event) {
    event.preventDeafult();
    props.onEditBrew({
      name: event.target.name.value,
      potionClass: event.target.potionClass.value,
      price: parseInt(event.target.price.value),
      flavor: event.target.flavor.value,
      vials: brew.vials,
      id: brew.id
    });
  }

  return (
    <ReusableForm
      formSubmissionHandler={handleEditBrewFormSubmission}
      buttonText="Update Brew" />
  );
}

EditBrewForm.propTypes = {
  brew: PropTypes.object,
  onEditBrew: PropTypes.func
};

export default EditBrewForm;
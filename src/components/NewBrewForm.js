import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewBrewForm(props) {
  function handleNewBrewFormSubmission(event) {
    event.preventDefault();
    props.onNewBrewCreation({
      name: event.target.name.value,
      potionClass: event.target.potionClass.value,
      price: parseInt(event.target.price.value),
      flavor: event.target.flavor.value,
      vials: 7,
      id: v4()
    });
  }

  return (
    <ReusableForm
      existingBrew={null}
      formSubmissionHandler={handleNewBrewFormSubmission}
      buttonText="Add Brew" />
  );
}

NewBrewForm.propTypes = {
  onNewBrewCreation: PropTypes.func
};

export default NewBrewForm;
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
      price: event.target.price.value,
      flavor: event.target.flavor.value,
      vials: 97,
      id: v4()
    });
  }

  return (
    <ReusableForm
      formSubmissionHandler={handleNewBrewFormSubmission}
      buttonText="Add Brew" />
  );
}

NewBrewForm.propTypes = {
  onNewBrewCreation: PropTypes.func
};

export default NewBrewForm;
import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Brew Name" />
        <input type="text" name="potionClass" placeholder="Potion Class" />
        <input type="number" name="price" placeholder="Vial Price" />
        <input type="text" name="flavor" placeholder="Brew Flavor" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
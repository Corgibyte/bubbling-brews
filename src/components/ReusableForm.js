import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  let nameValue = null;
  let potionClassValue = null;
  let priceValue = null;
  let flavorValue = null;
  if (props.existingBrew != null) {
    nameValue = props.existingBrew.name;
    potionClassValue = props.existingBrew.potionClass;
    priceValue = props.existingBrew.price;
    flavorValue = props.existingBrew.flavor;
  }

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Brew Name" defaultValue={nameValue} />
        <input type="text" name="potionClass" placeholder="Potion Class" defaultValue={potionClassValue} />
        <input type="number" name="price" placeholder="Vial Price" defaultValue={priceValue} />
        <input type="text" name="flavor" placeholder="Brew Flavor" defaultValue={flavorValue} />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  existingBrew: PropTypes.object,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
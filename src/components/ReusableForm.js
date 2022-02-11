import React from "react";
import PropTypes from "prop-types";

const inputStyle = {
  backgroundColor: "#434C5E",
  color: "#E5E9F0",
  fontSize: "1.25rem",
  border: "solid #8FBCBB 1px",
  borderRadius: "1rem",
  padding: "0.5rem",
  margin: "0.5rem"
};

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
        <div>
          <input style={inputStyle} type="text" name="name" placeholder="Brew Name" defaultValue={nameValue} />
          <input style={inputStyle} type="text" name="potionClass" placeholder="Potion Class" defaultValue={potionClassValue} />
        </div>
        <div>
          <input style={inputStyle} type="number" name="price" placeholder="Vial Price" defaultValue={priceValue} />
          <input style={inputStyle} type="text" name="flavor" placeholder="Brew Flavor" defaultValue={flavorValue} />
        </div>
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
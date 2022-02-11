import React from "react";
import PropTypes from "prop-types";

function Brew(props) {
  let vialRemoveState = null;
  if (props.vials > 0) {
    vialRemoveState = (
      <div onClick={() => props.whenBrewVialRemoved(props.id)}>
        <p>Remove Vial</p>
      </div>
    );
  } else {
    vialRemoveState = (
      <div className="vial-removal invalid">
        <p>Cauldron Empty</p>
      </div>
    );
  }

  return (
    <div className="brew-row">
      <div onClick={() => props.whenBrewClicked(props.id)}>
        <h3>{props.name}: {props.potionClass}</h3>
        <h4>${props.price}</h4>
        <h5>Flavor: {props.flavor}</h5>
        <h6>{props.vials} vials remaining</h6>
      </div>
      {vialRemoveState}
    </div>

  );
}

Brew.propTypes = {
  name: PropTypes.string.isRequired,
  potionClass: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  flavor: PropTypes.string,
  vials: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenBrewClicked: PropTypes.func,
  whenBrewVialRemoved: PropTypes.func
};

export default Brew;
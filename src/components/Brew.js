import React from "react";
import PropTypes from "prop-types";

const rowStyle = {
  display: "grid",
  gridTemplateRows: "1fr",
  gridTemplateColumns: "3fr 1fr"
};

const brewStyle = {
  border: "1px #81A1C1 solid",
  borderRadius: "2rem",
  backgroundColor: "#3B4252",
  padding: "1rem",
  margin: "0 1rem 1rem 0"
};

const vialStyle = {
  textAlign: "center",
  paddingTop: "1.5rem"
};

const validVial = {
  color: "#88C0D0",
  fontSize: "1.5rem",
  verticalAlign: "center"
};

const lowVial = {
  color: "#EBCB8B",
  fontSize: "1.5rem",
  verticalAlign: "center"
};

const invalidVial = {
  color: "#BF616A",
  fontSize: "1.5rem",
  verticalAlign: "center"
};

function Brew(props) {
  let vialRemoveState = null;
  if (props.vials > 3) {
    vialRemoveState = (
      <div onClick={() => props.whenBrewVialRemoved(props.id)} style={{ ...brewStyle, ...vialStyle }}>
        <p style={validVial}>{props.vials} vials left</p>
        <p style={validVial}>Remove Vial</p>
      </div >
    );
  } else if (props.vials > 0) {
    vialRemoveState = (
      <div onClick={() => props.whenBrewVialRemoved(props.id)} style={{ ...brewStyle, ...vialStyle }}>
        <p style={lowVial}>{props.vials} vials left</p>
        <p style={lowVial}>Remove Vial</p>
      </div >
    );
  } else {
    vialRemoveState = (
      <div className="vial-removal invalid" style={{ ...brewStyle, ...vialStyle }}>
        <p style={invalidVial}>No vials left</p>
        <p style={invalidVial}>Cauldron Empty</p>
      </div>
    );
  }

  return (
    <div className="brew-row" style={rowStyle}>
      <div onClick={() => props.whenBrewClicked(props.id)} style={brewStyle}>
        <h3>{props.name}: {props.potionClass}</h3>
        <h4>${props.price}</h4>
        <h5>Flavor: {props.flavor}</h5>
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
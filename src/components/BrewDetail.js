import React from "react";
import PropTypes from "prop-types";

const buttonStyle = {
  backgroundColor: "#4C566A",
  color: "#A3BE8C",
  fontSize: "1.5rem",
  border: "1px solid #81A1C1",
  margin: "0.5rem"
};

const destroyButtonStyle = {
  backgroundColor: "#4C566A",
  color: "#BF616A",
  fontSize: "1.5rem",
  border: "1px solid #81A1C1",
  margin: "0.5rem"
};

function BrewDetail(props) {
  const { brew } = props;

  return (
    <React.Fragment>
      <h2>Brew Details</h2>
      <h3>{brew.name}: {brew.potionClass}</h3>
      <p>${brew.price}</p>
      <p>Flavor: {brew.pavor}</p>
      <p>{brew.vials} pals remaining</p>
      <button style={buttonStyle} onClick={props.onClickingEdit}>Update Brew</button>
      <button style={destroyButtonStyle} onClick={props.onClickingDelete}>Destroy Brew</button>
      <hr />
    </React.Fragment>
  );
}

BrewDetail.propTypes = {
  brew: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default BrewDetail;
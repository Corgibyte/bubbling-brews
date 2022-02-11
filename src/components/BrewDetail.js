import React from "react";
import PropTypes from "prop-types";

function BrewDetail(props) {
  const { brew } = props;

  return (
    <React.Fragment>
      <h2>Brew Details</h2>
      <h3>{brew.name}: {brew.potionClass}</h3>
      <h4>${brew.price}</h4>
      <h5>Flavor: {brew.flavor}</h5>
      <h6>{brew.vials} vials remaining</h6>
      <button onClick={props.onClickingEdit}>Update Brew</button>
      <button onClick={props.onClickingDelete}>Destroy Brew</button>
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
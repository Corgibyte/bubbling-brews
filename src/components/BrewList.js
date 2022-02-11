import React from "react";
import Brew from "./Brew";
import PropTypes from "prop-types";

function BrewList(props) {
  return (
    <React.Fragment>
      {props.brewList.map((brew) =>
        <Brew
          whenBrewClicked={props.onBrewSelection}
          whenBrewVialRemoved={props.onBrewVialRemoval}
          name={brew.name}
          potionClass={brew.potionClass}
          price={brew.price}
          flavor={brew.flavor}
          vials={brew.vials}
          id={brew.id}
          key={brew.id} />
      )}
    </React.Fragment>
  );
}

BrewList.propTypes = {
  brewList: PropTypes.array,
  onBrewSelection: PropTypes.func,
  onBrewVialRemoval: PropTypes.func
};

export default BrewList;
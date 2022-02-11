import React from "react";
import NewBrewForm from "./NewBrewForm";
import BrewList from "./BrewList";
import BrewDetail from "./BrewDetail";
import EditBrewForm from "./EditBrewForm";

class BrewControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBrewList: [],
      selectedBrew: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedBrew != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBrew: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewBrewTolist = (newBrew) => {
    const newMainBrewList = this.state.mainBrewList.concat(newBrew);
    this.setState({ mainBrewList: newMainBrewList, formVisibleOnPage: false });
  }

  handleChangingSelectedBrew = (id) => {
    const selectedBrew = this.state.mainBrewList.filter(ticket => ticket.id === id)[0];
    this.setState({ selectedBrew: selectedBrew });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingBrewInList = (brewToEdit) => {
    const editedMainBrewList = this.state.mainBrewList
      .filter(brew => brew.id !== brewToEdit.id)
      .concat(brewToEdit);
    this.setState({
      mainBrewList: editedMainBrewList,
      editing: false,
      selectedBrew: null
    });
  }

  handleDeletingBrew = (id) => {
    const newMainBrewList = this.state.mainBrewList.filter(brew => brew.id !== id);
    this.setState({
      mainBrewList: newMainBrewList,
      selectedBrew: null
    });
  }

  handleRemovingVialFromBrew = (id) => {
    const selectedBrew = this.state.mainBrewList.filter(brew => brew.id === id)[0];
    this.handleEditingBrewInList({
      name: selectedBrew.name,
      potionClass: selectedBrew.potionClass,
      price: selectedBrew.price,
      flavor: selectedBrew.flavor,
      vials: selectedBrew.vials - 1,
      id: selectedBrew.id
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditBrewForm
        brew={this.state.selectedBrew}
        onEditBrew={this.handleEditingBrewInList} />;
      buttonText = "Return to Brew List";
    } else if (this.state.selectedBrew != null) {
      currentlyVisibleState = <BrewDetail
        brew={this.state.selectedBrew}
        onClickingDelete={this.handleDeletingBrew}
        onClickingEdit={this.handleEditClick} />;
      buttonText = "Return to Brew List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBrewForm
        onNewBrewCreation={this.handleAddingNewBrewTolist} />;
      buttonText = "Return to Brew List";
    } else {
      currentlyVisibleState = <BrewList
        onBrewVialRemoval={this.handleRemovingVialFromBrew}
        brewList={this.state.mainBrewList}
        onBrewSelection={this.handleChangingSelectedBrew} />;
      buttonText = "Add Brew";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {<button onClick={this.handleClick}>{buttonText}</button>}
      </React.Fragment>
    );
  }
}

export default BrewControl;
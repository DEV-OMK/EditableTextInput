import {Component} from 'react'
import './index.css'

class EditableTextInput extends Component {
  state = {
    userInput: '',
    showEditButton: false,
  }

  updateUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({
      showEditButton: !prevState.showEditButton,
    }))
  }

  renderInputField = () => {
    const {userInput} = this.state
    return (
      <div className="container">
        <input
          type="text"
          className="user-input"
          value={userInput}
          onChange={this.updateUserInput}
        />
        <button
          type="button"
          className="custom-button"
          onClick={this.onClickButton}
        >
          Save
        </button>
      </div>
    )
  }

  renderEditField = () => {
    const {userInput} = this.state
    return (
      <div className="container">
        <p className="text">{userInput}</p>
        <button
          type="button"
          className="custom-button"
          onClick={this.onClickButton}
        >
          Edit
        </button>
      </div>
    )
  }

  render() {
    const {showEditButton} = this.state

    return (
      <div className="main-container">
        <div className="responsive-container">
          <div className="card">
            <h1 className="heading">Editable Text Input</h1>
            {!showEditButton && this.renderInputField()}
            {showEditButton && this.renderEditField()}
          </div>
        </div>
      </div>
    )
  }
}

export default EditableTextInput

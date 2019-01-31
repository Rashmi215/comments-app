import React, { Component } from "react";

class CommentForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      error: "",
      comment: {
        name: this.props.name,
        message: ""
      }
    };
  }

  handleFieldChange = e => {
    const { value, name } = e.target;
    console.log(e.target.value);
     this.setState({
       ...this.state,
       comment: {
         ...this.state.comment,
         [name]: value
       }
     });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.isFormValid()) {
      this.setState({ error: "All fields are required." });
      return;
    }
    this.setState({ error: "", loading: true });
    let {comment} = this.state;
    this.props.addComment(comment);

    this.setState({
      comment:{
        message: ""
      }
    })
  }

  isFormValid = () => {
    return this.state.comment.message !== "";
  }

  renderError = () => {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.comment.message}
              className="form-control"
              placeholder="Add a comment..."
              name="message"
              rows="5"
            />
          </div>

          {this.renderError()}

          <div className="form-group float-right">
            <button className="btn btn-primary">
              Comment
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default CommentForm;

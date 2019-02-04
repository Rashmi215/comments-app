import React, { Component } from "react";
import {connect} from 'react-redux';
import {addComment} from '../actions/index';

class CommentForm extends Component {
    state = {
      loading: false,
      error: "",
      comment: {
        name: this.props.name,
        message: ""
      }
    };

  handleFieldChange = e => {
     this.setState({
       comment: {
         ...this.state.comment,
         message: e.target.value
       }
     });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!(this.state.comment.message !== "")) {
      this.setState({ error: "Please enter some comment!" });
      return;
    }
    this.setState({error: "", loading: true});
    this.props.addComment(this.state.comment);
    //console.log('comment in cf', this.state.comment);
    this.setState({
      comment:{
        ...this.state.comment,
        message: ""
      }
    });
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
              rows="3"
              style={{resize: 'none'}}
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

const mapDispatchToProps = (dispatch) =>{
  return{
    addComment: (comment) => {dispatch(addComment(comment))}
  }
}

export default connect(null, mapDispatchToProps)(CommentForm);

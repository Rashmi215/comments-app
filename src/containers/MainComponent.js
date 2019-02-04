import React, { Component } from "react";
import CommentList from "../components/CommentList";
import CommentForm from "./CommentForm";
import {connect} from 'react-redux';

class MainComponent extends Component {
  state = {
      loading: false
    };

  render() {
    return (
      <div className="App container bg-light shadow">
        <header className="App-header mb-3">
          <h1 className="App-title">
             Comments App
            <span className="px-2" role="img" aria-label="Chat">
              💬
            </span>
           </h1>
          </header>
          <div className='mb-3 py-3 px-3 bg-info text-white' id='post'>
            <h3>Tiny Buddha</h3>
            <span>
            <i>"As long as you feel pain, you're still alive. As long as you make mistakes, you're still human. And as long as you keep trying, there' still hope." - Susan Gale</i>
            <br />
            Lori Deschene founded Tiny Buddha in 2009 with the objective of providing a valuable resource and reference for happiness and peace. Personal stories about mindfulness, spirituality, social relationships, personal development and meditation are shared by readers of all ages from all over the world. As Lori underlines, Tiny Buddha is an online community made by people to help the others by sharing their meaningful wisdom.
            </span>
          </div>
            <CommentForm name={this.props.match.params.name}/>
            <CommentList
              loading={this.state.loading}
              comments={this.props.commentState.comments}
            />
        </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    commentState: state.commentState
  };
}

export default connect(mapStateToProps)(MainComponent);

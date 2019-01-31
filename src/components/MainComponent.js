import React, { Component } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

class MainComponent extends Component {

  state = {
      comments: [],
      loading: false
    };

    componentDidMount() {
      this.hydrateStateWithLocalStorage();
       window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
      );
   }

   componentWillUnmount() {
      window.removeEventListener(
        "beforeunload",
        this.saveStateToLocalStorage.bind(this)
      );
      this.saveStateToLocalStorage();
    }


    hydrateStateWithLocalStorage() {
      for (let key in this.state) {
        if (localStorage.hasOwnProperty(key)) {
          let value = localStorage.getItem(key);
          try {
            value = JSON.parse(value);
            this.setState({ [key]: value });
          } catch (e) {
            this.setState({ [key]: value });
          }
        }
      }
    }

    saveStateToLocalStorage() {
      for (let key in this.state) {
        localStorage.setItem(key, JSON.stringify(this.state[key]));
      }
    }

  addComment = comment => {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    },() =>{
      localStorage.setItem("comments", JSON.stringify(this.state.comments));
    });

  }

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
          <div className='bg-white mb-3'>
            <span>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</span>
          </div>
            <CommentForm addComment={this.addComment} name={this.props.match.params.name}/>
            <CommentList
              loading={this.state.loading}
              comments={this.state.comments}
            />
        </div>
    );
  }
}

export default MainComponent;

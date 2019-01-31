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
          <div className='mb-3 py-3 px-3 bg-info text-white' id='post'>
            <h3>Tiny Buddha</h3>
            <span>
            <i>"As long as you feel pain, you're still alive. As long as you make mistakes, you're still human. And as long as you keep trying, there' still hope." - Susan Gale</i>
            <br />
            Lori Deschene founded Tiny Buddha in 2009 with the objective of providing a valuable resource and reference for happiness and peace. Personal stories about mindfulness, spirituality, social relationships, personal development and meditation are shared by readers of all ages from all over the world. As Lori underlines, Tiny Buddha is an online community made by people to help the others by sharing their meaningful wisdom.
            </span>
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

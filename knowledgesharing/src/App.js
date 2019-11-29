import React from "react";
import { TweetList } from "./components/TweetList/TweetList";
import "./App.css";
import TweetForm from "./components/TweetForm/TweetForm";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tweets: []
    };
  }

  addTweet = newTweet => {
    console.log(newTweet);
    //Todo

    //this.setState(...) //rerenders the component
  };

  removeTweet = id => {
    console.log(id);
    //Todo
  };

  // //Updating
  // componentWillUpdate() {
  //   console.log("componentWillUpdate");
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }

  // //Unmounting
  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }

  // //Mounting
  // componentWillMount() {
  //   console.log("componentWillMount");
  // }

  componentDidMount() {
    //API calls
    console.log("componentDidMount");

    setTimeout(() => {
      let tweets = [
        { id: 1, name: "Tweet1", content: "Bla bla" },
        { id: 2, name: "Tweet2", content: "Bla bla 2" }
      ];
      this.setState({ tweets });
    }, 1000);
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <h1>React Tweets</h1>
        <TweetList removeTweet={this.removeTweet}>
          {this.state.tweets}
        </TweetList>
        <br />
        <TweetForm addTweet={this.addTweet} />
      </div>
    );
  }
}

export default App;

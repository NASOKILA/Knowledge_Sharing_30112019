import React, { Component } from "react";
import { TweetList } from "./components/TweetList/TweetList";
import TweetForm from "./components/TweetForm/TweetForm";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tweets: []
    };
  }

  //unmounting
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  //Updating
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  //Mounting
  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
    //API calls
    setTimeout(() => {
      let tweets = [
        { id: 1, name: "Tweet1", content: "Some text..." },
        { id: 2, name: "Tweet2", content: "Some text..." }
      ];
      this.setState({ tweets });
    }, 1000);
  }

  addTweet = tweet => {
    let tweets = [...this.state.tweets];
    tweets.push(tweet);
    this.setState({ tweets });
  };

  removeTweet = id => {
    console.log(id);
    let tweets = this.state.tweets.filter(tw => tw.id !== id);
    this.setState({ tweets });
  };

  render() {
    console.log("render");
    return (
      <div className="App">
        <h1>React Tweets</h1>
        <TweetList removeTweet={this.removeTweet}>
          {this.state.tweets}
        </TweetList>
        <br />
        <TweetForm
          addTweet={this.addTweet}
          tweetsCount={this.state.tweets.length}
        />
      </div>
    );
  }
}

export default App;

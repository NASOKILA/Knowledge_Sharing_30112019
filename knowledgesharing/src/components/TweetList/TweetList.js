import React from "react";
import Tweet from "../Tweet/Tweet";
import "./TweetList.css";

export function TweetList({ children, addTweet, removeTweet }) {
  const tweets = children;

  return (
    <div className="tweetList">
      {tweets.map((tw, i) => {
        return (
          <Tweet
            addTweet={addTweet}
            removeTweet={removeTweet}
            key={i}
            id={tw.id}
            name={tw.name}
            content={tw.content}
          />
        );
      })}
    </div>
  );
}

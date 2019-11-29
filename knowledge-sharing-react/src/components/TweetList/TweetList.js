import React from "react";
import Tweet from "../Tweet/Tweet";
import "./TweetList.css";

export function TweetList({ children, removeTweet }) {
  return (
    <div className="tweetList">
      {children.map((tw, i) => {
        return (
          <Tweet
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

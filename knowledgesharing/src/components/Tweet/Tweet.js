import React, { useState } from "react";
import "./Tweet.css";

export default function Tweet({ id, name, content, removeTweet }) {
  const [likes, setLikes] = useState(0);

  const like = () => {
    setLikes(Math.min(likes + 1, 10));
  };

  const dislike = () => {
    setLikes(Math.max(likes - 1, 0));
    //Todo
  };

  const removeCurrentTweet = () => {
    removeTweet(id);
  };

  return (
    <div className="tweet">
      <h3>
        {id} : {name}
      </h3>
      <p>{content}</p>
      <button onClick={removeCurrentTweet}>X</button>
      <br />
      <button onClick={like}>Like</button>
      <br />
      <button onClick={dislike}>Dislike</button>
      <br />
      <b>{likes}</b>
      <br />
    </div>
  );
}

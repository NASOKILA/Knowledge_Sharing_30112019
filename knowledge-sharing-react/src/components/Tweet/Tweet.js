import React, { useState } from "react";
import "./Tweet.css";

export default function Tweet({ id, name, content, removeTweet }) {
  const [likes, setLikes] = useState(0);

  const like = () => {
    console.log("like");
    //Todo max 10
  };

  const dislike = () => {
    console.log("dislike");
    //Todo min 0
  };

  const removeCurrentTweet = () => {
    console.log("remove");
    //Todo
  };

  return (
    <div className="tweet">
      <b>
        {id} : {name}
      </b>
      <p>{content}</p>
      <br />
      <button onClick={removeCurrentTweet}>X</button>
      <br />
      <button onClick={like}>Like</button>
      <br />
      <button onClick={dislike}>Dislike</button>
      <br />
      <b>Likes : {likes}</b>
    </div>
  );
}

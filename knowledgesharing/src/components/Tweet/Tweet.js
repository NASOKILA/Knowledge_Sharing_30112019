import React, { useState } from "react";
import "./Tweet.css";

export default function Tweet({ id, name, content }) {
  const [likes, setLikes] = useState(0);

  const like = () => {
    //Todo
  };

  const dislike = () => {
    //Todo
  };

  return (
    <div className="tweet">
      <h3>
        {id} : {name}
      </h3>
      <p>{content}</p>
      <button>X</button>
      <br />
      <button>Like</button>
      <br />
      <button>Dislike</button>
      <br />
      <b>{likes}</b>
      <br />
    </div>
  );
}

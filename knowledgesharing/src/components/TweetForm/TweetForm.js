import React, { useState } from "react";
import "./TweetForm.css";

export default function TweetForm({ addTweet, tweetsCount }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const hanldeSubmit = e => {
    e.preventDefault();
    console.log("here");
    //Todo
    let data = { id: tweetsCount + 1, name: name, content: content };
    addTweet(data);
    setName("");
    setContent("");
  };

  const handleNameChange = e => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleContentChange = e => {
    console.log(e.target.value);
    setContent(e.target.value);
  };

  return (
    <form className="tweetForm" onSubmit={e => hanldeSubmit(e)}>
      <h3>Tweet Form</h3>
      <label>Name: </label>
      <input
        name="tweetName"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <label>Content: </label>
      <input
        name="tweetContent"
        type="text"
        value={content}
        onChange={handleContentChange}
      />
      <button name="submitBtn" type="submit">
        Add
      </button>
    </form>
  );
}

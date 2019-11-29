import React, { useState } from "react";
import "./TweetForm.css";

function TweetForm({ addTweet, tweetsCount }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log("handleFormSubmit");
    let tweet = { id: tweetsCount + 1, name: name, content: content };
    addTweet(tweet);

    //Todo Clear the form
    setName("");
    setContent("");
  };

  const handelNameChange = e => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handelContentChange = e => {
    console.log(e.target.value);
    setContent(e.target.value);
  };

  return (
    <form className="tweetForm" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="namename"
        onChange={handelNameChange}
        value={name}
      />
      <input
        type="text"
        name="content"
        onChange={handelContentChange}
        value={content}
      />
      <input type="submit" name="button" value="Add" />
    </form>
  );
}

export default TweetForm;

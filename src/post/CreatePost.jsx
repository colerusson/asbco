import { useState } from "react";
import UserHeaderItem from "./userHeaderItem";
import { Post } from "../model/Post";

const CreatePost = ({ presenter }) => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const borderStyle = {
    border: "2px solid var(--purple)",
    borderRadius: "10px",
  };

  const textStyle = {
    textAlign: "left",
    padding: "20px",
    margin: "20px",
    backgroundColor: "var(--peach)",
    width: "calc(100vw - 15vw)",
    ...borderStyle,
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-US", {
      month: "numeric",
      day: "2-digit",
      year: "numeric",
    });
  };

  const submitPost = async (event) => {
    event.preventDefault();

    alert("Creating post...");

    await presenter.createPost(
      new Post(
        title.trim(),
        post.trim(),
        presenter.getLoggedInUser(),
        getCurrentDate()
      )
    );

    alert("Post created!");

    setTitle("");
    setPost("");
    window.history.back();
  };

  return (
    <div
      style={{
        backgroundColor: "var(--tan)",
        minHeight: "100vh",
        paddingBottom: "20px",
      }}
    >
      {/* Show the logged in user's info at the top */}
      <UserHeaderItem user={presenter.getLoggedInUser()} />

      <div style={{ display: "flex" }}>
        {/* Display the fields to create a post */}
        <div style={textStyle}>
          <p style={{ fontWeight: "bold" }}>{getCurrentDate()}</p>

          <input
            id="postTitleInput"
            type="text"
            placeholder="Post Title..."
            style={{
              width: "100%",
              height: "50px",
              backgroundColor: "var(--tan)",
              fontSize: "20px",
              marginBottom: "25px",
              ...borderStyle,
            }}
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <textarea
            id="postStatusTextArea"
            placeholder="Post Text..."
            style={{
              width: "100%",
              height: "calc(100vh - 45vh)",
              backgroundColor: "var(--tan)",
              fontSize: "18px",
              marginBottom: "20px",
              fontFamily: "Arial, sans-serif",
              ...borderStyle,
            }}
            value={post}
            onChange={(event) => {
              setPost(event.target.value);
            }}
          />
        </div>

        <div
          style={{
            justifyContent: "flex-end",
            position: "fixed",
            bottom: "calc(100vh - 98vh)",
            right: "calc(100vw - 99vw)",
          }}
        >
          <button
            disabled={!post || !title}
            style={{
              fontSize: "24px",
              padding: "10px 20px",
              backgroundColor: "var(--peach)",
              color: "var(--purple)",
              ...borderStyle,
              opacity: !post || !title ? 0.5 : 1,
              cursor: !post || !title ? "not-allowed" : "pointer",
            }}
            onClick={(event) => submitPost(event)}
          >
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

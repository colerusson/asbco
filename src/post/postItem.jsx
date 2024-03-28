import React from "react";

const PostItem = ({ post }) => {
  const textStyle = {
    textAlign: "left",
    padding: "20px",
    margin: "20px",
    backgroundColor: "var(--peach)",
    border: "2px var(--purple) solid",
    borderRadius: "10px",
  };

  return (
    <div style={textStyle}>
      <p>{post.timestamp}</p>
      <h2>{post.title}</h2>
      {post.post.split("\n").map((paragraph, index) => (
        <React.Fragment key={index}>
          <p>{paragraph}</p>
          <p></p>
        </React.Fragment>
      ))}
    </div>
  );
};

export default PostItem;

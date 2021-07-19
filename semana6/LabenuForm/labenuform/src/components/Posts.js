import React from "react";

class Posts extends React.Component {
  state = {
    posts: ["Post 1", "Post 2", "Post 3"]
  };
  render() {
    return (
      <div>
        <h3>Posts</h3>
        {this.state.posts.map((post) => {
          return <p>{post}</p>;
        })}
      </div>
    );
  }
}

export default Posts;

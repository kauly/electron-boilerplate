import * as React from "react";
import { Link } from "react-router-dom";

const Main = () => (
  <div>
    <h2
      css={{
        color: "hotpink",
        "&:hover": {
          color: "darkorchid",
        },
      }}
    >
      Home Page
    </h2>
    <Link to="/profile">Profile</Link>
    <div>Home content</div>
  </div>
);

export default Main;

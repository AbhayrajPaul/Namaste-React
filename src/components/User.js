import React, { useState } from "react";
import { Link } from "react-router-dom";

const User = (props) => {
  const [followers] = useState(0);
  const [following] = useState(1);
  const { name, location, git } = props; // destructuring
  return (
    <div className="user-card">
      <h2>Following : {following}</h2>
      <h2>Followers : {followers}</h2>
      <h2>Name : {name}</h2>
      <h2>
        Git : <Link>{git}</Link>
      </h2>
      <h3>Location : {location}</h3>
    </div>
  );
};

export default User;

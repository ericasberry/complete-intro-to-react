import React from "react";

const Details = props => (
  <div className="details">
    <h1><code>{JSON.stringify(props, null, 2)}</code></h1>
  </div>
);

export default Details;

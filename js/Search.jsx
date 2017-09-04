import React from "react";
import ShowCard from "./ShowCard";
import preload from "../data.json";

const Search = () => (
  <div className="search">
    {preload.shows.map(show => <ShowCard {...show} />)}
  </div>
);

/* debug trick
    <pre><code>{JSON.stringify(preload, null, 2)}</code></pre>

*/

export default Search;

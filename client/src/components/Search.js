import React from "react";

export const Search = ({ handleInput, query }) => {
  return (
    <form>
      <input
        value={query}
        onChange={handleInput}
        type="search"
        placeholder="Search..."
      />
    </form>
  );
};

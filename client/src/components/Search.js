import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

export const Search = ({ handleInput, query }) => {
  return (
    <form>
      <input
        value={query}
        onChange={handleInput}
        className="inpt"
        type="search"
        placeholder="Search..."
      />
      <p>{query}</p>
    </form>
  );
};

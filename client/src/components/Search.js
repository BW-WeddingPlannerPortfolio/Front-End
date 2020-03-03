import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

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

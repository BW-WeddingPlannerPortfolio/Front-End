import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";
import styled from "styled-components";

export const Search = ({ handleInput, query }) => {
  return (
    <StyledForm>
      <StyledInput
        value={query}
        onChange={handleInput}
        type="search"
        placeholder="Search..."
      />
    </StyledForm>
  );
};

const StyledInput = styled.input`
  border-radius: 5px;
  width:40%;
  height:50px;
  margin:20px;
`;
const StyledForm = styled.form`
  display:flex;
  justify-content:center;
`;

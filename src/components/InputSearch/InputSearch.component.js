import React from 'react';
import {
  StyledInputSearch,
  StyledSearchInputContainer,
  StyledInputSearchIcon
} from './InputSearch.styles';

const InputSearch = () => {
  return(
    <StyledSearchInputContainer>
      <StyledInputSearch/>
      <StyledInputSearchIcon/>
    </StyledSearchInputContainer>
  );
}

export default InputSearch;
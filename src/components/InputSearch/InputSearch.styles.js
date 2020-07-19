import styled, { css } from 'styled-components';
import Search from '@material-ui/icons/Search';

export const StyledSearchInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const StyledInputSearch = styled.input(({ theme }) => {
  return css`
    outline: none;
    border: 2px solid ${theme.colors.secondary.base};
    border-radius: 8px;
    height: 40px;
    width: 268px;
    font-size: 24px;
  `
})

export const StyledInputSearchIcon = styled(Search)(({ theme }) => {
  return css`
    position: absolute;
    right: 10px;
    color: ${theme.colors.secondary.base};
    cursor: pointer;
  `
})
  
import React from 'react'
import {
  CategoriesCardStyled,
  CategoriesP,
} from './CategoriesCard.styles'

const CategoriesCard = ({ name, active = false }) => {
  return (
    <CategoriesCardStyled active={active}>
      <CategoriesP>{name}</CategoriesP>
    </CategoriesCardStyled>
  )
}

export default CategoriesCard
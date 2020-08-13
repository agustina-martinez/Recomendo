import React from 'react';
import Button from '../Button/Button.component';

import {
    MenuContainer,
    FirstContainer,
    StyledUl,
    CategoryContainer,
    StyledH3,
    Category,
    SecondContainer,
    RaitingContainer,
    StatusContainer,
    StyledP,
    AllStarsContainer,
    AllStatusContainer,
    StyledDiv,
    StarContainer,
    StyledLabel,
    TheButton
} from './Menu.styles';

const Menu = ({menuVisible}) => {

    const categoryItems = [
        {name: 'Seleccionar todos'},
        {name: 'Actividades'},
        {name: 'Animales'},
        {name: 'Artistas'},
        {name: 'Belleza'},
        {name: 'Campo/jartín'},
        {name: 'Celular/móvil'},
        {name: 'Clases'},
        {name: 'Coche/moto'},
        {name: 'Comp. coche'},
        {name: 'Conexiones perdidas'},
        {name: 'Creativos'},
        {name: 'Cuidado infantil'},
        {name: 'Desvaríos'},
        {name: 'Eventos'},
        {name: 'Finanzas'},
    ]

    return(
        <MenuContainer menuVisible={menuVisible}>
            <FirstContainer>
                <StyledH3>Categoría</StyledH3>
                <StyledUl>
                    {
                        categoryItems.map(i => (
                            <CategoryContainer>
                                <Category htmlFor={i.name}>{i.name}</Category>
                                <input type="checkbox" name={i.name} id={i.name}/>
                            </CategoryContainer>
                        ))
                    }
                    
                </StyledUl>
            </FirstContainer>
            <SecondContainer>
                <RaitingContainer>
                    <StyledP>Raiting</StyledP>
                    <AllStarsContainer>
                        <StarContainer>
                            <input type="checkbox"/>
                            <StyledLabel>estrellas</StyledLabel>
                        </StarContainer>
                        <StarContainer>
                            <input type="checkbox"/>
                            <StyledLabel>estrellas</StyledLabel>
                        </StarContainer>
                        <StarContainer>
                            <input type="checkbox"/>
                            <StyledLabel>estrellas</StyledLabel>
                        </StarContainer>
                        <StarContainer>
                            <input type="checkbox"/>
                            <StyledLabel>estrellas</StyledLabel>
                        </StarContainer>
                    </AllStarsContainer>
                </RaitingContainer>
                <StatusContainer>
                    <StyledP>Estado</StyledP>
                    <AllStatusContainer>
                        <StyledDiv>
                            <input type="radio" id="all" name="status"/>
                            <StyledLabel for="all">Mostrar todos</StyledLabel>
                        </StyledDiv>
                        <StyledDiv>
                            <input type="radio" id="new" name="status"/>
                            <StyledLabel for="new">Nuevo</StyledLabel>
                        </StyledDiv>
                        <StyledDiv>
                            <input type="radio" id="used" name="status"/>
                            <StyledLabel for="used">Usado</StyledLabel>
                        </StyledDiv>
                    </AllStatusContainer>
                    <Button
                        buttonTittle="Aplicar"
                        height="1.8rem"
                        width="7rem"
                        letterSpacing="0"
                    />
                </StatusContainer>
            </SecondContainer>
        </MenuContainer>
    );
}

export default Menu;
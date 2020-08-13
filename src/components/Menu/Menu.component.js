import React from 'react';
import {
    MenuContainer,
    FirstContainer,
    StyledUl,
    CategoryContainer,
    StyledH3,
    Category,
    SecondContainer
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
                hola
            </SecondContainer>
        </MenuContainer>
    );
}

export default Menu;
import React from 'react';
import {MenuContainer, StyledUl, CategoryContainer, Category} from './Menu.styles';

const Menu = () => {

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
        <MenuContainer>
            <StyledUl>
                {
                    categoryItems.map(i => (
                        <CategoryContainer>
                            <Category>{i.name}</Category>
                            <input type="checkbox"/>
                        </CategoryContainer>
                    ))
                }
                
            </StyledUl>
        </MenuContainer>
    );
}

export default Menu;
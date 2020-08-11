import React from 'react';
import MainLayout from '../../layout/MainLayout/MainLayout.layout';
import {StyledFavoritesContainer} from './Favorites.styles';

const Favorites = ({children}) => {
    return(
        <StyledFavoritesContainer>
            <MainLayout>
                {children}
                <div>Favoritos</div>
            </MainLayout>
        </StyledFavoritesContainer>
    );
}

export default Favorites;
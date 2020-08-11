import React from 'react';
import MainLayout from '../../layout/MainLayout/MainLayout.layout';
import {StyledRecommendContainer} from './Recommend.styles';

const Recommend = ({children}) => {
    return(
        <StyledRecommendContainer>
            <MainLayout>
                {children}
                <div>Recomendar</div>
            </MainLayout>
        </StyledRecommendContainer>
    );
}

export default Recommend;
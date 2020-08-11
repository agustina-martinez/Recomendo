import React from 'react';
import MainLayout from '../../layout/MainLayout/MainLayout.layout';
import {StyledProfileContainer} from './Profile.styles';

const Profile = ({children}) => {
    return(
        <StyledProfileContainer>
            <MainLayout>
                {children}
                <div>Perfil</div>
            </MainLayout>
        </StyledProfileContainer>
    );
}

export default Profile;
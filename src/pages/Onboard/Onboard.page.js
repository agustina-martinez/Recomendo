import React from 'react';
import Header from '../../components/Header/Header.component';
import styled from 'styled-components';

const OnboardStyle = styled.div`
    background: #E5E5E5;
    width: 100%;
    height: 100vh;
`;

const Onboard = () => {
    return (
        <OnboardStyle>
            <Header/>
        </OnboardStyle>
    );
}

export default Onboard;
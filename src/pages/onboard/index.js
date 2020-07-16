import React from 'react';
import Header from '../../components/header';
import Button from '../../components/button';
import styled from 'styled-components';

const OnboardStyle = styled.div`
    background: #E5E5E5;
    width: 100%
    height: 100vh;
`;

const Onboard = () => {
    return (
        <OnboardStyle>
            <Header/>
            <Button/>
        </OnboardStyle>
    );
}

export default Onboard;
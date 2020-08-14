import React from 'react';
import Header from '../../components/Header/Header.component';
import Points from '../../components/Points/Points.component';
import {
    OnboardStyle,
    OnboardContainer,
    OnboardImgPhone
} from './Onboard.styles';

const Onboard = () => {

    return (
        <OnboardStyle>
            <Header/>
            <OnboardContainer>
                <OnboardImgPhone src="/assets/phone.png"/>
                <Points/>
            </OnboardContainer>
        </OnboardStyle>
    );
}

export default Onboard;
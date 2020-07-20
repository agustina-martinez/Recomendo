import React from 'react';
import Header from '../../components/Header/Header.component';
import {OnboardStyle, OnboardContainer, OnboardImgPhone, OnboardPoints, OnboardEachPoint} from './Onboard.styles';

const Onboard = () => {
    return (
        <OnboardStyle>
            <Header/>
            <OnboardContainer>
                <OnboardImgPhone src="/assets/phone.png"/>
                <OnboardPoints>
                    <OnboardEachPoint/>
                    <OnboardEachPoint/>
                    <OnboardEachPoint/>
                    <OnboardEachPoint/>
                </OnboardPoints>
            </OnboardContainer>
        </OnboardStyle>
    );
}

export default Onboard;
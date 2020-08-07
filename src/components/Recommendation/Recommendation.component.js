import React from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture.component';
import {RecommendationContainer} from './Recommendation.styles';

const Recommendation = ({name, width, height}) => {
    return (
        <RecommendationContainer style={{width: width, height: height}}>
            <ProfilePicture 
                width="3.5rem"
                height="3.5rem"
            />
            {name}
        </RecommendationContainer>
    );
}

export default Recommendation;
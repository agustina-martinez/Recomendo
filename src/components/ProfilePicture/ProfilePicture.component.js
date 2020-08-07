import React from 'react';
import {ProfileImage} from './ProfilePicture.styles';

const ProfilePicture = ({width, height}) => {
    return(
        <ProfileImage style={{width: width, height: height}}/>
    );
}

export default ProfilePicture;
import React from 'react';
import VideoContainer from '../../components/Video/Video.component';
import Form from '../../components/Form/Form.component';
import {SignupStyle} from './Signup.styles';

const SignUp = () => {
    return (
        <SignupStyle>
            <VideoContainer margin='0 1.5rem'/>
            <Form margin='0 1.5rem'/>
        </SignupStyle>
    );
}

export default SignUp;
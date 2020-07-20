import React from 'react';
import VideoContainer from '../../components/Video/Video.component';
import Form from '../../components/Form/Form.component';
import {SignupStyle} from './Signup.styles';

const SignUp = () => {
    return (
        <SignupStyle>
            <VideoContainer/>
            <Form/>
        </SignupStyle>
    );
}

export default SignUp;
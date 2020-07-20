import React from 'react';
import Input from '../Input/Input.component';
import Button from '../Button/Button.component';
import {FormStyle,
        TitlesFormContainer,
        TitleOne,
        TitleTwo,
        InputContainer,
        NoInputContainer,
        TermsContainer,
        TermsP,
        SignupP
    } from './Form.styles';

const Form = () => {
    return (
        <FormStyle>
            <TitlesFormContainer>
                <TitleOne>Crear una cuenta</TitleOne>
                <TitleTwo>Iniciar sesión</TitleTwo>
            </TitlesFormContainer>
            <Input placeholder="Username"/>
            <Input placeholder="Email" margin="1rem 0"/>
            <InputContainer>
                <Input placeholder="Password" width="48%"/>
                <Input placeholder="Confirm" width="48%"/>
            </InputContainer>
            <NoInputContainer>
                <TermsContainer>
                    <input type="checkbox"></input>
                    <TermsP>By creating an account, you agree to the Terms and Conditions and Privacy Policy</TermsP>
                </TermsContainer>
                    <Button buttonTittle="Crear una cuenta" width="100%" height="3rem" letterSpacing="-0.5px"/>
                    <SignupP>Or sign up with</SignupP>
                <div>
                    Social Media Icons
                </div>
            </NoInputContainer>
        </FormStyle>
    );
}

export default Form;
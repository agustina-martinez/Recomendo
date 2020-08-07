import React from 'react';
import {Link} from 'react-router-dom';
import Input from '../Input/Input.component';
import Button from '../Button/Button.component';
import IconsContainer from '../IconsContainer/Icons.component';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
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

const Form = ({margin}) => {
    return (
        <FormStyle style={{margin: margin}}>
            <TitlesFormContainer>
                <TitleOne>¡Bienvenido!</TitleOne>
                <Link to="/home" style={{'text-decoration': 'none'}}>
                    <TitleTwo>Iniciar sesión</TitleTwo>
                </Link>
            </TitlesFormContainer>
            <TermsContainer>
                <TermsP>Recuerda iniciar sesión con tu cuenta de Globant.</TermsP>
            </TermsContainer>
            <InputContainer>
                <Input
                    icon={<EmailIcon style={{position: "absolute", zIndex: "20", marginLeft: "1rem"}}/>}
                    placeholder="Email"
                    type="email"
                    margin="1rem 0"
                />
                <Input
                    icon={<LockIcon style={{position: "absolute", zIndex: "20", marginLeft: "1rem"}}/>}
                    placeholder="Password"
                    type="password"
                    width="100%"
                />
            </InputContainer>
            <NoInputContainer>
                <Link to="/home" style={{width:'100%', textDecoration: 'none'}}>
                    <Button
                        buttonTittle="Ingresar"
                        width="100%"
                        height="3rem"
                        letterSpacing="-0.5px"
                    />
                </Link>
            </NoInputContainer>
        </FormStyle>
    );
}

export default Form;

/*
<TermsContainer>
    <input type="checkbox"></input>
    <TermsP>By creating an account, you agree to the Terms and Conditions and Privacy Policy</TermsP>
</TermsContainer>
<Input placeholder="Username" type="text" icon={<PersonIcon style={{position: "absolute", zIndex: "20", marginLeft: "1rem"}}/>}/>
<Input placeholder="Confirm" type="password" width="75%" icon={<LockIcon style={{position: "absolute", zIndex: "20", marginLeft: "1rem"}}/>}/>
<SignupP>Or sign up with</SignupP>
<IconsContainer/>
*/ 
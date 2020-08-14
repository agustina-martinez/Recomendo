import React from 'react';
import Button from '../Button/Button.component';
import IconsContainer from '../IconsContainer/Icons.component';
import {Link} from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {
    HeaderStyle,
    LogoContainer,
    StarLogo,
    HeaderH1,
    HeaderH1Span,
    HeaderH3,
    HeaderP
} from './Header.styles';

const Header = () => {
    return(
        <HeaderStyle>
            <LogoContainer>
                <StarLogo src="assets/starlogo.png" alt="star logo"/>
                <HeaderH1><HeaderH1Span>R</HeaderH1Span>ecomendo</HeaderH1>
            </LogoContainer>
            <HeaderH3>Encuentra o pregunta recomendaciones fácilmente todos los días</HeaderH3>
            <HeaderP>Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet
                sodales nisi, quis iaculis nulla.</HeaderP>
            <Link to="/signup" style={{width: '10rem', textDecoration: 'none'}}><Button buttonTittle="UNIRME" icon={<AddCircleIcon/>}/></Link>
            <IconsContainer/>
        </HeaderStyle>
    );
}

export default Header;
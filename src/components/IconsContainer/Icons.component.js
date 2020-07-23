import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Container} from './Icons.styles';

const IconsContainer = () => {
    return (
        <Container>
            <FacebookIcon style={{cursor: 'pointer', width: '1.2rem'}}/>
            <TwitterIcon style={{cursor: 'pointer', width: '1.2rem'}}/>
            <LinkedInIcon style={{cursor: 'pointer', width: '1.2rem'}}/>
        </Container>
    );
}

export default IconsContainer;
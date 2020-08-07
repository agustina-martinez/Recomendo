import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import {ScoreContainer} from './Score.styles';

const Score = ({score, colorBackground}) => {
    return(
        <ScoreContainer style={{backgroundColor: colorBackground}}>
            <StarIcon style={{width: '1rem', color: '#18214D'}}/>
            <div style={{color: '#3E4462'}}>{score}</div>
        </ScoreContainer>
    );
}

export default Score;
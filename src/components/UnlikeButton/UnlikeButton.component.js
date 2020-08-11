import React, {useState} from 'react';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {UnlikeButton} from './UnlikeButton.styles';

const Unlike = () => {

    const [likeIsActive, setLikeIsActive] = useState(false);
    const [likeColor, setLikeColor] = useState('grey');

    const toggleLike = () => {
        if(!likeIsActive) {
            setLikeIsActive(true);
            setLikeColor('#5D58E9');
        } else{
            setLikeIsActive(false);
            setLikeColor('grey');
        }
    }

    return(
        <UnlikeButton onClick={toggleLike}>
            <ThumbDownIcon style={{color: likeColor, cursor: 'pointer', width: '1.2rem'}}/>
        </UnlikeButton>
    );
}

export default Unlike;
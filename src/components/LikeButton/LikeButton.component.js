import React, {useState} from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import {LikeButton} from './LikeButton.styles';

const Like = () => {

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
        <LikeButton onClick={toggleLike}>
            <ThumbUpIcon style={{color: likeColor, width: '1.2rem'}}/>
        </LikeButton>
    );
}

export default Like;
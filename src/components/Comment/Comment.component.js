import React from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture.component';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {
    CommentContainer,
    MainContainer,
    FirstContainer,
    SecondContainer,
    CommentP,
    Name,
    Date,
    Likes,
    LikesDescription
} from './Comment.styles';

const Comment = ({name, date, comment}) => {
    return(
        <CommentContainer>
            <ProfilePicture
                width="2.5rem"
                height="2.5rem"
                alt="profile photo"
            />
            <MainContainer>
                <FirstContainer>
                    <SecondContainer>
                        <Name>{name}</Name>
                        <Date> {date}</Date>
                    </SecondContainer>
                    <CommentP>{comment}</CommentP>
                </FirstContainer>
                <Likes>
                    <ThumbUpIcon style={{color: 'grey', cursor: 'pointer', width: '1.2rem'}}/>
                    <ThumbDownIcon style={{color: 'grey', cursor: 'pointer', width: '1.2rem'}}/>
                    <LikesDescription>Reply</LikesDescription>
                </Likes>
            </MainContainer>
        </CommentContainer>
    );
}

export default Comment;
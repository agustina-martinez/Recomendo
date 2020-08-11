import React from 'react';
import Like from '../LikeButton/LikeButton.component';
import Unlike from '../UnlikeButton/UnlikeButton.component';
import ProfilePicture from '../ProfilePicture/ProfilePicture.component';
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
                    <Like/>
                    <Unlike/>
                    <LikesDescription>Reply</LikesDescription>
                </Likes>
            </MainContainer>
        </CommentContainer>
    );
}

export default Comment;
import React from 'react';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import StarIcon from '@material-ui/icons/Star';
import {Link} from 'react-router-dom';
import {
    MainContainer,
    TopContainer,
    CategoryContainer,
    Category,
    Image,
    Title,
    BottomContainer,
    ScoreContainer,
    User
} from './Card.styles';

const Card = ({link, linkStyle, category, src, key, alt, title, user, score}) => {
    return (
        <MainContainer>
            <TopContainer>
                <BottomContainer>
                    <ScoreContainer>
                        <StarIcon style={{width: '1rem'}}/>
                        <div>{score}</div>
                    </ScoreContainer>
                    <User>{user}</User>
                </BottomContainer>
                <BookmarkIcon/>
            </TopContainer>
            <Image src={src} key={key} alt={alt}/>
            <Link to={link} style={linkStyle}><Title>{title}</Title></Link>
            <CategoryContainer>
                <Category>{category}</Category>
                <Category>{category}</Category>
                <Category>{category}</Category>
            </CategoryContainer>
        </MainContainer>
    );
}

export default Card;
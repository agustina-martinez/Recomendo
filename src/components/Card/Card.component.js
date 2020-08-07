import React from 'react';
import Score from '../Score/Score.component';
import Category from '../Category/Category.component';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import {Link} from 'react-router-dom';
import {
    MainContainer,
    TopContainer,
    CategoryContainer,
    Image,
    Title,
    BottomContainer,
    User
} from './Card.styles';

const Card = ({link, linkStyle, category, src, key, alt, title, user, width, height, score, colorBackground}) => {
    return (
        <MainContainer style={{width: width, height: height}}>
            <TopContainer>
                <BottomContainer>
                    <Score score={score} colorBackground={colorBackground}/>
                    <User>{user}</User>
                </BottomContainer>
                <BookmarkIcon style={{fontSize: '2rem', color: '#5D58E9'}}/>
            </TopContainer>
            <Image src={src} key={key} alt={alt}/>
            <Link to={link} style={linkStyle}><Title>{title}</Title></Link>
            <CategoryContainer>
                <Category category={category}/>
                <Category category={category}/>
                <Category category={category}/>
            </CategoryContainer>
        </MainContainer>
    );
}

export default Card;
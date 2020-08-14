import React from 'react';
import Score from '../Score/Score.component';
import Category from '../Category/Category.component';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import {Link} from 'react-router-dom';
import {
    MainContainer,
    TopContainer,
    CategoryContainer,
    LinkImg,
    Image,
    Title,
    BottomContainer,
    User
} from './Card.styles';

const Card = (props) => {
    return (
        <MainContainer
            style={{
                width: props.width,
                height: props.height
            }}
        >
            <TopContainer>
                <BottomContainer>
                    <Score score={props.score} colorBackground={props.colorBackground}/>
                    <User>{props.user}</User>
                </BottomContainer>
                <BookmarkIcon style={{fontSize: '2rem', color: '#5D58E9'}}/>
            </TopContainer>
            <LinkImg to={props.imgLink}><Image src={props.src} key={props.key} alt={props.alt}/></LinkImg>
            <Link to={props.link} style={props.linkStyle}><Title>{props.title}</Title></Link>
            <CategoryContainer>
                <Category category={props.category}/>
                <Category category={props.category}/>
                <Category category={props.category}/>
            </CategoryContainer>
        </MainContainer>
    );
}

export default Card;
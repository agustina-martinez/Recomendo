import React from 'react';
import cards from '../../mocks/CardMock.json';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import StarIcon from '@material-ui/icons/Star';
import {MainContainer,
        CategoryContainer,
        Category,
        Image,
        Title,
        BottomContainer,
        ScoreContainer,
        Score
    } from './Card.styles';

const Card = () => {
    return (
        <React.Fragment>
            {cards.map(card => {
                return(
                    <MainContainer>
                        <CategoryContainer>
                            <Category>{card.category}</Category>
                            <BookmarkIcon/>
                        </CategoryContainer>
                        <Image src={card.img} alt={card.title}/>
                        <Title>{card.title}</Title>
                        <BottomContainer>
                            <label>{card.person}</label>
                            <ScoreContainer>
                                <StarIcon style={{width: '1rem'}}/>
                                <Score>{card.score}</Score>
                            </ScoreContainer>
                        </BottomContainer>
                    </MainContainer>
                );
            })}
        </React.Fragment>
    );
}

export default Card;
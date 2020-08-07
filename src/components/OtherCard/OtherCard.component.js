import React from 'react';
import Categoty from '../Category/Category.component';
import Score from '../Score/Score.component';
import Button2 from '../Button2/Button2.component';
import{
    OtherCardContainer,
    OtherCardTopContainer,
    OtherCardTitle,
    OtherCardTComment,
    OtherCardBottomContainer,
    DataContainer,
    DataContainer1,
    DataContainer2
} from './OtherCard.styles';

const OtherCard = ({score, width, height, otherCardTitle, otherCardComment, button2Tittle, margin}) => {
    return(
        <OtherCardContainer style={{width: width, height: height}}>
            <OtherCardTopContainer>
                <Categoty category="random"/>
                <Score score={score}/>
            </OtherCardTopContainer>
            <OtherCardTitle>{otherCardTitle}</OtherCardTitle>
            <OtherCardTComment>{otherCardComment}</OtherCardTComment>
            <OtherCardBottomContainer>
                <DataContainer>
                    <DataContainer1>
                        <p>3512572845</p>
                        <p>Calle Falsa 123</p>
                        <p>lucas.ortiz@globant.com</p>
                    </DataContainer1>
                    <DataContainer2>
                        <p>www.yogarelajante.com</p>
                        <p>Open from 10am to 5pm</p>
                        <p>Open from 10am to 5pm</p>
                    </DataContainer2>
                </DataContainer>
                <Button2
                    button2Tittle={button2Tittle}
                    margin={margin}
                />
            </OtherCardBottomContainer>
        </OtherCardContainer>
    ); 
}

export default OtherCard;
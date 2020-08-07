import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import MainLayout from '../../layout/MainLayout/MainLayout.layout';
import Card from '../../components/Card/Card.component';
import OtherCard from '../../components/OtherCard/OtherCard.component';
import Comment from '../../components/Comment/Comment.component';
import Recommendation from '../../components/Recommendation/Recommendation.component';
import CommentsMock from '../../mocks/CommentMock.json';
import {
    StyledDetailContainer,
    MainContainerDetail,
    Box1,
    Box2,
    Box3,
    RecommendationsContainer,
    TitleRecommendations,
    CommentsContainer,
    TitleComments
} from './Detail.styles';

const Detail = () => {

    const [images, setImages] = useState([]);

    const {id} = useParams();

    const getData = async () => {
        const res = await fetch(`https://api.unsplash.com/photos?id=${id}&client_id=ZJIb9mKmajs7KbwSRFk3afyEvZm52fxN2tnYVAKYkNA`);
        const data = await res.json();
        setImages(data);
    }

    console.log(images);

    useEffect(() => {
        getData();
    }, []);

    const comments = CommentsMock.map(c => (
        <Comment
            name={c.name}
            comment={c.comment}
            date={c.date}
        />
    ));

    const recommendations = CommentsMock.map(c => (
        <Recommendation
            name={c.name}
            width="7rem"
            height="8rem"
        />
    ));

    return (
        <StyledDetailContainer>
            <MainLayout>
                <MainContainerDetail>
                    <Box1>
                        <OtherCard
                            score="4.5"
                            width="88%"
                            height="auto"
                            otherCardTitle="Yoga relajante"
                            otherCardComment="Muy buena terapia de #yoga en Bogotá, al lado del Salitre,
                            los precios son muy #económicos, a los Globers nos dan #descuentos de 5%."
                            button2Tittle="Contactar"
                            margin="3rem 0 0 0"
                        />
                    </Box1>
                    <Box2>
                        <Card 
                            width="98%"
                            height="20rem"
                            linkStyle={{textDecoration: 'none', color:'#000'}}
                            category="random"
                            src={ "/assets/withoutimage.png"}
                            key="1"
                            alt="random"
                            title={"Raphael Nast"}
                            user={"Raphael Nast"}
                            score="5.0"
                            colorBackground="#EFF2F6"
                        />
                        <Box3>
                            <TitleRecommendations>Recomendado por</TitleRecommendations>
                            <RecommendationsContainer>
                                {recommendations}
                            </RecommendationsContainer>
                        </Box3>
                        <CommentsContainer>
                            <TitleComments>5 comentarios</TitleComments>
                            {comments}
                        </CommentsContainer>
                    </Box2>
                </MainContainerDetail>
            </MainLayout>
        </StyledDetailContainer>
    );
}

export default Detail;
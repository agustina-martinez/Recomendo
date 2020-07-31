import React, {useState, useEffect} from 'react';
// import images from '../../mocks/CardMock.json';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import StarIcon from '@material-ui/icons/Star';
import {Link} from 'react-router-dom';
import {getFetchData} from '../../services/Images.services';
import {
    MainContainer,
    CategoryContainer,
    Category,
    Image,
    Title,
    BottomContainer,
    ScoreContainer,
    Score
} from './Card.styles';

const Card = () => {

    const [images, setImages] = useState([]);

    const getData = async () => {
        getFetchData().then(res => {
            setImages(...images, res);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    console.log(images);

    return (
        <React.Fragment>
            {images.map(img => {
                return(
                    <MainContainer>
                        <CategoryContainer>
                            <Category>random</Category>
                            <BookmarkIcon/>
                        </CategoryContainer>
                        <Image src={img.urls.regular ? img.urls.regular : "/assets/withoutimage.png"} key={img.id} alt={img.alt_description}/>
                        <Link to="/detail" style={{textDecoration: 'none', color:'#000'}}><Title>{img.alt_description}</Title></Link>
                        <BottomContainer>
                            <label>{img.user.name}</label>
                            <ScoreContainer>
                                <StarIcon style={{width: '1rem'}}/>
                                <Score>5.0</Score>
                            </ScoreContainer>
                        </BottomContainer>
                    </MainContainer>
                );
            })}
        </React.Fragment>
    );
}

export default Card;
import React, {useState, useEffect} from 'react';
import MainLayout from '../../layout/MainLayout/MainLayout.layout';
import Card from '../../components/Card/Card.component';
import {getFetchData} from '../../services/Images.services';
import {StyledHomeContainer, CardContainer, Grid, Column} from './Home.styles';
//import Masonry from 'react-masonry-css';

const Home = () => {

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

  const cards = images.map(img => (
    <Card 
      link={`/detail/${img.id}`}
      linkStyle={{textDecoration: 'none', color:'#000'}}
      category="random"
      src={img.urls.regular ? img.urls.regular : "/assets/withoutimage.png"}
      key={img.id}
      alt={img.alt_description}
      title={img.alt_description}
      user={img.user.name}
      score="5.0"
      colorBackground="white"
    />
  ));

  return (
    <StyledHomeContainer>
      <MainLayout>
        <CardContainer>
          {cards}
        </CardContainer>
      </MainLayout>
    </StyledHomeContainer>
  );
}

export default Home;

/*

const breakpointsColumns = {
    default: 4,
    1200: 3,
    992: 3,
    768: 2,
    576: 1
  }

<Masonry
            breakpointsColumns={breakpointsColumns}
            className={<Grid/>}
            columnClassName={<Column/>}
            >
              {cards}
            </Masonry>

*/
import React, {useState, useEffect} from 'react';
import MainLayout from '../../layout/MainLayout/MainLayout.layout';
import Card from '../../components/Card/Card.component';
import MasonryLayout from '../../components/Masonry/Masonry.component';
import {getFetchData} from '../../services/Images.services';
import {StyledHomeContainer} from './Home.styles';

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

  const cards = images.map(img => (
    <Card
      imgLink={`/detail/${img.id}`}
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
          <MasonryLayout>
            {cards}
          </MasonryLayout>
      </MainLayout>
    </StyledHomeContainer>
  );
}

export default Home;
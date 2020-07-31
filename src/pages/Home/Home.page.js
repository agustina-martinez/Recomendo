import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {StyledHomeContainer} from './Home.styles';
import MainLayout from '../../layout/MainLayout/MainLayout.layout';
import CardContainer from '../../components/CardsContainer/CardContainer.component';

const Home = () => {
  const {id} = useParams();

  return (
    <StyledHomeContainer>
      <MainLayout>
        <CardContainer/>
      </MainLayout>
    </StyledHomeContainer>
  );
}

export default Home;


/*
import Navbar from '../../components/Navbar/Navbar.component';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard.component';
import TitlePage from '../../components/TitlePage/TitlePage.component';
import Logo from '../../components/Logo/Logo.component';

<div>
  <Logo/>
</div>
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <TitlePage name="Recomendados"/>
  <div style={{ paddingTop: 12 }}>
    <Navbar/>
  </div>
</div>
<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30}}>
  <div style={{ display: 'flex'}}>
    <CategoriesCard name="Nuevos"/>
    <CategoriesCard name="Destacados"/>
    <CategoriesCard name="Popular"/>
    <CategoriesCard name="Tendencia"/>
    <CategoriesCard name="En oferta"/>
  </div>
  <div>
    <input style={{ border: '2px solid #345DEE', borderRadius: 8, height: 40, width: 268, outline: 'none', fontSize: 24 }} />
  </div>
</div>
*/
import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import MainLayout from '../../layout/MainLayout/MainLayout.layout';
import {StyledDetailContainer} from './Detail.styles';

const Detail = () => {

    const {id} = useParams();

    const getData = async () => {
        fetch(`https://api.unsplash.com/photos/?client_id=ZJIb9mKmajs7KbwSRFk3afyEvZm52fxN2tnYVAKYkNA/${id}`);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <StyledDetailContainer>
            <MainLayout>
                
            </MainLayout>
        </StyledDetailContainer>
    );
}

export default Detail;
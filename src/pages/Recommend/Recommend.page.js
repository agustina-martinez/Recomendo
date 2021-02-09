import React from 'react';
import MainLayout from '../../layout/MainLayout/MainLayout.layout';
import {StyledRecommendContainer, StyledTest1, StyledTest2, StyledTest3, StyledColumn1, Button1, StyledTest4 } from './Recommend.styles';

const Recommend = ({children}) => {
    return(
        <StyledRecommendContainer>
            <MainLayout>
                {children}
                <StyledTest1>
                    <StyledTest2>
                        <h3>¿Que quieres recomendar?</h3>
                        <p>Elige la categoria que ayude a los Globers a encontrar tu recomendacion</p>
                        <StyledTest3>
                            <StyledColumn1>
                                <div>Hoteles</div>
                                <div>Cajeros Automaticos</div>
                                <div>Salones de belleza</div>
                                <div>Alquiler de automotores</div>
                            </StyledColumn1>
                            <StyledColumn1>
                                <div>Gasolina</div>
                                <div>Hospitales y clinicas</div>
                                <div>Bibliotecas</div>
                                <div>Correo y envios</div>
                            </StyledColumn1>
                            <StyledColumn1>
                                <div>Lavadero de autos</div>
                                <div>Tintorerias</div>
                                <div>Carga de vehiculos</div>
                            </StyledColumn1>
                            <StyledColumn1>
                                <div>Estacionamiento</div>
                                <div>Farmacias</div>
                            </StyledColumn1>
                        </StyledTest3>
                    </StyledTest2>
                    <StyledTest4>
                        <Button1>SIGUIENTE </Button1>

                    </StyledTest4>
                </StyledTest1>
            </MainLayout>
        </StyledRecommendContainer>
    );
}

export default Recommend;
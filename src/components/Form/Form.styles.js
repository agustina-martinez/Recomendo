import styled, {css} from 'styled-components';

export const FormStyle = styled.div(({theme}) => {
    return css`
        background-color: ${theme.colors.white};
        border-radius: 8px;
        font-family: ${theme.typography.fonts.primary};
        width: 35%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
    `;
});

export const TitlesFormContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 1.8rem;
`;

export const TitleOne = styled.p(({theme}) => {
    return css`
        font-weight: 600;
        line-height: 30px;
        font-size: 22px;
        color: ${theme.colors.points.blue};
    `;
});

export const TitleTwo = styled.p(({theme}) => {
    return css`
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: -0.4px;
        color: ${theme.colors.primary.light3};
    `;
});

export const InputContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
`;

export const NoInputContainer = styled.div`
    margin: 1rem 0;
    width: 80%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const TermsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const TermsP = styled.p(({theme}) => {
    return css`
        width: 90%;
        color: ${theme.colors.primary.dark3};
        font-size: 1.1rem;
        line-height: 1.5rem;
        letter-spacing: -0.3px;
    `;
});

export const SignupP = styled.p(({theme}) => {
    return css`
        color: ${theme.colors.primary.dark3};
        letter-spacing: -0.4px;
        font-size: 0.9rem;
    `;
});
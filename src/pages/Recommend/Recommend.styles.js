import styled, { css } from 'styled-components';

export const StyledRecommendContainer = styled.div`
    max-width: 90%;
    margin: 0 auto;
`;

export const StyledTest1 = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 60px;
`

export const StyledTest2 = styled.div(({ theme }) => css`
    text-align: center;
    font-family: ${theme.typography.fonts.primary};
    font-size: 20px;
    width: 805px;
    height: 310px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding-top: 20px;
    margin-bottom: 20px;

    > h3 {
        margin-bottom: 30px;
    }

    > p {
        margin-bottom: 40px;
    }
`)

export const StyledTest3 = styled.div`
    display: flex;
    justify-content: center;
`

export const StyledColumn1 = styled.div`
    width: 20%;
    margin-right: 5px;
    display: flex;
    flex-direction: column;

    > div {
        width: auto;
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 20px;
        padding: 5px 10px;
        margin-bottom: 5px;
        font-size: 14px;
        &:hover {
            cursor: pointer;
            background-color: rgba(170,167,242,.3);
        }
    }
`;

export const StyledTest4 = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 805px;
`

export const Button1 = styled.button(({ theme }) => css`
    font-family: ${theme.typography.fonts.primary};
    width: 146px;
    height: 30px;
    border-radius: 9px;
    background: #AAA7F2;
    border: none;
    color: #fff;
    font-size: 16px;
`)
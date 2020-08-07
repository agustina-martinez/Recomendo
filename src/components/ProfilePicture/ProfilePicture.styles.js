import styled, {css} from 'styled-components';

export const ProfileImage = styled.img(({theme}) => {
    return css`
        border-radius: 50px;
        background-color: ${theme.colors.primary['light-50']};
    `;
});
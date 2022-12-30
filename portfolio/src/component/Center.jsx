import styled from 'styled-components';

export const Center = styled.div`
    color: ${({color}) => color ?? '#FFFFFF'};
    display: flex;
    justify-content: center;
    grid-column: ${({gc}) => gc ?? 'auto'};
`;
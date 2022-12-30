import styled from 'styled-components';

export const NavBar = styled.nav`
    background-color: ${({backgroundColor}) => backgroundColor ?? '#000000'};
    color: ${({color}) => color ?? 'white'};
    font-size: 25px;
    padding: 0.25em 0.25em;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.1em solid;
`;
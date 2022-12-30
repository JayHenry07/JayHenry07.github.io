import styled from 'styled-components';

export const NavLink = styled.a`
    color: inherit;
    text-decoration: none;
    transition: color 0.25s;
    
    &:hover {
        color: ${({transitionColor}) => transitionColor ?? 'lightgray'};
    }
`;
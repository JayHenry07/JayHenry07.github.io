import styled from 'styled-components';
import { Center } from './Center';

const CardLink = styled.a`
    background-color: gray;
    border-radius: 0.5em;
    text-decoration: none;
    color: white;

    &:hover {
        background-color: lightgray;
        color: black;
    }
`;

const CardImage = styled.img`
    padding-top: 2rem;
    width: ${({width}) => width ?? '50px'};
`;

const CardTitle = styled.h3`
    font-size: 2rem;
`;

const CardRole = styled.p`
    font-style: italic;
`;

export const ProjectCard = ({ link, img, alt, title, role, width }) => {
    return (
        <CardLink target='_blank' href={link}>
            <Center><CardImage width={width} src={img} alt={alt} /></Center>
            <Center><CardTitle>{title}</CardTitle></Center>
            <Center><CardRole>Role:{role}</CardRole></Center>
        </CardLink>
    );
}
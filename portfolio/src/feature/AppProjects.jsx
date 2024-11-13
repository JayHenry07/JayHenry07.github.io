import styled from 'styled-components';
import { Center } from '../component/Center';
import { ProjectCard } from '../component/ProjectCard';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 4rem;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    margin-bottom: 6rem;
`;

export const AppProjects = () => {
    return (
        <>
            <Center><h2 style={{borderBottom: '0.05em solid', padding: '0 10em'}}>Projects</h2></Center>
            <Grid>
                <ProjectCard
                    link='https://github.com/JayHenry07/BlackJack'
                    img='https://github.com/JayHenry07/BlackJack/blob/main/Sprites/Card_Back.png?raw=true'
                    alt='Blackjack'
                    title='Blackjack'
                    role='Sole Creator'
                />
                <ProjectCard
                    link='https://github.com/cop4331-12/cop4331-contact-manager'
                    img='https://raw.githubusercontent.com/cop4331-12/cop4331-contact-manager/master/static/favicon.ico'
                    alt='Contact Manager'
                    title='Contact Manager'
                    role='Database/API'
                />
                <ProjectCard
                    link='https://github.com/COP4331-Group20-Sum2021/Midpoint'
                    img='https://raw.githubusercontent.com/COP4331-Group20-Sum2021/Midpoint/main/web/public/favicon.ico'
                    alt='Midpoint'
                    title='Midpoint'
                    role='Database/API/Algorithm Creation'
                />
                <ProjectCard
                    link='https://github.com/JamieHenry/Project1-FlightService'
                    img='https://github.com/JamieHenry/Project1-FlightService/blob/main/web/src/assets/airplane.png?raw=true'
                    alt='FlightService'
                    title='Flight Service'
                    role='Sole Creator'
                    width='60px'
                />
                <ProjectCard
                    link='https://github.com/JamieHenry/Project2-TelecomPortal'
                    img='https://github.com/JamieHenry/Project2-TelecomPortal/blob/main/web/src/assets/images/jvw-logo.png?raw=true'
                    alt='TelecomPortal'
                    title='Telecom Portal'
                    role='Database/API'
                    width='60px'
                />
                <ProjectCard
                    link='https://www.linkedin.com/company/bladedocs'
                    img='https://jayhenry07.github.io/bladedocs-app-icon.png'
                    alt='BladeDocs'
                    title='BladeDocs'
                    role='Sole Mobile Developer'
                    width='60px'
                />
            </Grid>
        </>
    );
}

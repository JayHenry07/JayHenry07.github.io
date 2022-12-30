import { AppAbout } from '../feature/AppAbout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AppNavBar } from '../feature/AppNavBar';
import { AppProjects } from '../feature/AppProjects';

export const Landing = () => {
    return (
        <>
            <AppNavBar />
            <Container>
                <Row>
                    <Col style={{height: '60vh', marginTop: '10em'}}><AppAbout /></Col>
                    <Col><AppProjects /></Col>
                </Row>
            </Container>
        </>
    );
}
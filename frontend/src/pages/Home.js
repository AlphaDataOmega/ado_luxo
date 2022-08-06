import React from "react";
import Navigation from "../components/navBar.js"
import DAOForm from "../components/DAOForm/DAOForm";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <div>
            <Container fluid>
                <Navigation></Navigation>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <h1 className="display-4">Create A Business Class DAO</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DAOForm></DAOForm>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
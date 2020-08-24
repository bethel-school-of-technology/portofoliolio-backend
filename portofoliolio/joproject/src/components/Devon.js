import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Devon (props){
    return (
<Jumbotron className= 'bg-transparent jumbotron-fluid p-0'>
    <Container fluid={true}>
        <Row className= 'justify-content-center py-5'>
            <Col md={8} sm={12}>
    {props.title && <h1 className= 'display-3 font-weight-bolder'>{props.title}</h1>}
    {props.subTitle && <h3 className= 'display-6 font-weight-bold'>{props.subTitle}</h3>}
    {props.text && <h3 className= 'lead font-weight-light'> {props.text}</h3>}
            </Col>
        </Row>
    </Container>
</Jumbotron>
    );
}
export default Devon;
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';

function Footer (){
  return(
      <Footer className='mt-5'>
    <Container fluid={true}>
    <Row className='border-top justify-content-between p-3'>
<Col className='p-0' md={3} sm={12}>
    Hope Coders Project
</Col>
<Col className='p-0 d-flex justify-content-end' md={3}>
This is my Site
</Col>
    </Row>
</Container>
</Footer>
      
  ); 
}


export default Footer;


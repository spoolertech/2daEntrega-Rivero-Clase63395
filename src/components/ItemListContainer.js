import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';


function ItemListContainer({ greeting }) {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <div className="item-list-container">
            <h2>{greeting}</h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemListContainer;

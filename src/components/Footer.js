import React from 'react';
import {Container, Row, Col} from 'react-bootstrap/';

export default function Footer() {
  return (
    <Container as={`footer`}>
      <Row>
        <Col md={6}>
          <p>Copyright 2019-2020, H. Adonis Miller</p>
          <p>This is a community-focused project not intended for use by police, military personnel or any adjacent third party affiliates or contractors; it is not intended to aid in surveillence of our communities in any capacity.</p>
          <p><a href="">Source</a></p>
          <p><a href="">Report an Issue</a></p>
        </Col>
      </Row>
    </Container>
  );
}

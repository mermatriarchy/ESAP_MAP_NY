import React from 'react';
import {Container, Row, Col} from 'react-bootstrap/';

export default function Footer() {
  return (
    <Container as={`footer`} className="bg-dark" fluid={true}>
      <Row>
        <Col md={6}>
          <p className="text-white">
            Copyright 2019-2020, H. Adonis Miller
            <br/>
            <span className="font-weight-light">This is a community-focused project not intended for use by police, military personnel or any adjacent third party affiliates or contractors; it is not intended to aid in surveillence of our communities in any capacity.</span></p>
        </Col>
      </Row>
      <Row>
        <Col>
          <dl>
            <dd><a href="" className="text-info">Source</a></dd>
            <dd><a href="" className="text-info">Report a technical issue</a></dd>
          </dl>
        </Col>
      </Row>
    </Container>
  );
}

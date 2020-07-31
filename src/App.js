import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

import UvPie from './uv-pie/uv-pie';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={7} xs={12}>
            <UvPie></UvPie>
          </Col>
          <Col md={5} xs={12}>
              <img src={logo} className="App-logo" alt="logo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import { Form, Row, Col } from 'react-bootstrap';

import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';

const Signin = () => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: 50 }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Input
                label="Email address"
                placeholder="Email address"
                value=""
                type="email"
                onChange={() => { }}
              />

              <Input
                label="Password"
                placeholder="Password"
                value=""
                type="password"
                onChange={() => { }}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

      </Container>
    </Layout>
  );
};

export default Signin;
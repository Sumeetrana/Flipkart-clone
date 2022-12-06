import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import { Form, Row, Col } from 'react-bootstrap';

import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';

const Signup = () => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: 50 }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First name"
                    placeholder="First name"
                    value=""
                    type="text"
                    onChange={() => { }}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last name"
                    placeholder="Last name"
                    value=""
                    type="text"
                    onChange={() => { }}
                  />
                </Col>
              </Row>
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

export default Signup;
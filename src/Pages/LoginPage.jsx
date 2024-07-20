import React from "react";
import "./loginpage.css"; // Import your CSS file for styling
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const LoginPage = () => {
  return (
    <Container className="login-container">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <div className="login-box">
            <div className="login-heading">
              <h2>Login</h2>
            </div>
            <Form>
              <Form.Group controlId="formEmailMobile" className="form-group">
                <Form.Control
                  type="text"
                  placeholder=" " // Keep placeholder empty to trigger the floating effect
                  className="form-control"
                />
                <Form.Label className="form-label">
                  Enter Email or Mobile number
                </Form.Label>
              </Form.Group>

              <p className="terms-text">
                By continuing, you agree to <a href="#">Terms of Use</a> and{" "}
                <a href="#">Privacy Policy</a>.
              </p>

              <Button variant="primary" type="submit" className="btn-block">
                Request OTP
              </Button>
            </Form>

            {/* New user link */}
            <p className="new-user-link">
              New user?{" "}
              <a href="#" className="create-account-link">
                Create an account
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;

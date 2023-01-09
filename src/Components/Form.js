import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import "../Styles/form.css";

function EmergencyForm() {
  return (
    <>
      <Container className="form">
        <Row>
          <Col>
            <Form class="EmForm">
              <Form.Group className="mb-3">
              <InputField>
                <Form.Label >Pet Name</Form.Label>
                <Form.Control type="text" autocomplete="off" class="EmFormInput"/>
                </InputField>
              </Form.Group>
              

              <Form.Group className="mb-3">

                <Form.Label class="EmFormLabel">Relationship</Form.Label>
                <Form.Control type="text" autocomplete="off" />

              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label class="EmFormLabel">First Name</Form.Label>
                <Form.Control type="text" autocomplete="off" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label class="EmFormLabel">Last Name</Form.Label>
                <Form.Control type="text" autocomplete="off" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label class="EmFormLabel">Pri Phone</Form.Label>
                <Form.Control type="text" autocomplete="off" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label class="EmFormLabel">Sec Phone</Form.Label>
                <Form.Control type="text" autocomplete="off" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label class="EmFormLabel">Email address</Form.Label>
                <Form.Control type="email" autocomplete="off" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
          
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
}

export default EmergencyForm;

const InputField = styled.div`

label{
    width: 124px;
height: 25px;
left: 359px;
top: 167px;
font-family: "omnes", sans-serif;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
text-align: left;
color: #FFFFFF;
text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
}

input{
    box-sizing: border-box;


width: 411px;
height: 40px;
left: 390px;
top: 192px;

background: rgba(255, 255, 255, 0.2);
border: 2px solid rgba(255, 255, 255, 0.5);
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(10px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 11px;
}
`
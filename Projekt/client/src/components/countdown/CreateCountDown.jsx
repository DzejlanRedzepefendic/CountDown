import React from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/CreateCountDown.css'

const CreateCountDown = () => {
  return (
    <div className="form-wrapper">
      <div className="form-wrapper2">
        <Form>
          <Form.Group className="mb-3" controlId="formText1">
            <Form.Label>Title of Movie:</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formText2">
            <Form.Label>Url of image:</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formText3">
            <Form.Label>Genre:</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTextarea">
            <Form.Label>About the movie:</Form.Label>
            <Form.Control as="textarea" style={{ height: '12vh' }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNumber">
            <Form.Label>IMDB Score:</Form.Label>
            <Form.Control type="number" step="0.1" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Air Date:</Form.Label>
            <Form.Control type="date" min="2022-01-01" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formDate">
            <Row>
              <Col>
                <Form.Label>Hours:</Form.Label>
                <Form.Control type="number" min="0" max="23" />
              </Col>
              <Col>
                <Form.Label>Minutes:</Form.Label>
                <Form.Control type="number" min="0" max="59" />
              </Col>
            </Row>
          </Form.Group>
          <Button variant="primary" >Subimt</Button>
        </Form>
      </div>
    </div >
  );
};

export default CreateCountDown;

import React from "react";
import { Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Resst_view() {
    return (
        <>
            <Row className="d-flex justify-content-center mt-5 mb-5">
                <Col md={1}></Col>
                <Col md={3}>
                    <img
                        className="rounded-5"
                        height={"500px"}
                        src="https://www.recipetineats.com/wp-content/uploads/2022/08/Stack-of-cheeseburgers.jpg"
                        alt=""
                    />
                </Col>
                <Col md={7} className="px-5">
                    <hr />
                    <h3 className="text-center">
                        <span className="text-warning">RESTAURANT </span>DETAILS
                    </h3>
                    <hr />
                    <ListGroup>
                        <ListGroup.Item>
                            <h4 className="text-center p-4">
                                {" "}
                                Restaurant Name{" "}
                            </h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span className="fs-5">Neignbourhood</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span className="fs-5">Cushine Type</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span className="fs-5">Address</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="text-center p-3">
                            <button className="btn btn-warning">
                                Operating Hours
                            </button>

                            <Modal.Dialog>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <p>Modal body text goes here.</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="secondary">Close</Button>
                                    <Button variant="primary">
                                        Save changes
                                    </Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </ListGroup.Item>
                    </ListGroup>
                    <hr />
                </Col>

                <Col md={1}></Col>
            </Row>
        </>
    );
}

export default Resst_view;

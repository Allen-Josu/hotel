import React from "react";
import { Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import RestReview from "../components/RestReview";

function Resst_view() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Row className="d-flex justify-content-center mt-5 mb-5">
                <Col md={1}></Col>
                <Col md={3}>
                    <img
                        className="rounded-5"
                        height={"500px"}
                        width={"100%"}
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Hamburger_%2812164386105%29.jpg"
                        alt="no-image"
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
                        <ListGroup.Item className="text-center p-3 mb-2 ">
                            <button
                                className="btn btn-warning me-4"
                                onClick={handleShow}
                            >
                                Operating Hours
                            </button>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Operating Hours</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <ListGroup>
                                        <ListGroup.Item>
                                            <p>Monday : 9:00am to 10:00pm</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <p> Tuesday : 9:00am to 10:00pm </p>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            {" "}
                                            <p> Wednsday : 9:00am to 10:00pm</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <p> Thursday: 9:00am to 10:00pm</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            {" "}
                                            <p>Friday: 9:00am to 10:00pm</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <p> Saturday: 9:00am to 10:00pm</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            {" "}
                                            <p>Sunday: 9:00am to 10:00pm</p>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={handleClose}
                                    >
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <RestReview />
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

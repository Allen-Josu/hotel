import React from "react";
import { CardText, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ReseCard() {
    return (
        <>
            <Link to="restaurant_view"style={{textDecoration:"none"}}>
                <Card style={{ width: "100%" }}>
                    <Card.Img
                        height={"350px"}
                        variant="top"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Hamburger_%2812164386105%29.jpg"
                    />
                    <Card.Body>
                        <Card.Title className="text-center text-warning">
                            Card Title
                        </Card.Title>{" "}
                        <hr />
                        <Row className="p-4">
                            <Col className="ms-4">
                                {" "}
                                <CardText>Some quick</CardText>
                            </Col>
                            <Col className="ms-4">
                                {" "}
                                <CardText>Some quick</CardText>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Link>
        </>
    );
}

export default ReseCard;

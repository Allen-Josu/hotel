import React from "react";
import { Col, Row } from "react-bootstrap";
import ReseCard from "../components/ReseCard";

function Home() {
    return (
        <>
            <Row>
                <Col className="px-5 py-3" sm={6} md={4}>
                    <ReseCard />
                </Col>
            </Row>
        </>
    );
}

export default Home;

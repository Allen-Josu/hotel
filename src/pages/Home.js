import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ReseCard from "../components/ReseCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurant } from "../redux/restaurantSlice";

function Home() {

    const allRestaurant = useSelector((state)=>state.restaurantSlice.allRestaurant)
    console.log(allRestaurant);
    const dispatch = useDispatch();
    useEffect(
        () => {dispatch(fetchRestaurant())}
        ,[])

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

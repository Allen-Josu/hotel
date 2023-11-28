import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Header() {
    return (
        <>
            <Navbar varient="dark">
                <Container >
                    <Navbar.Brand href="/"className="d-flex">
                        <img
                            src="https://www.logolynx.com/images/logolynx/2f/2fe83a33c4d0888fbb9476d0deda5710.png"
                            alt=""
                            width={"50"}
                            height={50}
                            className="d-inline-block align-top"
                        />
                        <h5 className="mt-3 ms-3">
                            {" "}
                            <span className="text-warning">Food</span> Circle
                        </h5>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;

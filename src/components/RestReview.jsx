import React, { useState } from "react";
import { Collapse } from "react-bootstrap";

function RestReview() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button
                className="btn-warning btn"
                onClick={() => setOpen(!open)}
            >
                Click here to see the Reviews
            </button>
            <Collapse in={open}>
                <div className="my-2">
                    <hr />
                    <div className="mt-5">
                        <h4>Name and Data</h4>
                        <h4>Rating</h4>
                        <p>Discription</p>
                    </div>
                </div>
            </Collapse>
        </>
    );
}

export default RestReview;

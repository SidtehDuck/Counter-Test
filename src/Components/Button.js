import React from "react";
import {Button} from "react-bootstrap";

const ButtonClick = ({count, incrementCount}) => {
    return(
        <div style={{}}>
            <Button variant='primary' onClick={() => {incrementCount(count+1)}}>Click Me</Button>
        </div>
    )
}

export default ButtonClick;
import React from "react";

const Scroll = (props) => {
    return (
        <div style={{
            height: '800px',
            overflowY: 'scroll',
            border: '2px solid #0272b3'
        }}>
            {props.children}
        </div>
    )
};

export default Scroll;
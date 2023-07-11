import React from "react";
// import { useState } from "react";


function Click(props) {
    console.log(props);

    function selector(state) {
        if (state === 0) {
            return (
                <div onClick={() => props.onClick(props.number)} className="table">

                </div>
            )
        }
        else if (state === 1) {
            return (
                <div onClick={() => props.onClick(props.number)} className="table">
                    <img src={require('../icons8-circle-48.png')} alt="" />
                </div>
            )
        }
        else if (state === 2) {
            return (
                <div onClick={() => props.onClick(props.number)} className="table">
                    <img className="cross" src={require('../icons8-cross-30.png')} alt="" />
                </div>
            )
        }
    }
    return (
        selector(props.state)
    );
}

export default Click; 
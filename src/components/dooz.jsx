import React from "react";
import Click from "./click";
import { useState, useEffect } from "react";

function Dooz() {
    const [boxes, setBoxes] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [grids, setGrids] = useState([]);
    const [lastClick, setlastClick] = useState(0);

    const onClick = (number) => {

        console.log(number)
        if (boxes[number] === 0) {

            let _lastClick = lastClick;
            if (lastClick === 0) {
                _lastClick = 1;
            }
            if (lastClick === 1) {
                _lastClick = 2;
            }
            if (lastClick === 2) {
                _lastClick = 1;
            }
            setlastClick(_lastClick)

            let _boxes = [...boxes]
            _boxes[number] = _lastClick;
            if (_boxes[0] === _boxes[1] && _boxes[1] === _boxes[2] && _boxes[0] !== 0) {
                alert("You Win")
            }
            else if (_boxes[3] === _boxes[4] && _boxes[4] === _boxes[5] && _boxes[3] !== 0) {
                alert("You Win")
            }
            else if (_boxes[6] === _boxes[7] && _boxes[7] === _boxes[8] && _boxes[6] !== 0) {
                alert("You Win")
            }
            else if (_boxes[0] === _boxes[3] && _boxes[3] === _boxes[6] && _boxes[0] !== 0) {
                alert("You Win")
            }
            else if (_boxes[1] === _boxes[4] && _boxes[4] === _boxes[7] && _boxes[1] !== 0) {
                alert("You Win")
            }
            else if (_boxes[2] === _boxes[5] && _boxes[5] === _boxes[8] && _boxes[2] !== 0) {
                alert("You Win")
            }
            else if (_boxes[0] === _boxes[4] && _boxes[4] === _boxes[8] && _boxes[0] !== 0) {
                alert("You Win")
            }
            else if (_boxes[2] === _boxes[4] && _boxes[4] === _boxes[6] && _boxes[2] !== 0) {
                alert("You Win")
            }
            else {

                for (let index = 0; index < boxes.length; index++) {
                    const Includes = _boxes.includes(0);
                    if (!Includes) {
                        alert("Tie")
                        break
                    }
                }
            }
            setBoxes(_boxes)
        }
        else {
            alert("Kos dast")
        }
    };

    useEffect(() => {

        let gg = []
        for (let index = 0; index < boxes.length; index++) {
            const element = boxes[index];
            gg.push(<div className="table" >
                <Click number={index} state={element} onClick={onClick} />
            </div >)
        }
        setGrids(gg);
    }, [boxes]);


    return (
        <div className="table-container">
            <div className="text">WELLCOME TO (X O)</div>
            <div className="main-table">
                {
                    grids
                }
            </div>
        </div>
    );
}

export default Dooz;
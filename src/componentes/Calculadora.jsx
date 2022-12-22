import React, { useState } from 'react'
import './Calculadora.css'
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { AiOutlineArrowRight } from "react-icons/ai"


export default function Calculadora() {
    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function imputNum(input) {
        
        if (num === 0) {
            setNum(input);
        } else {
            setNum(num + input);
        }
    }

    function clear() {
        setNum(0);
    }

    function porcentage() {
        setNum(num / 100);
    }

    function changeSign() {

        setNum(num * -1);

    }


    function operatorHandler(e) {
        var operatorInput = e.currentTarget.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate() {
        if (operator === "/") {
            setNum(parseFloat(oldnum) / parseFloat(num));
        } else if (operator === "X") {
            setNum(parseFloat(oldnum) * parseFloat(num));
        } else if (operator === "-") {

            setNum(parseFloat(oldnum) - parseFloat(num));
        } else if (operator === "+") {
            setNum(parseFloat(oldnum) + parseFloat(num));
        }
    }

    return (
        <div>
            <Box m={5} />
            <Container maxWidth="xs">
                <div className="calculator">
                    <Box m={12} />
                    <h1 className="resultado">{num}</h1>
                    <button onClick={clear}><AiOutlineArrowRight /></button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={porcentage}>%</button>
                    <button className="orange" onClick={operatorHandler} value="/">
                        /
                    </button>
                    <button className="gray" onClick={()=>imputNum("7")}>
                        7
                    </button>
                    <button className="gray" onClick={()=>imputNum("8")}>
                        8
                    </button>
                    <button className="gray" onClick={()=>imputNum("9")}>
                        9
                    </button>
                    <button className="orange" onClick={operatorHandler} value="X">
                        X
                    </button>
                    <button className="gray" onClick={()=>imputNum("4")}>
                        4
                    </button>
                    <button className="gray" onClick={()=>imputNum("5")}>
                        5
                    </button>
                    <button className="gray" onClick={()=>imputNum("6")}>
                        6
                    </button>
                    <button className="orange" onClick={operatorHandler} value="-">
                        -
                    </button>
                    <button className="gray" onClick={()=>imputNum("1")}>
                        1
                    </button>
                    <button className="gray" onClick={()=>imputNum("2")}>
                        2
                    </button>
                    <button className="gray" onClick={()=>imputNum("3")}>
                        3
                    </button>
                    <button className="orange" onClick={operatorHandler} value="+">
                        +
                    </button>
                    <button className="gray" onClick={()=>imputNum("0")}>
                        0
                    </button>
                    <button className="gray" onClick={()=>imputNum(".")}>
                        ,
                    </button>
                
                    <button className="orange" onClick={calculate}>
                        =
                    </button>
                </div>
            </Container>
        </div>
    );
}



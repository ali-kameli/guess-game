import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import style from "./Game.module.css";

const Game = () => {
    const params = useParams();
    const id = params.id;
    const firstTxt = useRef();
    const secTxt = useRef();
    const threeTxt = useRef();
    const fourTxt = useRef();
    const fiveTxt = useRef();

    const handleFocus = (e) => {
        if (e.target.nextSibling) e.target.nextSibling.focus();
    }

    const formHandler = () => {
        const firstElement = firstTxt.current.value;
        const secElement = secTxt.current.value;
        const threeElement = threeTxt.current.value;
        const fourElement = fourTxt.current.value;
        const fiveElement = fiveTxt.current.value;

        const txt = firstElement + secElement + threeElement + fourElement + fiveElement;
        console.log(txt);
    }

    return (
        <div>
            <div className={style.sky}>
                <div className={style.step}>{id}</div>
            </div>

            <div className={style.inputs}>
                <from className={style.form} onChange={formHandler} >
                    <input autoFocus={true} ref={firstTxt} onChange={handleFocus} type="text" maxLength="1" />
                    <input onChange={handleFocus} ref={secTxt} type="text" maxLength="1" />
                    <input onChange={handleFocus} ref={threeTxt} type="text" maxLength="1" />
                    <input onChange={handleFocus} ref={fourTxt} type="text" maxLength="1" />
                    <input onChange={handleFocus}  ref={fiveTxt} type="text" maxLength="1" />
                </from>
                {/* <div className={style.}></div> */}
            </div>
        </div>
    )
}

export default Game;
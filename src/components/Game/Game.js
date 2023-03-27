import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Game.module.css";
import Data from './../../api/Data';

const Game = () => {
    const params = useParams();
    const id = params.id;

    const [textArr, setTextArr] = useState([]);
    const [txt, setTxt] = useState('');
    const [splitTxt, setSplitTxt] = useState([]);

    const firstTxt = useRef();
    const secTxt = useRef();
    const threeTxt = useRef();
    const fourTxt = useRef();
    const fiveTxt = useRef();

    const handleFocus = (e) => {
        if (e.target.nextSibling) e.target.nextSibling.focus();
    }

    const clickHandler = () => {
        let inputs = {
            firstElement: firstTxt.current.value,
            secElement: secTxt.current.value,
            threeElement: threeTxt.current.value,
            fourElement: fourTxt.current.value,
            fiveElement: fiveTxt.current.value,
        }
        let txt = inputs.firstElement + inputs.secElement + inputs.threeElement + inputs.fourElement + inputs.fiveElement;
        if (txt.length === 5) {
            setTxt(txt);
            setTextArr(oldArray => [...oldArray, txt])
        } else {
            alert('fill all field')
        }

        // textArr.forEach(t => {

        // })
        // console.log(splitTxt);
    }

    return (
        <div>
            <div className={style.sky}>
                <div className={style.step}>{id}</div>
            </div>
            {
                textArr.length > 0 &&
                <div className={style.answer_parrent}>
                    <div className={style.answers}>
                        {
                            textArr.map((txt, index) => (
                                <div className={style.answer} key={index}>
                                    <div>{txt[0]}</div>
                                    <div>{txt[1]}</div>
                                    <div>{txt[2]}</div>
                                    <div>{txt[3]}</div>
                                    <div>{txt[4]}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
            <div className={style.inputs}>
                <from className={style.form}   >
                    <input autoFocus={true} ref={firstTxt} onChange={handleFocus} type="text" maxLength="1" />
                    <input onChange={handleFocus} ref={secTxt} type="text" maxLength="1" />
                    <input onChange={handleFocus} ref={threeTxt} type="text" maxLength="1" />
                    <input onChange={handleFocus} ref={fourTxt} type="text" maxLength="1" />
                    <input onChange={handleFocus} ref={fiveTxt} type="text" maxLength="1" />
                    <button type="submit" onClick={(e) => { clickHandler(e) }}>send</button>
                </from>
                {/* <div className={style.}></div> */}
            </div>
        </div>
    )
}

export default Game;
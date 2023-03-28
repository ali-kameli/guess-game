import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Game.module.css";
import Data from './../../api/Data';

const Game = () => {
    const params = useParams();
    const id = params.id;

    const level = useRef();

    const [textArr, setTextArr] = useState([]);
    // split robot access key's
    const [firstAccessKey, setFirstAccessKey] = useState([]);
    const [secAccessKey, setSecAccessKey] = useState([]);
    const [threeAccessKey, setThreeAccessKey] = useState([]);
    const [fourAccessKey, setFourAccessKey] = useState([]);
    const [fiveAccessKey, setFiveAccessKey] = useState([]);
    // get each word from user
    const firstTxt = useRef();
    const secTxt = useRef();
    const threeTxt = useRef();
    const fourTxt = useRef();
    const fiveTxt = useRef();
    // focus and jump input
    const handleFocus = (e) => {
        if (e.target.nextSibling) e.target.nextSibling.focus();
    }
    // when recived to last input, send input's
    const clickHandler = (e) => {
        let inputs = {
            firstElement: firstTxt.current.value,
            secElement: secTxt.current.value,
            threeElement: threeTxt.current.value,
            fourElement: fourTxt.current.value,
            fiveElement: fiveTxt.current.value,
        }
        let txt = inputs.firstElement + inputs.secElement + inputs.threeElement + inputs.fourElement + inputs.fiveElement;
        if (txt.length === 5) {
            setTextArr(oldArray => [...oldArray, txt]);

        } else {
            alert('fill all field')
        }
        firstTxt.current.value = '';
        secTxt.current.value = '';
        threeTxt.current.value = '';
        fourTxt.current.value = '';
        fiveTxt.current.value = '';
        handleFocus(e);
    }

    const levelHandler=()=>{
        console.log(level.current.value);
    }

    useEffect(() => {
        // spliting each word from robot access key's
        let firstAccessKeyArr = [];
        let secAccessKeyArr = [];
        let threeAccessKeyArr = [];
        let fourAccessKeyArr = [];
        let fiveAccessKeyArr = [];

        Data.robotAccessKey().forEach(word => {
            firstAccessKeyArr.push(word[0]);
            secAccessKeyArr.push(word[1]);
            threeAccessKeyArr.push(word[2]);
            fourAccessKeyArr.push(word[3]);
            fiveAccessKeyArr.push(word[4]);
        });

        setFirstAccessKey([...new Set(firstAccessKeyArr)])
        setSecAccessKey([...new Set(secAccessKeyArr)])
        setThreeAccessKey([...new Set(threeAccessKeyArr)])
        setFourAccessKey([...new Set(fourAccessKeyArr)])
        setFiveAccessKey([...new Set(fiveAccessKeyArr)])
    }, [])

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
                                    <div style={{
                                        backgroundColor: firstAccessKey.includes(txt[0].toUpperCase())
                                            ? 'green' :
                                            secAccessKey.includes(txt[0].toUpperCase()) ||
                                                threeAccessKey.includes(txt[0].toUpperCase()) ||
                                                fourAccessKey.includes(txt[0].toUpperCase()) ||
                                                fiveAccessKey.includes(txt[0].toUpperCase()) ? 'yellow' : null
                                    }}>
                                        {txt[0].toUpperCase()}
                                    </div>
                                    <div style={{
                                        backgroundColor: secAccessKey.includes(txt[1].toUpperCase()) ? 'green' :
                                            firstAccessKey.includes(txt[1].toUpperCase()) ||
                                                threeAccessKey.includes(txt[1].toUpperCase()) ||
                                                fourAccessKey.includes(txt[1].toUpperCase()) ||
                                                fiveAccessKey.includes(txt[1].toUpperCase()) ? 'yellow' : null

                                    }}>
                                        {txt[1].toUpperCase()}
                                    </div>
                                    <div style={{
                                        backgroundColor: threeAccessKey.includes(txt[2].toUpperCase()) ? 'green' :
                                            firstAccessKey.includes(txt[2].toUpperCase()) ||
                                                secAccessKey.includes(txt[2].toUpperCase()) ||
                                                fourAccessKey.includes(txt[2].toUpperCase()) ||
                                                fiveAccessKey.includes(txt[2].toUpperCase()) ? 'yellow' : null
                                    }}>
                                        {txt[2].toUpperCase()}
                                    </div>
                                    <div style={{
                                        backgroundColor: fourAccessKey.includes(txt[3].toUpperCase()) ? 'green' :
                                            firstAccessKey.includes(txt[3].toUpperCase()) ||
                                                secAccessKey.includes(txt[3].toUpperCase()) ||
                                                threeAccessKey.includes(txt[3].toUpperCase()) ||
                                                fiveAccessKey.includes(txt[3].toUpperCase()) ? 'yellow' : null
                                    }}>
                                        {txt[3].toUpperCase()}
                                    </div>
                                    <div style={{
                                        backgroundColor: fiveAccessKey.includes(txt[4].toUpperCase()) ? 'green' :
                                            firstAccessKey.includes(txt[4].toUpperCase()) ||
                                                secAccessKey.includes(txt[4].toUpperCase()) ||
                                                threeAccessKey.includes(txt[4].toUpperCase()) ||
                                                fourAccessKey.includes(txt[4].toUpperCase()) ? 'yellow' : null

                                    }}>
                                        {txt[4].toUpperCase()}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
            <div className={style.range}>
            <select ref={level} onClick={levelHandler}>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
            </select>
            </div>
            <div className={style.inputs}>
                <from className={style.form}>
                    <input autoFocus={true} ref={firstTxt} onChange={handleFocus} type="text" maxLength="1" style={{ textTransform: "uppercase" }} />
                    <input onChange={handleFocus} ref={secTxt} type="text" maxLength="1" style={{ textTransform: "uppercase" }} />
                    <input onChange={handleFocus} ref={threeTxt} type="text" maxLength="1" style={{ textTransform: "uppercase" }} />
                    <input onChange={handleFocus} ref={fourTxt} type="text" maxLength="1" style={{ textTransform: "uppercase" }} />
                    <input onChange={(e) => { clickHandler(e) }} ref={fiveTxt} type="text" maxLength="1" style={{ textTransform: "uppercase" }} />
                </from>
            </div>
        </div>
    )
}

export default Game;
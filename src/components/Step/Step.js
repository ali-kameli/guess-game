import React from "react";
import style from './Step.module.css';
import { Link } from "react-router-dom";

const Step = (step) => {
    console.log(step);
    return (
         <div className={style.step}>
            <Link to={`/game/${step.step.id}`} >
            {step.step.step}
            </Link>
        </div>
    )
}

export default Step;
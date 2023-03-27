import React from "react";
import style from "./GameRoute.module.css";
import Data from '../../api/Data';
import Step from "../Step/Step";

const GameRoute = () => {
    return (
        <div className={style.route}>
            <div className={style.line}>
                {
                    Data.getSteps().reverse().map(step => (
                        <Step step={step} key={step.id} />
                    ))
                }
            </div>
        </div>
    );
}

export default GameRoute;
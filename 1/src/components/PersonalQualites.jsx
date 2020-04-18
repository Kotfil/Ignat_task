import s from "./PersonalQualites.module.css";
import React from "react";

const PersonalQualites = (props) => {

    let taskElements = props.arrQuality.map((task, id) => (id === 1) ?
        <li key={task.id} className={s.twoElem}>{task.quality}</li> :
        <li key={task.id} >{task.quality}</li>
    )
    return (
        <div className={s.wrapper}>
            <h2>Мои личные качества</h2>
            <ul className={s.qualitysName}>{taskElements}</ul>
        </div>
    )
}
export default PersonalQualites
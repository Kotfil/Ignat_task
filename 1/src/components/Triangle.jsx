import React from "react";
import s from './Triangle.module.css'
import photo from './../img/My.jpg';

const Triangle = () => {
    return (
        <div className={s.triangle}>
            <img src={photo} alt="Avatar"></img>
        </div>

    );
}

export default Triangle;
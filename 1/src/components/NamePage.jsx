import React from "react";
import s from './NamePage.module.css'

const NamePage = (props) => {


     return (
            <div className={s.nameFil}>

                <p>Котенко Филипп Сергеевич</p>
                <div>
                    <input about={'22'}/>
                </div>
            </div>
        );
    }

export default NamePage;
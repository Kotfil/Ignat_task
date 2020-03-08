import React, {Component} from "react";
import s from './Dialog.module.css'

class Dialog extends Component {
    render() {
        return (
            <div className={s.dialog}>
                <p>Котенко Филипп</p>
            </div>
        );
    }
}

export default Dialog;
import React from "react";
import s from './DialogPage.module.css'


const DialogPage = () => {
    return (

        <div className={s.wrapper}>

            <div className={s.avaTel}>
                <div className={s.fil}>
                    Филипп Котенко
                </div>

                <div className={s.next}>
                    "Sed ut perspiciatis unde
                    omnis iste natus error sit
                    voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt
                    explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit
                </div>
                <div className={s.time}>

                </div>
            </div>
        </div>
    );
}

export default DialogPage;
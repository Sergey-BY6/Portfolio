import React from 'react';
import s from './Main.module.scss'
import styleContainer from "../common/styles/Container.module.css"
import mainFoto2 from "../assets/image/mainFoto2.jpg"

export const Main = () => {

    const foto = {
        backgroundImage: `url(${mainFoto2})`
    }

    return (
        <div className={s.mainBlock}>
            <div className={s.mainContainer}>
                <div className={s.text}>
                    <span className={s.greeting}>Hi There!</span>
                    <h1 className={s.name}>I am <div>Sergey Babich</div></h1>
                    <p className={s.dev}>Frontend Developer.</p>
                </div>
                <div className={s.photo} style={foto}>
                </div>
            </div>
        </div>
    );
};

// <div className={`${styleContainer.container} ${s.projectContainer}`}>
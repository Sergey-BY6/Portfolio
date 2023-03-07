import React from 'react';
import s from "./RemWorking.module.css"
import styleContainer from '../common/styles/Container.module.css'

export const RemWorking = () => {
    return (
        <div className={s.remWorkingBlock}>
            <div className={s.container}>
                <h2 className={s.title}>I am considering options for remote work.</h2>
                <div className={s.navText}>Нанять меня</div>
            </div>
        </div>
    );
};


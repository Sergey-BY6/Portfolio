import React from 'react';
import s from "./RemWorking.module.scss"
import styleContainer from '../common/styles/Container.module.css'
import {Title} from '../common/components/title/Title';

export const RemWorking = () => {
    return (
        <div className={s.remWorkingBlock}>
            <div className={s.container}>
                <Title title={"I am considering options for remote work"}/>
                {/*<h2 className={s.title}>I am considering options for remote work.</h2>*/}
                <a href="" className={s.navText}>Hire me</a>
            </div>
        </div>
    );
};


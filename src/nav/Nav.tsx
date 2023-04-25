import React from 'react';
import s from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="" className={s.navIn}>Main</a>
            <a href="" className={s.navIn}>Skills</a>
            <a href="" className={s.navIn}>Projects</a>
            <a href="" className={s.navIn}>Сontacts</a>
        </div>
    );
};


import React from 'react';
import s from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <h3 className={s.name}>Sergey Babich</h3>
                <div className={s.bLockColorMain}>
                    <div className={s.blockColorGray}>g</div>
                    <div className={s.blockColorGray}>g</div>
                    <div className={s.blockColorGray}>g</div>
                    <div className={s.blockColorGray}>g</div>
                </div>
                <span className={s.footerBottom}> © 2019 All rights reserved.</span>
            </div>
        </div>
    );
};


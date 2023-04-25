import React from 'react';
import s from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <h2 className={s.name}>Sergey Babich</h2>
                <div className={s.bLockColorMain}>
                    <div className={s.blockColorGray}>Facebook</div>
                    <div className={s.blockColorGray}>Instagram</div>
                    <div className={s.blockColorGray}>Linkedin</div>
                    <div className={s.blockColorGray}>Twitter</div>
                </div>
                <span className={s.footerBottom}> © 2019 All rights reserved.</span>
            </div>
        </div>
    );
};


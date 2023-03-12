import React from 'react';
import s from "./Contacts.module.css"
import styleContainer from '../common/styles/Container.module.css'

export const Contacts = () => {

    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.form}>
                    <input className={s.input} type="text"/>
                    <input className={s.input} type="text"/>
                    <textarea name="" id="" cols={30} rows={10}></textarea>
                </form>
                <a href="" className={s.send}>Send</a>
            </div>
        </div>
    );
};


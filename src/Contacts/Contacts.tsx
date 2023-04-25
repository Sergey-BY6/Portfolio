import React from 'react';
import s from "./Contacts.module.scss"
import styleContainer from '../common/styles/Container.module.css'
import {Title} from '../common/components/title/Title';

export const Contacts = () => {

    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                {/*<h2 className={s.title}>Contacts</h2>*/}
                <Title title={"Contact me"}/>
                <form className={s.form}>
                    <input className={s.input} type="text" placeholder={"Name"}/>
                    <input className={s.input} type="text" placeholder={"E-mail"}/>
                    <textarea name="" id="" cols={30} rows={10} className={s.textarea} placeholder={"Your message"}></textarea>
                    <button type={"submit"} className={s.send}>Send Message</button>
                </form>
                {/*<a href="" className={s.send}>Send Message</a>*/}
            </div>
        </div>
    );
};


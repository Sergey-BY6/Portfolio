import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill';


export const Skills = () => {



    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"JS"} description={"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                    <Skill title={"Css"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}/>
                    <Skill title={"React"} description={"ut labore et dolore magna aliqua Ut."}/>

                </div>
            </div>

        </div>
    );
};



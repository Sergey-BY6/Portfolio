import React from 'react';
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';
import jsImage from '../assets/image/js.png';
import reactImage from '../assets/image/react.png';
import cssImage from '../assets/image/css.png';



export const Skills = () => {

    const js = {
        backgroundImage: `url(${jsImage})`
    }
    const css = {
        backgroundImage: `url(${cssImage})`
    }
    const react = {
        backgroundImage: `url(${reactImage})`
    }

    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={'My Skills'}/>
                <div className={s.skills}>
                    <Skill title={'JS'}
                           description={'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}
                           style={js}
                    />
                    <Skill title={'Css'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisi fffhfhfh cing elit'}
                           style={css}
                    />
                    <Skill title={'React'}
                           description={'Ut labore et dolore magna aliqua Ut.'}
                           style={react}
                    />

                </div>
            </div>

        </div>
    );
};



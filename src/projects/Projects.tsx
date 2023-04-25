import React from 'react';
import s from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import todoImage from "./../assets/image/todolist.png"
import sicialImage from "./../assets/image/social.png"



export const Projects = () => {

    const social = {
        backgroundImage: `url(${sicialImage})`
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`
    }



    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectContainer}`}>
                <Title title={" My Projects"}/>
            <div className={s.projects}>
                    <Project
                        style={todolist}
                        projectName={'Todolist'}
                        description={'Here is a todolist developed by me, which will help in planning the workflow.'}
                    />
                    <Project
                        style={social}
                        projectName={'Social network'}
                        description={'A social network is a visual demonstration of the project'}
                    />


                </div>
            </div>

        </div>
    );
};







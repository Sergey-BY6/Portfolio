import React from 'react';
import s from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from './project/Project';

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectContainer}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project
                        projectName={'Todolist'}
                        description={'Here is a todolist developed by me, which will help in planning the workflow.'}
                    />
                    <Project
                        projectName={'Social network'}
                        description={'A social network is a visual demonstration of the project architecture.'}
                    />

                </div>
            </div>

        </div>
    );
};







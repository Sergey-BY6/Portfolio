import React from 'react';
import s from './Project.module.scss'


type ProjectType = {
    projectName: string
    description: string
    style: {backgroundImage: string}
}

export const Project: React.FC<ProjectType> = (props) => {
    return (
        <div className={s.project}>
            <div className={s.imageBlock} style={props.style}>
                <a href="" className={s.imageSee}>View</a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.projectName}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};


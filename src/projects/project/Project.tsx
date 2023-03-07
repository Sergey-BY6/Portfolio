import React from 'react';
import s from './Project.module.css'


type ProjectType = {
    projectName: string
    description: string
}

export const Project: React.FC<ProjectType> = (props) => {
    return (
        <div className={s.project}>
            <div className={s.imageBlock}>
                <div className={s.imageSee}>See</div>
            </div>
            <div className={s.descriptionBlock}>
                <span className={s.projectName}>{props.projectName}</span>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};


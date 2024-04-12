import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FontAwesomeBtnProps} from "@/app/@types/component";

const FontAwesomeBtn = ({icon, onClick,leftTitle,rightTitle,label}: FontAwesomeBtnProps) => {
    return (
        <button onClick={onClick} className={'flex items-center gap-[3px]'} aria-label={label}>
            {leftTitle && leftTitle}
            <FontAwesomeIcon icon={icon}/>
            {rightTitle && rightTitle}
        </button>
    );
};

export default FontAwesomeBtn;

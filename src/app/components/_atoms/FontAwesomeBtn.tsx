import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FontAwesomeBtnProps} from "@/app/@types/component";

const FontAwesomeBtn = ({icon, onClick, leftTitle, rightTitle, label, isNotButton}: FontAwesomeBtnProps) => {
    const Element = isNotButton ? 'div' : 'button';

    return (
        <Element onClick={onClick} className={'flex items-center gap-[3px]'} aria-label={label}>
            {leftTitle && leftTitle}
            {icon && <FontAwesomeIcon icon={icon}/>}
            {rightTitle && rightTitle}
        </Element>
    );
};

export default FontAwesomeBtn;

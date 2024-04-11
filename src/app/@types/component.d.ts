import React, {Dispatch, SetStateAction} from "react";


export interface CAppBarProps{
    arrowTrue?:boolean,
    title?:string
    children?:React.ReactNode,
    textCenter?:boolean,
    onClick?: React.MouseEventHandler<HTMLParagraphElement>;
}

interface buttonProps {
    title:string,
    className:string,
    onClick?:Function,
}

interface imageButtonProps {
    image:string,
    title:string,
    classList?:string,
    imagePosition?:string,
    onClick?:MouseEvent<HTMLButtonElement>
    titleHidden?:boolean
}
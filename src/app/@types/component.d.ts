import React, {Dispatch, SetStateAction} from "react";
import {FontAwesomeIconProps} from "@fortawesome/react-fontawesome";




export interface CAppBarProps {
    leftItem?:React.ReactNode
    centerItem?:React.ReactNode
    rightItem?:React.ReactNode,
    arrowClick?: MouseEvent<HTMLButtonElement>
}

interface buttonProps {
    title: string,
    className?: string,
    onClick?: Function,
}


interface imageButtonProps {
    image: string,
    title: string,
    classList?: string,
    imagePosition?: string,
    onClick?: MouseEvent<HTMLButtonElement>
    titleHidden?: boolean
}

interface cPopUpProps {
    children?: React.ReactNode,
    className?: string
}

interface CSearchBarProps {
    placeholder: string
    inputStyle?: string
    svgStyle?: string
}
interface FontAwesomeBtnProps{
    icon?: IconProp;
    onClick?: MouseEvent<HTMLButtonElement>
    leftTitle?:string
    rightTitle?:string,
    label?:string,
    isNotButton?:boolean
}

interface CBarButtonProps{
    leftItem?:React.ReactNode
    centerItem?:React.ReactNode
    rightItem?:React.ReactNode,
    onClick?: MouseEvent<HTMLButtonElement>
}
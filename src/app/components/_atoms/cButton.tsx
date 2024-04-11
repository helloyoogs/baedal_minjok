"use client"

import {buttonProps} from "@/app/@types/component";

export default function CButton({title, onClick, className}: buttonProps) {

    return (
        <button onClick={() => {
           onClick?.()
        }}
                className={className}>
            {title}
        </button>
    )
}
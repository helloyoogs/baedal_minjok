import React from 'react';
import {CBarButtonProps} from "@/app/@types/component";
const CBarButton = ({leftItem,centerItem,rightItem,onClick}: CBarButtonProps) => {



    return (
        <button className={'flex justify-between p-[1rem_10px] cursor-pointer'} onClick={onClick}>
            <div className={'flex gap-[10px] items-center'}>
                {leftItem}
            </div>
            <div className={'flex gap-[10px] items-center'}>
                {centerItem}
            </div>
            <div className={'flex gap-[10px] items-center'}>
                {rightItem}
            </div>
        </button>
    );
};

export default CBarButton;

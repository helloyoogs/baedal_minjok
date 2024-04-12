import React from 'react';
import {CAppBarProps} from "@/app/@types/component";
import FontAwesomeBtn from "@/app/components/_atoms/FontAwesomeBtn";
import {faArrowLeftLong} from "@fortawesome/free-solid-svg-icons";

const CAppBar = ({leftItem,centerItem,rightItem,arrowClick}: CAppBarProps) => {



    return (
        <div className={'flex justify-between p-[1rem_10px]'}>
            <div className={'flex gap-[10px] items-center'}>
                {arrowClick && <FontAwesomeBtn onClick={arrowClick} icon={faArrowLeftLong} label={'뒤로 가기'}/>}
                {leftItem}
            </div>
            <div className={'flex gap-[10px] items-center'}>
                {centerItem}
            </div>
            <div className={'flex gap-[10px] items-center'}>
                {rightItem}
            </div>
        </div>
    );
};

export default CAppBar;

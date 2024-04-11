import React from 'react';
import {CAppBarProps} from "@/app/@types/component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeftLong} from "@fortawesome/free-solid-svg-icons";

const CAppBar = ({arrowTrue, title, children, textCenter,onClick}: CAppBarProps) => {
    const textStyle = `${textCenter ? 'flex-1 text-center' : ''} ${onClick ? 'cursor-pointer':''}`
    const arrowBoxStyle = `${textCenter ? 'w-full justify-between' : ''} flex gap-[10px] items-center`


    const renderTitle = () => {
        return (
            <p className={`${textStyle}`} onClick={onClick}>{title}</p>
        )
    }
    return (
        <div className={'flex justify-between p-[1rem_10px]'}>
            {arrowTrue ? <div className={`${arrowBoxStyle}`}>
                <FontAwesomeIcon icon={faArrowLeftLong}/>
                {renderTitle()}</div> : renderTitle()
            }
            {children &&
                <div className={'flex gap-[10px] items-center'}>
                    {children}
                </div>}
        </div>
    );
};

export default CAppBar;

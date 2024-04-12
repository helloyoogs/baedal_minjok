import React from 'react';
import {CSearchBarProps} from "@/app/@types/component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeftLong, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";


const CSearchBar = ({placeholder, inputStyle, svgStyle}: CSearchBarProps) => {

    return (
        <label className={'cSearchBar'}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={`${svgStyle}`}/>
            <input type={'search'} placeholder={placeholder}
                   className={`${inputStyle}`}/>
        </label>
    );
};

export default CSearchBar;

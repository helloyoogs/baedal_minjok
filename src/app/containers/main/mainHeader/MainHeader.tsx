'use client';
import React, {useRef, useState} from "react";
import {useAddress} from "@/app/context/userDataContext";
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css';
import CAppBar from "@/app/components/_atoms/cAppBar";
import CImageButton from "@/app/components/_atoms/cImageButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";



const MainHeader = () => {
    const main_header_container = 'bg-[#2ac1bc] w-full h-[130px]'
     const { selectedAddress, addresses } = useAddress();
    const [open, setOpen] = useState(false)
    const sheetRef = useRef<BottomSheetRef>(null);

    const handleOpenBottomSheet = () => {
        setOpen(true);
    };

    const handleCloseBottomSheet = () => {
        setOpen(false);
    };

    return (
        <div className={`${main_header_container}`}>
            <CAppBar title= {selectedAddress ? `${selectedAddress.name}` : '주소를 선택하세요.'}
            onClick={handleOpenBottomSheet}>
                <FontAwesomeIcon icon={faBorderAll} />
                <FontAwesomeIcon icon={faBell} />
                <FontAwesomeIcon icon={faCartShopping} />
            </CAppBar>
            <BottomSheet
                open={open}
                onDismiss={handleCloseBottomSheet}
                ref={sheetRef}
                snapPoints={({ maxHeight }) => [maxHeight]}
            >
                My awesome content here
            </BottomSheet>
        </div>
    );

}

export default MainHeader;

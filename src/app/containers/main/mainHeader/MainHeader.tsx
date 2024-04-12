'use client';
import React, {useRef, useState} from "react";
import {useAddress} from "@/app/context/userDataContext";
import {BottomSheet, BottomSheetRef} from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css';
import CAppBar from "@/app/components/_atoms/cAppBar";
import {faBorderAll, faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import AddressMain from "@/app/components/address/addressMain";
import FontAwesomeBtn from "@/app/components/_atoms/FontAwesomeBtn";
import CSearchBar from "@/app/components/_atoms/cSearchBar";


const MainHeader = () => {
    const {selectedAddress, addresses} = useAddress();
    const [open, setOpen] = useState(false)
    const sheetRef = useRef<BottomSheetRef>(null);

    const handleOpenBottomSheet = () => {
        setOpen(true);
    };

    const handleCloseBottomSheet = () => {
        setOpen(false);
    };

    return (
        <div className={'bg-[#2ac1bc] w-full'} datatype={'main_header'}>
            <CAppBar
                leftItem={(
                    <FontAwesomeBtn onClick={handleOpenBottomSheet}
                                    leftTitle={selectedAddress ? selectedAddress.name : '주소를 선택하세요.'} icon={faCaretDown}/>
                )}
                rightItem={(
                    <>
                        <FontAwesomeBtn icon={faBorderAll} label={'전체 보기'}/>
                        <FontAwesomeBtn icon={faBell} label={'알림'}/>
                        <FontAwesomeBtn icon={faCartShopping} label={'장바구니'}/>
                    </>
                )}
            />
           <div className={'p-[10px]'}>
               <CSearchBar placeholder={'샌드위치 나와라 뚝딱!!'} svgStyle={'!text-[#2ac1bc]'}/>
           </div>
            <BottomSheet
                open={open}
                onDismiss={handleCloseBottomSheet}
                ref={sheetRef}
                snapPoints={({maxHeight}) => [maxHeight]}
            >
                <AddressMain/>
            </BottomSheet>
        </div>
    );

}

export default MainHeader;

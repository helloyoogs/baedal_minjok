"use client"
import CAppBar from "@/app/components/_atoms/cAppBar";
import React, {useState} from "react";
import AddressEditPop from "@/app/components/address/addressEditPop";
import CSearchBar from "@/app/components/_atoms/cSearchBar";
import FontAwesomeBtn from "@/app/components/_atoms/FontAwesomeBtn";
import {faChevronRight, faCrosshairs} from "@fortawesome/free-solid-svg-icons";
import CBarButton from "@/app/components/_atoms/cBarButton";
import AddressPickerPop from "@/app/components/address/addressPickerPop";


const AddressMain = () => {
    const [addressEditPop, setAddressEditPop] = useState(false)
    const [addressPickerPop, setAddressPickerPop] = useState(false)


    const handleOpenBottomSheet = () => {
        setAddressEditPop(true);
    };
    const handleGoAddressPicker = () => {
        setAddressPickerPop(true);
    }

    return (
        <div>
            <CAppBar centerItem={<p>주소 설정</p>}
                     rightItem={<FontAwesomeBtn onClick={handleOpenBottomSheet} rightTitle={'편집'}/>}/>
            <div className={'p-[10px] flex flex-col'}>
                <CSearchBar placeholder={'지번, 도로명, 건물명으로 검색'}/>
                <CBarButton leftItem={<FontAwesomeBtn rightTitle={'현재 위치로 설정'} icon={faCrosshairs} isNotButton/>}
                            rightItem={<FontAwesomeBtn icon={faChevronRight} label={'현재 위치로 설정'} isNotButton/>}
                            onClick={handleGoAddressPicker}/>
            </div>
            {addressEditPop && <AddressEditPop setAddressEditPop={setAddressEditPop}/>}
            {addressPickerPop && <AddressPickerPop setAddressPickerPop={setAddressPickerPop}/>}
        </div>
    )
}

export default AddressMain;
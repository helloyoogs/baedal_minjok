"use client"
import CAppBar from "@/app/components/_atoms/cAppBar";
import React, {useState} from "react";
import AddressEdit from "@/app/components/address/addressEdit";
import CSearchBar from "@/app/components/_atoms/cSearchBar";
import FontAwesomeBtn from "@/app/components/_atoms/FontAwesomeBtn";
import {faChevronRight, faCrosshairs} from "@fortawesome/free-solid-svg-icons";
import CBarButton from "@/app/components/_atoms/cBarButton";
import {GoogleMap, LoadScript} from "@react-google-maps/api";

const AddressMain = () => {
    const [addressEditPop, setAddressEditPop] = useState(false)
    const [showMap, setShowMap] = useState(false); // 추가

    const handleOpenBottomSheet = () => {
        setAddressEditPop(true);
    };
    const handleOpenMap = () => { // 추가
        setShowMap(true);
    };
    const renderMap = () => {
        const mapContainerStyle = {
            width: '100%',
            height: '400px',
        };

        const center = {
            lat: -34.397,
            lng: 150.644,
        };

        return (
            <LoadScript googleMapsApiKey="YOUR_API_KEY">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={10}
                >
                    {/* 추가적인 지도 요소나 마커 등을 이곳에 추가할 수 있습니다. */}
                </GoogleMap>
            </LoadScript>
        );
    };

    return (
        <div>
            <CAppBar centerItem={<p>주소 설정</p>}
                     rightItem={<FontAwesomeBtn onClick={handleOpenBottomSheet} rightTitle={'편집'}/>}/>
            <div className={'p-[10px] flex flex-col'}>
                <CSearchBar placeholder={'지번, 도로명, 건물명으로 검색'}/>
                <CBarButton leftItem={<FontAwesomeBtn rightTitle={'현재 위치로 설정'} icon={faCrosshairs}/>}
                         rightItem={<FontAwesomeBtn icon={faChevronRight} label={'현재 위치로 설정'}/>} onClick={handleOpenMap}/>
            </div>
            {showMap && renderMap()}
            {addressEditPop && <AddressEdit setAddressEditPop={setAddressEditPop}/>}
        </div>
    )
}

export default AddressMain;
"use client"
import CAppBar from "@/app/components/_atoms/cAppBar";
import React, {useEffect, useRef, useState} from "react";
import AddressEdit from "@/app/components/address/addressEdit";
import CSearchBar from "@/app/components/_atoms/cSearchBar";
import FontAwesomeBtn from "@/app/components/_atoms/FontAwesomeBtn";
import {faChevronRight, faCrosshairs} from "@fortawesome/free-solid-svg-icons";
import CBarButton from "@/app/components/_atoms/cBarButton";
import {Map, MapMarker} from "react-kakao-maps-sdk";
interface Location {
    latitude: number;
    longitude: number;
}

const AddressMain = () => {
    const [addressEditPop, setAddressEditPop] = useState(false)
    const [showMap, setShowMap] = useState(false);
    const [location, setLocation] = useState<Location | null>(null);
    const [address, setAddress] = useState(null);

    const handleOpenBottomSheet = () => {
        setAddressEditPop(true);
    };
    const handleOpenMap = () => { // 추가
        setShowMap(true);
    };
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    }, []);

    const successHandler = (response: GeolocationPosition) => {
        const {latitude, longitude} = response.coords;
        setLocation({latitude, longitude});
    };

    const errorHandler = (error: GeolocationPositionError) => {
        console.log(error);
    };

    const getAddress = () => {
        if (!location) {
            console.log('위치 정보가 없습니다.');
            return;
        }

        const geocoder = new kakao.maps.services.Geocoder();
        const coord = new kakao.maps.LatLng(location.latitude, location.longitude);
        const callback = function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
                setAddress(result[0].address);
            } else {
                console.log('주소를 가져오는데 실패했습니다.');
            }
        };
        geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    };

    const renderMap = () => {
        if (!location) return null;

        return (
            <div>
                <Map
                    center={{lat: location?.latitude, lng: location?.longitude}}
                    style={{width: '800px', height: '600px'}}
                    level={3}
                >
                    <MapMarker position={{lat: location.latitude, lng: location.longitude}}/>
                    <button onClick={getAddress}>현재 좌표의 주소 얻기</button>
                </Map>

            </div>
        );
    };

    return (
        <div>
            <CAppBar centerItem={<p>주소 설정</p>}
                     rightItem={<FontAwesomeBtn onClick={handleOpenBottomSheet} rightTitle={'편집'}/>}/>
            <div className={'p-[10px] flex flex-col'}>
                <CSearchBar placeholder={'지번, 도로명, 건물명으로 검색'}/>
                <CBarButton leftItem={<FontAwesomeBtn rightTitle={'현재 위치로 설정'} icon={faCrosshairs} isNotButton/>}
                            rightItem={<FontAwesomeBtn icon={faChevronRight} label={'현재 위치로 설정'} isNotButton/>}
                            onClick={handleOpenMap}/>
            </div>
            {showMap && renderMap()}
            {addressEditPop && <AddressEdit setAddressEditPop={setAddressEditPop}/>}
        </div>
    )
}

export default AddressMain;
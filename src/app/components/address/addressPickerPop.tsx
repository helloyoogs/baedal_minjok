"use client"
import CPopUp from "@/app/components/_atoms/cPopUp";
import CAppBar from "@/app/components/_atoms/cAppBar";
import React, {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import {Map, MapMarker} from "react-kakao-maps-sdk";

interface Location {
    latitude: number;
    longitude: number;
}

interface AddressInfo {
    address_name: string;
}

interface addressPickerProps {
    setAddressPickerPop: Dispatch<SetStateAction<boolean>>;
}

const AddressPickerPop = ({setAddressPickerPop}: addressPickerProps) => {
    const addressPickerPopRef = useRef<HTMLDivElement>(null)
    const [location, setLocation] = useState<Location | null>(null);
    const [address, setAddress] = useState<AddressInfo>();
    const mapRef = useRef<any>(null);

    const handleCloseAddressPickerPop = () => {
        setAddressPickerPop(false);
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
        const callback = function (result: {
            address: React.SetStateAction<AddressInfo | undefined>;
        }[], status: kakao.maps.services.Status) {
            if (status === kakao.maps.services.Status.OK) {
                setAddress(result[0].address);
            } else {
                console.log('주소를 가져오는데 실패했습니다.');
            }
        };
        geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    };

    useEffect(() => {
        if (location) {
            getAddress();
        }
    }, [location]);
    const handleCenterChanged = () => {
        const map = mapRef.current; // mapRef를 사용하여 Map 컴포넌트의 참조를 얻습니다.

        if (map) {
            const center = map.getCenter(); // 현재 지도의 중심 좌표를 가져옵니다.

            // location 업데이트
            setLocation({
                latitude: center.getLat(),
                longitude: center.getLng(),
            });
            const geocoder = new kakao.maps.services.Geocoder();
            const coord = new kakao.maps.LatLng(center.getLat(), center.getLng());

            geocoder.coord2Address(coord.getLng(), coord.getLat(), (result, status) => {
                if (status === kakao.maps.services.Status.OK) {
                    setAddress(result[0].address);
                } else {
                    console.log('주소를 가져오는데 실패했습니다.');
                }
            });
        }
    };

    const renderMap = () => {
        if (!location) return null;
        return (
            <div>
                <Map
                    center={{lat: location?.latitude, lng: location?.longitude}}
                    style={{width: '800px', height: '600px'}}
                    onCenterChanged={handleCenterChanged}
                    level={3}
                    ref={mapRef}
                >
                    <MapMarker position={{lat: location.latitude, lng: location.longitude}}/>
                    {address && address.address_name}

                </Map>
                <button>이 위치로 주소 설정</button>
            </div>
        );
    };
    return (
        <CPopUp ref={addressPickerPopRef}>
            <CAppBar centerItem={'주소 관리'} arrowClick={handleCloseAddressPickerPop}/>
            {renderMap()}
        </CPopUp>
    )
}

export default AddressPickerPop;
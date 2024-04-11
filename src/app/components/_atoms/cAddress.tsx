import React from 'react';
import {useAddress} from "@/app/context/userDataContext";

const AddressDisplay: React.FC = () => {
    const { selectedAddress, addresses } = useAddress();

    return (
        <div>
            <h2>선택된 주소:</h2>
            <p>{selectedAddress ? `${selectedAddress.name}: ${selectedAddress.address}` : '주소를 선택하세요.'}</p>
            <h2>전체 주소 목록:</h2>
            <ul>
                {addresses.map((address) => (
                    <li key={address.id}>{`${address.name}: ${address.address}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default AddressDisplay;

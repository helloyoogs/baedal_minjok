'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Address {
    id: number;
    name: string;
    address: string;
}

interface AddressContextType {
    selectedAddress: Address | null;
    addresses: Address[];
    setSelectedAddress: (address: Address | null) => void;
}

const AddressContext = createContext<AddressContextType | undefined>(undefined);

interface AddressProviderProps {
    children: ReactNode;
}

export const AddressProvider = ({ children }: AddressProviderProps) => {
    const [addresses, setAddresses] = useState<Address[]>([
        { id: 1, name: '우리집', address: '서울특별시 강남구' },
        { id: 2, name: '회사', address: '서울특별시 송파구' },
    ]);
    const [selectedAddress, setSelectedAddress] = useState<Address | null>(addresses[0]);

    return (
        <AddressContext.Provider value={{ selectedAddress, addresses, setSelectedAddress }}>
            {children}
        </AddressContext.Provider>
    );
};

export const useAddress = () => {
    const context = useContext(AddressContext);
    if (!context) {
        throw new Error('useAddress must be used within an AddressProvider');
    }
    return context;
};

"use client"
import CAppBar from "@/app/components/_atoms/cAppBar";
import CPopUp from "@/app/components/_atoms/cPopUp";
import {Dispatch, SetStateAction, useRef} from "react";

interface addressEditProps {
    setAddressEditPop: Dispatch<SetStateAction<boolean>>;
    }
const AddressEditPop = ({setAddressEditPop}:addressEditProps) =>{
    const addressEditPopRef = useRef<HTMLDivElement>(null)

    const handleCloseAddressEdit = () => {
        setAddressEditPop(false);
    };
    return (
        <CPopUp ref={addressEditPopRef}>
            <CAppBar centerItem={'주소 관리'} arrowClick={handleCloseAddressEdit}/>

        </CPopUp>
    )
}

export default AddressEditPop;
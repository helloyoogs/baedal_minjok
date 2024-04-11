'use client'
import React, { useState } from "react";
import Main from "@/app/containers/main/page";
import { AddressProvider } from "@/app/context/userDataContext";
import 'react-spring-bottom-sheet/dist/style.css'

const Home = () => {
    const [popIndex, setPopIndex] = useState(0);

    return (
        <AddressProvider>
                <Main />
        </AddressProvider>
    );
};

export default Home;

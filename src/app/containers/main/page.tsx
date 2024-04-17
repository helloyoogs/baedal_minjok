'use client';
import React, {useEffect, useLayoutEffect, useState} from "react";
import MainHeader from "@/app/containers/main/mainHeader/MainHeader";
import axios from "axios";


const Main = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/message')
            .then(response => {
                setMessage(response.data);
            })
            .catch(error => {
                console.error('Error fetching message:', error);
            });
    }, []);

    return (
        <div className={'main_container'}>
            <MainHeader/>
            <p>{message}</p>
        </div>

    );

}

export default Main;

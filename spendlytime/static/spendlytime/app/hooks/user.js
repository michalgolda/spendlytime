import React, { useState, useEffect } from 'react';

export const useUser = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        setUserData(window.__initialData);
    });

    return userData;
}
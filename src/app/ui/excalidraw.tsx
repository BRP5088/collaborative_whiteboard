"use client";

import Library from '@excalidraw/excalidraw/types/data/library';


import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Excalidraw } from '@excalidraw/excalidraw/types/packages/excalidraw/index';



// Dynamically import Excalidraw to ensure it only loads on the client-side
const ExcalidrawLibrary = dynamic(() =>
    import('@excalidraw/excalidraw').then((module) => ({
        default: module.Excalidraw
    })
    ), { ssr: false });

const ExcalidrawComponent = () => {
    const excalidrawRef = useRef(null);

    useEffect(() => {
    //     // Additional client-side only initialization can go here
    }, []);

    return (
        <div style={{ height: '85vh', width: '100%' }}>
            {/* <ExcalidrawLibrary ref={excalidrawRef} /> */}
            <ExcalidrawLibrary />
        </div>
    );
};

export default ExcalidrawComponent;
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../public/noData.json';

const NoDataAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className="flex justify-center items-center">
            <Lottie options={defaultOptions}  />
        </div>
    );
};

export default NoDataAnimation;

import React from 'react';

const Loading = () => {
    return (
        <div className='grid grid-cols-3 justify-between justify-items-center gap-8 md:px-10 p-5'>
            <div className="p-4 bg-gray-800 rounded shadow-lg h-[200px] w-[300px]">
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-gray-600 h-12 w-12"></div>
                    <div className="flex-1 space-y-4 py-1">
                        <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-600 rounded"></div>
                            <div className="h-4 bg-gray-600 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-gray-800 rounded shadow-lg h-[200px] w-[300px]">
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-gray-600 h-12 w-12"></div>
                    <div className="flex-1 space-y-4 py-1">
                        <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-600 rounded"></div>
                            <div className="h-4 bg-gray-600 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-gray-800 rounded shadow-lg h-[200px] w-[300px]">
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-gray-600 h-12 w-12"></div>
                    <div className="flex-1 space-y-4 py-1">
                        <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-600 rounded"></div>
                            <div className="h-4 bg-gray-600 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
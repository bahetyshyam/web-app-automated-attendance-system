import React from 'react';
import { useState } from 'react';

const ViewCard = () => {
    const [isMoreOpen, setIsMoreOpen] = useState(false);


    return (
        <div className="mb-3">
            <div className="w-full bg-white px-4 py-2">
                <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold text-2xl">BDA</span>
                    <span className="text-gray-600 font-semibold text-lg">8B</span>
                </div>
                <p className="mt-1 text-gray-600 font-medium text-md">12th May 2020 10 AM</p>
            </div>
            <div onClick={() => setIsMoreOpen(!isMoreOpen)} className="w-full bg-gray-400 px-4 py-2 cursor-pointer">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-blue-600 font-semibold text-2xl">6</span>
                        <span className="text-blue-600 font-semibold text-md"> Present</span>
                    </div>
                    <div>
                        <span className="text-blue-600 font-semibold text-2xl">4</span>
                        <span className="text-blue-600 font-semibold text-md"> Absent</span>
                    </div>
                </div>
            </div>
            {isMoreOpen &&
                <div className="w-full bg-gray-500 px-4 py-2">
                    <div className="flex justify-between">
                        <div className="pr-2">
                            <p className="font-medium text-gray-900">Hello World</p>
                            <p className="font-medium text-gray-900">Hello World</p>
                            <p className="font-medium text-gray-900">Hello World</p>
                            <p className="font-medium text-gray-900">Hello World</p>
                            <p className="font-medium text-gray-900">Hello World</p>
                        </div>
                        <div className="pl-2 text-right">
                            <p className="font-medium text-gray-900">Hello World</p>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
};

export default ViewCard;

import React from 'react'


const GameLoading: React.FC = () => {


    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="text-2xl text-white font-bold">
                Loading Snake Game...
            </div>
            <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="w-full h-full bg-green-500 animate-pulse" />
            </div>
        </div>
    )
}

export default GameLoading
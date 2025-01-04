'use client'
// import { DuelSnakeGame } from "@/api/DuelSnakeGame";
// import { Direction } from "@/api/types";
// import DuelGameBoard from "@/components/game/DuelGameBoard";
// import { useGameLoop } from "@/lib/hooks/useGameLoop";
// import { useEffect, useRef, useState } from "react";



export default function LocalMultiplayerGame() {
    // const [isLoading, setIsLoading] = useState(true);
    // const gameRef = useRef<DuelSnakeGame>(new DuelSnakeGame(20));
    // const [gameState, setGameState] = useState(gameRef.current.getState());

    // useEffect(() => {
    //     const handleKeyPress = (e: KeyboardEvent) => {
    //         switch (e.code) {
    //             // Player 1 movement
    //             case 'KeyW': gameRef.current.changeDirection(Direction.UP, 0);
    //             case 'KeyA': gameRef.current.changeDirection(Direction.LEFT, 0);
    //             case 'KeyS': gameRef.current.changeDirection(Direction.DOWN, 0);
    //             case 'KeyD': gameRef.current.changeDirection(Direction.RIGHT, 0);


    //             // Player 2 movement
    //             case 'ArrowUp': gameRef.current.changeDirection(Direction.UP, 0);
    //             case 'ArrowLeft': gameRef.current.changeDirection(Direction.LEFT, 0);
    //             case 'ArrowDown': gameRef.current.changeDirection(Direction.DOWN, 0);
    //             case 'ArrowRight': gameRef.current.changeDirection(Direction.RIGHT, 0);
    //         }
    //     };

    //     window.addEventListener('keydown', handleKeyPress);
    //     setIsLoading(false);

    //     return () => window.removeEventListener('keydown', handleKeyPress);
    // }, [])

    // useGameLoop(() => {
    //     if (!gameState.isGameOver && !isLoading) {
    //         gameRef.current.update();
    //         setGameState(gameRef.current.getState());
    //     }
    // })


    // return (
    //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
    //         <div className="flex justify-between w-full max-w-2xl mb-4">
    //             <div className="text-white p-2 bg-blue-500/20 rounded-md">
    //                 Player 1: {gameState.players[0].score}
    //             </div>
    //             <div className="text-white p-2 bg-green-500/20 rounded-md">
    //                 Player 2: {gameState.players[1].score}
    //             </div>
    //         </div>
    //         {!isLoading && <DuelGameBoard gameState={gameState} />}
    //     </div>
    // )

    return (
        <div>

        </div>
    )
}
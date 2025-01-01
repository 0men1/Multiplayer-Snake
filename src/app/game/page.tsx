// app/game/single/page.tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import GameBoard from '@/components/game/GameBoard'
import { SnakeGame } from '@/api/game'
import { useGameLoop } from '@/lib/hooks/useGameLoop'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function SinglePlayerGame() {
    const router = useRouter();
    const gameRef = useRef<SnakeGame>(new SnakeGame(20));
    const [gameState, setGameState] = useState(gameRef.current.getState());


    // Set up game loop
    // In your game component
    useGameLoop(() => {
        // Only update if the game is running
        if (!gameState.isGameOver) {
            // Update the game state
            gameRef.current.update();

            // Update React's state with the new game state
            setGameState(gameRef.current.getState());
        }
    }, 10); // 10 FPS for comfortable snake speed


    const handleBackToMenu = () => {
        router.push('/');
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
            <div className="flex items-center justify-between w-full max-w-2xl mb-4">
                <Button
                    variant="outline"
                    onClick={handleBackToMenu}
                    className="text-white"
                >
                    Back to Menu
                </Button>
            </div>
            <GameBoard gameState={gameState} />
            {gameState.isGameOver && (
                <div className="mt-4 text-white text-2xl">
                    Game Over! Score: {gameState.score}
                </div>
            )}
        </div>
    );
}
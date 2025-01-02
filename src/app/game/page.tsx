'use client'
import { useEffect, useRef, useState } from 'react'
import GameBoard from '@/components/game/GameBoard'
import { SnakeGame } from '@/api/game'
import { useGameLoop } from '@/lib/hooks/useGameLoop'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Direction } from '@/api/types'
import GameLoading from '@/components/loading/GameLoading'
import GameOver from '@/components/game/GameOver'

export default function SinglePlayerGame() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    let gameRef = useRef<SnakeGame>(new SnakeGame(20));
    const [gameState, setGameState] = useState(gameRef.current.getState());

    useEffect(() => {
        const initializeGame = async () => {
            try {
                await setupGameComponents();
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to initialize game:', error)
            }
        };
        initializeGame();
    })


    useEffect(() => {
        if (isLoading) return;

        const handleKeyPress = (e: KeyboardEvent) => {
            switch (e.code) {
                case "KeyS":
                case "ArrowDown":
                    // Do something for "down arrow" key press.
                    gameRef.current.changeDirection(Direction.DOWN)
                    break;
                case "KeyW":
                case "ArrowUp":
                    // Do something for "up arrow" key press.
                    gameRef.current.changeDirection(Direction.UP)
                    break;
                case "KeyA":
                case "ArrowLeft":
                    // Do something for "left arrow" key press.
                    gameRef.current.changeDirection(Direction.LEFT)
                    break;
                case "KeyD":
                case "ArrowRight":
                    // Do something for "right arrow" key press.
                    gameRef.current.changeDirection(Direction.RIGHT)
                    break;
            }
        }

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isLoading])


    useGameLoop(() => {
        if (!gameState.isGameOver && !isLoading) {
            gameRef.current.update();
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
                >
                    Back to Menu
                </Button>
                <div className='text-white p-2 bg-white/20 rounded-md'>
                    Score: {gameState.score}
                </div>
            </div>
            {
                isLoading ? (<GameLoading />) : (<><GameBoard gameState={gameState} /></>)
            }
            {gameState.isGameOver && (
                <div className="mt-4 text-white text-2xl">
                    <GameOver title='Game Over!' description='You went out of bounds!' points={gameState.score}/>
                </div>
            )}
        </div>
    );
}


async function setupGameComponents(): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, 1000);
    })
}
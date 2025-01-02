// components/game/GameBoard.tsx
'use client'
import { useRef, useEffect } from 'react'
import { GameState } from '@/api/types' // Make sure this path matches your types

interface GameBoardProps {
    gameState: GameState;
}

const GameBoard: React.FC<GameBoardProps> = ({ gameState }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const CELL_SIZE = 20; // Each grid cell will be 20x20 pixels
    const GRID_SIZE = 20; // 20x20 grid
    const CANVAS_SIZE = CELL_SIZE * GRID_SIZE;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Clear the canvas
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

        // Draw snake
        ctx.fillStyle = 'white';
        gameState.snake.forEach(segment => {
            ctx.fillRect(
                segment.x * CELL_SIZE,
                segment.y * CELL_SIZE,
                CELL_SIZE,
                CELL_SIZE
            );
        });

        ctx.fillStyle = 'red'
        ctx.fillRect(gameState.food.x * CELL_SIZE, gameState.food.y * CELL_SIZE, CELL_SIZE, CELL_SIZE)

    }, [gameState]);

    return (
        <canvas
            ref={canvasRef}
            width={CANVAS_SIZE}
            height={CANVAS_SIZE}
            className="border border-gray-700 rounded-lg"
        />
    );
};

export default GameBoard;
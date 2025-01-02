import { useRef, useEffect } from 'react';
import { GameState } from '@/api/types';

interface GameBoardProps {
    gameState: GameState;
}

const GameBoard: React.FC<GameBoardProps> = ({ gameState }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const CELL_SIZE = 20;
    const GRID_SIZE = 20;
    const CANVAS_SIZE = CELL_SIZE * GRID_SIZE;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Create a pattern for the grid
        const patternCanvas = document.createElement('canvas');
        patternCanvas.width = CELL_SIZE;
        patternCanvas.height = CELL_SIZE;
        const patternCtx = patternCanvas.getContext('2d');
        if (!patternCtx) return;

        // Draw the pattern (a single cell with borders)
        patternCtx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        patternCtx.strokeRect(0, 0, CELL_SIZE, CELL_SIZE);

        // Create the pattern from our small canvas
        const pattern = ctx.createPattern(patternCanvas, 'repeat');
        if (!pattern) return;

        // Clear and fill background
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

        // Apply grid pattern
        ctx.fillStyle = pattern;
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

        // Draw head
        ctx.fillStyle = 'green';
        ctx.fillRect(
            gameState.snake[0].x * CELL_SIZE,
            gameState.snake[0].y * CELL_SIZE,
            CELL_SIZE,
            CELL_SIZE
        );

        // Draw food
        ctx.fillStyle = 'red';
        ctx.fillRect(
            gameState.food.x * CELL_SIZE,
            gameState.food.y * CELL_SIZE,
            CELL_SIZE,
            CELL_SIZE
        );
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
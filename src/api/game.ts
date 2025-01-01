import { Direction, GameState } from "./types";


export class SnakeGame {
    private state: GameState;
    private readonly boardSize: number;

    constructor(boardSize: number = 20) {
        this.boardSize = boardSize;
        this.state = this.getInitialState();
    }

    private getInitialState(): GameState {
        return {
            snake: [{ x: 10, y: 10 }],
            food: null,
            direction: Direction.RIGHT,
            score: 0,
            isGameOver: false
        }
    }

    update(): GameState {
        if (this.state.isGameOver) return this.state;

        const head = this.state.snake[0];
        const newHead = { ...head };

        // Update the new head's position based on current direction
        switch (this.state.direction) {
            case Direction.UP:
                newHead.y -= 1;  // Move up by decreasing y
                break;
            case Direction.DOWN:
                newHead.y += 1;  // Move down by increasing y
                break;
            case Direction.LEFT:
                newHead.x -= 1;  // Move left by decreasing x
                break;
            case Direction.RIGHT:
                newHead.x += 1;  // Move right by increasing x
                break;
        }

        // Add the new head to the front of the snake array
        this.state.snake.unshift(newHead);

        // Remove the last segment of the snake to maintain its length
        this.state.snake.pop();

        return this.state;
    }

    getState(): GameState {
        return { ...this.state }
    }

    reset() {
        this.state = this.getInitialState();
    }
}
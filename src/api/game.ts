import { Direction, GameState, Position } from "./types";


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
            food: this.generateFood(),
            direction: Direction.RIGHT,
            score: 0,
            isGameOver: false
        }
    }

    private isPositionOccupied(position: Position): boolean {
        if (this.state) {
            return this.state.snake.some(segment => segment.x === position.x && segment.y === position.y)
        }
        return false
    }

    generateFood(): Position {
        let newFood: Position;
        do {
            newFood = {
                x: Math.floor(Math.random() * this.boardSize),
                y: Math.floor(Math.random() * this.boardSize)
            }
        } while (this.isPositionOccupied(newFood))

        return newFood;
    }

    update() {
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

        if (this.hasEatenFood(newHead)) {
            this.state.score++;
            this.state.food = this.generateFood()
        } else {
            this.state.snake.pop();
        }
    }

    private hasEatenFood(head: Position): boolean {
        return head.x === this.state.food.x && head.y == this.state.food.y
    }

    checkCollision(): boolean {
        const head = this.state.snake[0]
        return (head.x < 0 && head.y < 0) || (head.x > this.boardSize && head.y > this.boardSize)
    }

    getState(): GameState {
        return { ...this.state }
    }

    reset() {
        this.state = this.getInitialState();
    }

    changeDirection(newDirection: Direction) {
        this.state.direction = newDirection;
    }
}
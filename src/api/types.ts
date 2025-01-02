
export enum Direction {
    UP = 'UP',
    DOWN = 'DOWN',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT'
}


export interface Position {
    x: number,
    y: number
}

export interface GameState {
    snake: Position[];
    food: Position 
    direction: Direction;
    score: number;
    isGameOver: boolean
}
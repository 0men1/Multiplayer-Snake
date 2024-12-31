
/**
 * Handle type of game
 * Handle map size
 */

export enum CellType {
    EMPTY = 'EMPTY',
    SNAKE = 'SNAKE',
    FOOD = 'FOOD',
    WALL = 'WALL'
}

interface Position {
    x: number,
    y: number
}


export interface Cell {
    type: CellType;
    position: Position;
}


export class Game {
    private map: Cell[][];
    mapWidth: number;
    mapHeight: number;

    constructor(height: number, width: number) {
        this.mapHeight = height;
        this.mapWidth = width;
        this.map = Array.from({ length: height }, (_, y) =>
            Array.from({ length: width }, (_, x) => ({
                type: CellType.EMPTY,
                position: { x, y }
            }))
        )
    }

    getCell(p: Position): Cell | null{
        if (p.x < 0 || p.x >= this.mapWidth 
            || p.y < 0 || p.y >= this.mapHeight) {
            return null;
        }
        return this.map[p.y][p.x]
    }

    setCell(p: Position, type: CellType): void {
        if (this.getCell(p)) {
            this.map[p.y][p.x] = {
                ...this.map[p.y][p.x],
                type,
            }
        }
    }

    getMap(): Cell[][] {
        return this.map
    }


}
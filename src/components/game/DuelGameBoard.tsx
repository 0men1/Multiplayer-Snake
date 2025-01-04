import { DuelGameState } from "@/api/types";
import React from "react";

interface DuelGameBoardProps {
    gameState: DuelGameState
}

const DuelGameBoard: React.FC<DuelGameBoardProps> = (gameState) => {
    const g = gameState.gameState.isGameOver;
    console.log(g)
    return (
        <div>

        </div>
    )
}


export default DuelGameBoard
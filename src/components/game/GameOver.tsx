import React, { useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import { SnakeGame } from '@/api/game';

interface GameOverProps {
    title: string;
    description: string;
    points: number;
    gameRef: React.MutableRefObject<SnakeGame>;
    setGameState: React.Dispatch<React.SetStateAction<any>>;
    onExit: () => void;
}

const GameOver: React.FC<GameOverProps> = ({
    title,
    description,
    points,
    gameRef,
    setGameState,
    onExit
}) => {
    const handleRestart = () => {
        // Create a new game instance with the same size
        gameRef.current.reset();
        // Update the game state to reflect the new game
        setGameState(gameRef.current.getState());
    };

    useEffect(() => {
        const handleRestartKeyPress = (e: KeyboardEvent) => {
            switch (e.code) {
                case "Space":
                    handleRestart();
                    break;
            }
        }
        window.addEventListener('keydown', handleRestartKeyPress)
        return () => window.removeEventListener('keydown', handleRestartKeyPress)
    }, [])



    const handleSubmitScore = () => {
        // You can implement leaderboard submission logic here
        console.log('Submitting score:', points);
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <Card className="w-96 bg-zinc-900 border-zinc-800 text-white animate-in zoom-in-95 duration-200">
                <CardHeader className="text-center space-y-4">
                    <CardTitle className="text-2xl font-bold tracking-tight">
                        {title}
                    </CardTitle>

                    <div className="flex items-center justify-center gap-2 text-amber-400">
                        <Trophy className="w-6 h-6" />
                        <span className="text-3xl font-bold">{points}</span>
                    </div>
                </CardHeader>

                <CardContent>
                    <p className="text-zinc-400 text-center">
                        {description}
                    </p>
                </CardContent>

                <CardFooter className="flex flex-col gap-3">
                    <Button
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        onClick={handleRestart}
                    >
                        Play Again
                    </Button>

                    <Button
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                        onClick={handleSubmitScore}
                    >
                        Submit to Leaderboard
                    </Button>

                    <Button
                        variant="outline"
                        className="w-full border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                        onClick={onExit}
                    >
                        Exit to Menu
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default GameOver;
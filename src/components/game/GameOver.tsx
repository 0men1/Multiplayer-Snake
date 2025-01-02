import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";

interface GameOverProps {
    title: string;
    description: string;
    points: number;
}

const GameOver: React.FC<GameOverProps> = ({ title, description, points }) => {
    const handleGameReset = () => {

    }
    return (
        // Overlay background with a semi-transparent backdrop
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            {/* Main card container with a subtle scale animation on appear */}
            <Card className="w-96 bg-zinc-900 border-zinc-800 text-white animate-in zoom-in-95 duration-200">
                <CardHeader className="text-center space-y-4">
                    {/* Game over title */}
                    <CardTitle className="text-2xl font-bold tracking-tight">
                        {title}
                    </CardTitle>
                    
                    {/* Points display with trophy icon */}
                    <div className="flex items-center justify-center gap-2 text-amber-400">
                        <Trophy className="w-6 h-6" />
                        <span className="text-3xl font-bold">{points}</span>
                    </div>
                </CardHeader>

                <CardContent>
                    {/* Game over message */}
                    <p className="text-zinc-400 text-center">
                        {description}
                    </p>
                </CardContent>

                <CardFooter className="flex flex-col gap-3">
                    {/* Primary action buttons */}
                    <Button 
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                        Play Again
                    </Button>
                    
                    <Button 
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    >
                        Submit to Leaderboard
                    </Button>
                    
                    <Button 
                        variant="outline"
                        className="w-full border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                    >
                        Exit to Menu
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default GameOver;
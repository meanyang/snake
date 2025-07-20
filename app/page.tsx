"use client";

import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const gameBoardRef = useRef<HTMLDivElement>(null);
  const [snake, setSnake] = useState<{ x: number; y: number }[]>([
    { x: 11, y: 11 },
  ]);
  const [food, setFood] = useState<{ x: number; y: number }>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [lastDirection, setLastDirection] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (!gameStarted) return;
    const intervalId = setInterval(() => {
      if (gameOver) return;
      moveSnake();
      checkCollision();
      checkFood();
    }, 100);

    return () => clearInterval(intervalId);
  }, [snake, direction, gameOver, gameStarted]);

  useEffect(() => {
    if (!gameStarted) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          if (lastDirection.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (lastDirection.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (lastDirection.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (lastDirection.x !== -1) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
      if (direction.x !== 0 || direction.y !== 0) {
        setLastDirection(direction);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction, lastDirection, gameStarted]);

  const moveSnake = () => {
    const head = { ...snake[0] };
    head.x += direction.x;
    head.y += direction.y;
    setSnake((prevSnake) => [head, ...prevSnake.slice(0, -1)]);
  };

  const checkCollision = () => {
    const head = snake[0];
    if (
      head.x < 1 ||
      head.x > 21 ||
      head.y < 1 ||
      head.y > 21 ||
      snake.slice(1).some((segment) => segment.x === head.x && segment.y === head.y)
    ) {
      setGameOver(true);
      saveScore();
    }
  };

  const checkFood = () => {
    const head = snake[0];
    if (head.x === food.x && head.y === food.y) {
      setSnake((prevSnake) => {
        const newHead = { ...prevSnake[0] };
        newHead.x += direction.x;
        newHead.y += direction.y;
        return [newHead, ...prevSnake];
      });
      let newFood: { x: number; y: number };
      do {
        newFood = {
          x: Math.floor(Math.random() * 21) + 1,
          y: Math.floor(Math.random() * 21) + 1,
        };
      } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
      setFood(newFood);
    };
  };

  const startGame = () => {
    if (playerName.trim()) {
      setGameStarted(true);
    }
  };

  const saveScore = async () => {
    const score = snake.length - 1;
    try {
      const response = await fetch('/api/save-score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ playerName, score }),
      });
      const data = await response.json();
      console.log('Player score saved:', data);
    } catch (error) {
      console.error('Error saving player score:', error);
    }
  };

  const restartGame = () => {
    setSnake([{ x: 11, y: 11 }]);
    // 随机生成食物位置
    setFood({
      x: Math.floor(Math.random() * 21) + 1,
      y: Math.floor(Math.random() * 21) + 1,
    });
    setDirection({ x: 0, y: 0 });
    setLastDirection({ x: 0, y: 0 });
    setGameOver(false);
    setGameStarted(false);
  };

  if (!gameStarted) {
    // 在返回部分更新卡片结构
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            请输入你的名字
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="玩家名称"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="text-foreground"
          />
        </CardContent>
        <CardFooter>
          <Button
            onClick={startGame}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            开始游戏
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <div>
      {/* 游戏界面 */}
      <div ref={gameBoardRef} id="game-board">
        {snake.map((segment, index) => (
          <div
            key={index}
            className="snake"
            style={{
              gridRowStart: segment.y,
              gridColumnStart: segment.x,
            }}
          />
        ))}
        <div
          className="food"
          style={{
            gridRowStart: food.y,
            gridColumnStart: food.x,
          }}
        />
      </div>
      {/* 游戏结束弹窗 */}
      {gameOver && (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">游戏结束！</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">你的分数: {snake.length - 1}</p>
          </CardContent>
          <CardFooter>
            <Button
              onClick={restartGame}
              className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              重新开始
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
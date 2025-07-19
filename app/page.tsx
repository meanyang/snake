"use client"; // Mark this file as a Client Component

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const gameBoardRef = useRef<HTMLDivElement>(null);
  const [snake, setSnake] = useState<{ x: number; y: number }[]>([
    { x: 11, y: 11 },
  ]);
  const [food, setFood] = useState<{ x: number; y: number }>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [lastDirection, setLastDirection] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (gameOver) return;
      moveSnake();
      checkCollision();
      checkFood();
    }, 100);

    return () => clearInterval(intervalId);
  }, [snake, direction, gameOver]);

  useEffect(() => {
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
  }, [direction, lastDirection]);

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
      setFood({
        x: Math.floor(Math.random() * 21) + 1,
        y: Math.floor(Math.random() * 21) + 1,
      });
    }
  };

  const restartGame = () => {
    setSnake([{ x: 11, y: 11 }]);
    setFood({ x: 5, y: 5 });
    setDirection({ x: 0, y: 0 });
    setLastDirection({ x: 0, y: 0 });
    setGameOver(false);
  };

  return (
    <div>
      {gameOver && (
        <div>
          <p>游戏结束！</p>
          <button onClick={restartGame}>重新开始</button>
        </div>
      )}
      <div id="game-board" ref={gameBoardRef}>
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
    </div>
  );
}
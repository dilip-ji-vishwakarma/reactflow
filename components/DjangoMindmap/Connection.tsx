"use client"
import React, { useEffect, useState } from 'react';

interface ConnectionProps {
  from: string;
  to: string;
}

const Connection: React.FC<ConnectionProps> = ({ from, to }) => {
  const [position, setPosition] = useState<{ x1: number; y1: number; x2: number; y2: number }>({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  });

  useEffect(() => {
    const fromElement = document.getElementById(from);
    const toElement = document.getElementById(to);

    if (fromElement && toElement) {
      const fromRect = fromElement.getBoundingClientRect();
      const toRect = toElement.getBoundingClientRect();

      setPosition({
        x1: fromRect.left + fromRect.width / 2,
        y1: fromRect.top + fromRect.height / 2,
        x2: toRect.left + toRect.width / 2,
        y2: toRect.top + toRect.height / 2,
      });
    }
  }, [from, to]);

  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
      }}
      width="100%"
      height="100%"
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="10"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="white" />
        </marker>
      </defs>
      <line
        x1={position.x1}
        y1={position.y1}
        x2={position.x2}
        y2={position.y2}
        stroke="white"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );
};

export default Connection;

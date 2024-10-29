import React from 'react';

interface NodeProps {
  id: string;
  label: string;
  x: number;
  y: number;
}

const Node: React.FC<NodeProps> = ({ id, label, x, y }) => {
  return (
    <div
      id={id}
      style={{
        position: 'absolute',
        top: y,
        left: x,
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: '#222',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      {label}
    </div>
  );
};

export default Node;

"use client";
import React, { useCallback, useState } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Node,
} from "@xyflow/react";

import "@xyflow/react/dist/base.css";
import { CustomNode } from "./CustomNode";

const nodeTypes = {
  custom: CustomNode,
};


const initNodes = [
  {
    id: "1",
    type: "custom",
    data: { name: "React.JS", imageUrl: "/images/react.png" },
    position: { x: 29.5, y: -19 },
  },
  {
    id: "2",
    type: "custom",
    data: { name: "HTML", imageUrl: "/images/html.png" },
    position: { x: -200, y: 182.5 },
  },
  {
    id: "3",
    type: "custom",
    data: { name: "CSS", imageUrl: "/images/css.png" },
    position: { x: 30, y: 182.5 },
  },
  {
    id: "4",
    type: "custom",
    data: { name: "JavaScript", imageUrl: "/images/js.png" },
    position: { x: 300, y: 182.5 },
  },
  {
    id: "5",
    type: "custom",
    data: { children: true, item: ["What is HTML?", "History of HTML", "HTML Versions", "HTML Document Structure"] },
    position: { x: -342.8, y: 297.0 },
  },
  {
    id: "6",
    type: "custom",
    data: { children: true, item: ["What is css?", "History of HTML", "HTML Versions", "HTML Document Structure"] },
    position: { x: -30.799999999999983, y: 297.0 },
  },
  {
    id: "7",
    type: "custom",
    data: { children: true, item: ["Advanced JavaScript", "Asynchronous JS", "JavaScript Frameworks"] },
    position: { x: 360.50155412329525, y: 297.0 },
  },
];

const initEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e2-5", source: "2", target: "5" },
  { id: "e2-6", source: "3", target: "6" },
  { id: "e4-7", source: "4", target: "7" },
];

export const CardMindmap = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);
  const [visibleNodes, setVisibleNodes] = useState<string[]>(["1"]);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeDragStop = useCallback(
    (event: React.MouseEvent, node: Node) => {
      console.log(`Node ${node.id} moved to position:`, node.position);
    },
    []
  );

  const handleNodeClick = (nodeId: string) => {
    console.log(setNodes);
    if (nodeId === "1") {
      setVisibleNodes((prev) =>
        prev.includes("2") && prev.includes("3") && prev.includes("4")
          ? ["1"]
          : ["1", "2", "3", "4"]
      );
    } else if (nodeId === "2") {
      setVisibleNodes((prev) =>
        prev.includes("5") ? prev.filter((id) => id !== "5") : [...prev, "5"]
      );
    } else if (nodeId === "3") {
      setVisibleNodes((prev) =>
        prev.includes("6") ? prev.filter((id) => id !== "6") : [...prev, "6"]
      );
    } else if (nodeId === "4") {
      setVisibleNodes((prev) =>
        prev.includes("7") ? prev.filter((id) => id !== "7") : [...prev, "7"]
      );
    }
  };

  const nodesToRender = nodes.map((node) => ({
    ...node,
    hidden: !visibleNodes.includes(node.id),
  }));

  return (
    <ReactFlow
      nodes={nodesToRender}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodeDragStop={onNodeDragStop}
      nodeTypes={nodeTypes}
      fitView
      className="bg-teal-50"
      onNodeClick={(event, node) => handleNodeClick(node.id)}
    />
  );
};

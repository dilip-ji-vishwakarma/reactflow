import React from 'react';
import Node from './Node';
import Connection from './Connection';


export const DjangoMindmap = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {/* Nodes */}
      <Node id="django" label="Django" x={300} y={50} />
      <Node id="e2eflow" label="E2EFlow" x={50} y={200} />
      <Node id="routerRegister" label="RouteRegister" x={200} y={200} />
      <Node id="classBased" label="Class Based" x={350} y={200} />
      <Node id="functionBased" label="Function Based" x={500} y={200} />
      <Node id="drf" label="DRF" x={650} y={200} />
      <Node id="djangoFlow" label="Django Flow" x={300} y={350} />

      {/* Connections (SVG Lines) */}
      <Connection from="django" to="e2eflow" />
      <Connection from="django" to="routerRegister" />
      <Connection from="django" to="classBased" />
      <Connection from="django" to="functionBased" />
      <Connection from="django" to="drf" />
      <Connection from="drf" to="modelViewSet" />
    </div>
  )
}

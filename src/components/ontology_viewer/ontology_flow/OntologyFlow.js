import React from "react";
import { ReactFlow, useNodesState, useEdgesState } from "reactflow";
import "reactflow/dist/style.css";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default ({ ontology }) => {
    if (ontology) {
        const initialNodes = ontology.nodes.map((n) =>
            Object({
                id: n.id,
                position: { x: getRandomInt(0, 3000), y: getRandomInt(0, 1500) },
                draggable: true,
                data: {
                    label: n.data.text
                        ? n.data.text
                        : n.data.name
                        ? n.data.name
                        : n.data.title
                        ? n.data.title
                        : n.type + n.data.id,
                },
            })
        );

        const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
        const edges = ontology.edges.map((e) => Object({ id: e.id, source: e.source, target: e.target }));
        return (
            <div style={{ height: "800px" }}>
                <ReactFlow
                    onNodesChange={onNodesChange}
                    style={{ height: "800px" }}
                    nodes={nodes}
                    edges={edges}
                ></ReactFlow>
            </div>
        );
    }
};

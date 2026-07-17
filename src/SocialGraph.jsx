import { useCallback, useEffect, useMemo, useState } from 'react'
import { ReactFlow, useNodesState } from '@xyflow/react'
import JunctionNode from './graph/JunctionNode'
import PersonNode from './graph/PersonNode'
import { createGraphEdges, createGraphNodes } from './graph/graphBuilder'

const nodeTypes = { person: PersonNode, junction: JunctionNode }

export default function SocialGraph() {
  const [selectedId, setSelectedId] = useState(null)
  const handleSelect = useCallback((id) => {
    setSelectedId((current) => (current === id ? null : id))
  }, [])
  const initialNodes = useMemo(() => createGraphNodes(handleSelect), [handleSelect])
  const edges = useMemo(() => createGraphEdges(), [])
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)

  useEffect(() => {
    setNodes((currentNodes) => currentNodes.map((node) => (
      node.type === 'person'
        ? { ...node, data: { ...node.data, selected: node.id === selectedId } }
        : node
    )))
  }, [selectedId, setNodes])

  return (
    <section className="relative h-[900px] w-[760px]" aria-label="Family and friend relationship network">
      <span className="pointer-events-none absolute left-[452px] top-[17px] z-10 text-lg font-semibold text-[#7433cf]">FAMILY</span>
      <span className="pointer-events-none absolute left-[62px] top-[532px] z-10 text-lg font-semibold text-[#0969df]">FRIENDS</span>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        minZoom={1}
        maxZoom={1}
        nodesDraggable
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
        className="bg-transparent"
      />
    </section>
  )
}

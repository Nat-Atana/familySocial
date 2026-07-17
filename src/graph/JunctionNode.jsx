import { Handle, Position } from '@xyflow/react'

export default function JunctionNode() {
  return (
    <div className="size-px" aria-hidden="true">
      <Handle type="target" position={Position.Top} className="graph-handle" />
      <Handle type="source" position={Position.Bottom} className="graph-handle" />
    </div>
  )
}

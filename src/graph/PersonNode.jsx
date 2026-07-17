import { memo } from 'react'
import { Handle, Position } from '@xyflow/react'

function PersonNode({ data }) {
  const isYou = data.id === 'you'
  const avatarSize = isYou ? 'size-[165px] min-h-[165px] min-w-[165px] border-4 p-[5px]' : 'size-[88px] border-2 p-0.5'
  const labelStyle = isYou
    ? '-mt-0.5 rounded-[7px] bg-[#1169d9] px-[18px] py-1.5 text-2xl font-medium text-white'
    : 'mt-[5px] bg-white px-2 py-[3px] text-sm font-semibold leading-tight'

  return (
    <button
      type="button"
      aria-label={`Highlight ${data.name}`}
      aria-pressed={data.selected}
      onClick={() => data.onSelect(data.id)}
      style={{ '--avatar-center-y': isYou ? '82.5px' : '44px' }}
      className={`group relative flex ${isYou ? 'w-[165px]' : 'w-[116px]'} cursor-pointer flex-col items-center border-0 bg-transparent p-0 outline-none`}
    >
      <Handle type="target" position={Position.Top} className="graph-handle person-handle" />
      <Handle id="diagonal-right" type="source" position={Position.Bottom} className="graph-handle person-handle diagonal-right-handle" />
      <Handle id="diagonal-left" type="source" position={Position.Bottom} className="graph-handle person-handle diagonal-left-handle" />
      <img
        src={data.avatar}
        alt=""
        className={`${avatarSize} aspect-square shrink-0 rounded-full border-[var(--ring)] bg-white object-cover transition-shadow duration-200 ${data.selected ? 'shadow-[0_0_0_3px_color-mix(in_srgb,var(--ring)_28%,transparent)]' : ''}`}
      />
      <span className={`${labelStyle} relative z-10 whitespace-nowrap`}>{data.name}</span>
      <Handle id="center-source" type="source" position={Position.Bottom} className="graph-handle person-handle" />
    </button>
  )
}

export default memo(PersonNode)

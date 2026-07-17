import { connections, junctions, people, relationshipStyles } from '../data.js'

export function createGraphNodes(onSelect) {
  const personNodes = people.map((person) => {
    const isYou = person.id === 'you'
    const radius = isYou ? 82.5 : 44
    const halfWidth = isYou ? 82.5 : 58

    return {
      id: person.id,
      type: 'person',
      position: { x: person.x - halfWidth, y: person.y - radius },
      data: { ...person, selected: false, onSelect },
      style: { '--ring': relationshipStyles[person.type].color },
    }
  })

  const junctionNodes = junctions.map((junction) => ({
    id: junction.id,
    type: 'junction',
    position: { x: junction.x - 0.5, y: junction.y - 0.5 },
    data: {},
    draggable: false,
    selectable: false,
  }))

  return [...personNodes, ...junctionNodes]
}

export function createGraphEdges() {
  return connections.map((connection) => {
    const style = relationshipStyles[connection.type]
    return {
      id: connection.id,
      source: connection.source,
      target: connection.target,
      sourceHandle: connection.sourceHandle ?? (connection.centered ? 'center-source' : undefined),
      type: 'straight',
      style: {
        stroke: style.color,
        strokeWidth: 2,
        strokeDasharray: style.dashed ? '7 7' : undefined,
      },
    }
  })
}

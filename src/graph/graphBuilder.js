import { connections, junctions, people, relationshipStyles } from '../data.js'

const graphSize = { width: 760, height: 900 }
const personSizes = {
  default: { width: 116, height: 120, centerX: 58, centerY: 44 },
  you: { width: 165, height: 207, centerX: 82.5, centerY: 82.5 },
}
const linkedJunctions = {
  gpTop: ['grandfather', 'grandmother'],
  parentMid: ['father', 'mother'],
}

function getPersonSize(node) {
  return personSizes[node.id] ?? personSizes.default
}

function getPersonCenter(node) {
  const size = getPersonSize(node)
  return {
    x: node.position.x + size.centerX,
    y: node.position.y + size.centerY,
  }
}

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

export function keepGraphConnected(nodes) {
  const constrainedNodes = nodes.map((node) => {
    if (node.type !== 'person') return node

    const size = getPersonSize(node)
    return {
      ...node,
      position: {
        x: Math.min(Math.max(node.position.x, 0), graphSize.width - size.width),
        y: Math.min(Math.max(node.position.y, 0), graphSize.height - size.height),
      },
    }
  })
  const nodesById = new Map(constrainedNodes.map((node) => [node.id, node]))

  return constrainedNodes.map((node) => {
    const linkedPeople = linkedJunctions[node.id]
    if (!linkedPeople) return node

    const [firstNode, secondNode] = linkedPeople.map((id) => nodesById.get(id))
    if (!firstNode || !secondNode) return node

    const firstCenter = getPersonCenter(firstNode)
    const secondCenter = getPersonCenter(secondNode)
    return {
      ...node,
      position: {
        x: (firstCenter.x + secondCenter.x) / 2 - 0.5,
        y: (firstCenter.y + secondCenter.y) / 2 - 0.5,
      },
    }
  })
}

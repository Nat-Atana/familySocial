import test from 'node:test'
import assert from 'node:assert/strict'
import { connections, junctions, people, relationshipStyles } from '../data.js'
import { createGraphEdges, createGraphNodes, keepGraphConnected } from './graphBuilder.js'

test('all connections reference valid nodes and relationship types', () => {
  const nodeIds = new Set([...people.map(({ id }) => id), ...junctions.map(({ id }) => id)])
  connections.forEach((connection) => {
    assert(nodeIds.has(connection.source), `Unknown source: ${connection.source}`)
    assert(nodeIds.has(connection.target), `Unknown target: ${connection.target}`)
    assert(relationshipStyles[connection.type], `Unknown relationship type: ${connection.type}`)
  })
})

test('graph builder creates one node and edge per data definition', () => {
  assert.equal(createGraphNodes(() => {}).length, people.length + junctions.length)
  assert.equal(createGraphEdges().length, connections.length)
})

test('centered and diagonal relationships use explicit source handles', () => {
  const edges = createGraphEdges()
  assert.equal(edges.find(({ id }) => id === 'spouse-stem').sourceHandle, 'center-source')
  assert.equal(edges.find(({ id }) => id === 'father-you').sourceHandle, 'diagonal-right')
  assert.equal(edges.find(({ id }) => id === 'mother-you').sourceHandle, 'diagonal-left')
})

test('dragged people stay visible and linked junctions stay connected', () => {
  const nodes = createGraphNodes(() => {}).map((node) => {
    if (node.id === 'grandfather') return { ...node, position: { x: -200, y: -100 } }
    if (node.id === 'grandmother') return { ...node, position: { x: 900, y: 1000 } }
    return node
  })
  const result = keepGraphConnected(nodes)
  const grandfather = result.find(({ id }) => id === 'grandfather')
  const grandmother = result.find(({ id }) => id === 'grandmother')
  const junction = result.find(({ id }) => id === 'gpTop')

  assert.deepEqual(grandfather.position, { x: 0, y: 0 })
  assert.deepEqual(grandmother.position, { x: 644, y: 780 })
  assert.deepEqual(junction.position, { x: 379.5, y: 433.5 })
})

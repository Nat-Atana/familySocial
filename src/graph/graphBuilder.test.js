import test from 'node:test'
import assert from 'node:assert/strict'
import { connections, junctions, people, relationshipStyles } from '../data.js'
import { createGraphEdges, createGraphNodes } from './graphBuilder.js'

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

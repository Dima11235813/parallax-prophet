import { describe, it, expect } from 'vitest'
import { createOriginMarker, createSocketMarkers, allMarkers } from '../domain/helpers/markers'

describe('markers helpers', () => {
  it('creates an origin marker at (0,0,0)', () => {
    const m = createOriginMarker()
    expect(m).toMatchObject({ x: 0, y: 0, z: 0, label: 'origin' })
  })

  it('creates three socket markers with labels', () => {
    const sockets = createSocketMarkers()
    expect(sockets.length).toBe(3)
    const labels = sockets.map((s) => s.label)
    expect(labels).toEqual(['socket A', 'socket B', 'socket C'])
  })

  it('allMarkers returns origin + sockets', () => {
    const all = allMarkers()
    expect(all.length).toBe(4)
    expect(all[0].label).toBe('origin')
  })
})

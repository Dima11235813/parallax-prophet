import { describe, it, expect } from 'vitest'
import {
  createDefaultCameraState,
  getCurrentMode,
  toggleMode,
  reset,
  deriveCameraParams,
  updateOrbitFromDrag,
  updateOrbitFromWheel,
} from './cameraModeManager'

describe('camera mode manager (domain, pure)', () => {
  it('initial mode is orbit and params are derived from orbit', () => {
    const s = createDefaultCameraState()
    expect(getCurrentMode(s)).toBe('orbit')
    const params = deriveCameraParams(s)
    expect(params.lookAt).toMatchObject({ x: 0, y: 0.7, z: 0 })
  })

  it('toggle switches between orbit and free', () => {
    const s1 = createDefaultCameraState()
    const s2 = toggleMode(s1)
    const s3 = toggleMode(s2)
    expect(getCurrentMode(s2)).toBe('free')
    expect(getCurrentMode(s3)).toBe('orbit')
  })

  it('reset returns a fresh default state', () => {
    const s1 = createDefaultCameraState()
    toggleMode(s1)
    const s3 = reset()
    expect(getCurrentMode(s3)).toBe('orbit')
  })

  it('drag updates azimuth and clamps elevation', () => {
    const s1 = createDefaultCameraState()
    const s2 = updateOrbitFromDrag(s1, 0.1, 100)
    expect(s2.orbit.elevation).toBeLessThanOrEqual(s1.orbit.elevationMax)
    const s3 = updateOrbitFromDrag(s1, -0.2, -100)
    expect(s3.orbit.elevation).toBeGreaterThanOrEqual(s1.orbit.elevationMin)
  })

  it('wheel updates radius with clamping', () => {
    let s = createDefaultCameraState()
    for (let i = 0; i < 100; i++) s = updateOrbitFromWheel(s, 1)
    expect(s.orbit.radius).toBeLessThanOrEqual(s.orbit.radiusMax)
    for (let i = 0; i < 100; i++) s = updateOrbitFromWheel(s, -1)
    expect(s.orbit.radius).toBeGreaterThanOrEqual(s.orbit.radiusMin)
  })

  it('free mode derives camera from free params', () => {
    const s1 = createDefaultCameraState()
    const s2 = toggleMode(s1) // to free
    const params = deriveCameraParams(s2)
    expect(params.position).toMatchObject(s2.free.position)
    expect(params.lookAt).toMatchObject(s2.free.lookAt)
  })
})
